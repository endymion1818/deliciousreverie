+++
date = "2019-07-18T15:21:21+01:00"
draft = false
title = "Normalizing data using array.prototype.reduce"
description = "reduce() has terrified me for some time! I hadn't wanted to touch this new array method because I couldn't quite follow what each of it's properties meant. But recently I had an opportunity to deep dive into this function. Here's how I refactored an object to get the results I needed"
categories = [
  "development"
]
tags = [ 
    "javascript", 
]
+++

**reduce() has terrified me for some time! I hadn't wanted to touch this new array method because I couldn't quite follow what each of it's properties meant. But recently I had an opportunity to deep dive into this function. Here's how I refactored an object to get the results I needed:**

I'm beginning to realise how important good API design is. One API I call for a project has only one endpoint: a list of items. Each item is quite large, with loads of tags and categories. Yet I can't query the API by any of those.

This became an issue when I had a requirement to display them by categories. The real trick was that the category was inside a nested object. AND it had to be matched and replaced by a different value before I displayed it.

Here's an example of the object once I'd parsed the JSON:

```js
{
    title: "some title",
    categories: {
        team: "teamone"
    }
}
```

What I needed for it to be displayed was this:

```js
{
    teamone: {
        [{
            title: "some title",
            categories: {
                team: "teamone"
            }
        }, {
            ...
        }, ]
    }
}
```

## Step 1: Map & Replace values

The first thing I did was to map the new values of the team using the following method:

```js

itemsTeamsMap {
                "teamone" : "team1",
                "teamtwo" : "team2",
}
 
const itemsMapped = []
 
  const filteredItems = edges.map(item => {
    item.node.categories.team = itemsTeamsMap[item.node.categories.team]
    itemsMapped.push(item)
  })
```

This was especially important because it wasn't a 1:1 match, some teams would be reassigned to other new values.

## Step 2: Sort items using Reduce()

Once I had that, I needed to sort my items by the new team values I'd given them so that grouping would be easier using a bubble sort:

```js
  const sortedItems = ItemsMapped.reduce((acc, current) => {
    acc[current.node.categories.team] = acc[current.node.categories.team] || []
    acc[current.node.categories.team].push(current)
    return acc
  }, Object.create(null))
```

It took me a good while to get my head around the reduce function, something that's been called the most powerful function in JavaScript. The first argument is the accumulator value, or something which accumulates each iteration of the function.

The second value is the current item you're iterating over, which you can modify with any function you put into the body.

Here' I'm pushing the current value into the team item of each item in the accumulator and then creating an object from that value.

The result of this function on my original data is this:

```js
{
    team1: [{
            title: 'some title',
            categories: {
                team: 'team1'
                    ...
            }
            ...
        }, {
            ...
        },
        ...
    ]
}
```

This was a good deal closer to the final object that I needed. Of course though, I needed an array of objects that I could iterate over in my JSX template...

## Step 3: Array of Objects

```js
  const finalisedItems = Object.entries(sortedItems).reduce(
    (acc, [team, items]) =>
      acc.concat({
        team,
        items,
      }),
    []
  )
```
I love the new object methods introduced recently to JavaScript. They allow you to do so much more with objects natively ... in this function, for each entry of the object I'm passing in, it will concat the team into an array of objects, where team is the title, and each group of items is an array of objects inside of that:

```js
[{
        team: 'team1',
        items: [{
                title: 'some title',
                categories: {
                    team: 'team1'
                        ...
                }
                ...
            },
            ...
        ]
    }, {
        team: 'team2',
        items: [{
                title: 'some other title',
                categories: {
                    team: 'team2'
                        ...
                }
                ...
            },
            ...
        ]
    },
    ...
]
```

Step 4: templating
Now I can iterate over each team, then each item in that team, outputting semantic elements (&lsaquo;li&rsaquo;s) for each item:

```js
 {finalisedItems.map(itemsTeam => (
        <div key={itemsTeam.team}>
          <h3>{itemsTeam.team}</h3>
          <ul>
            {itemsTeam.items.map(item => (
              <li key={item.node.id}>
                <a to={item.node.url}>
                  {item.node.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
```

Going the extra mile in normalising this object isn't a challenge I relished, however I have improved a lot as a developer by working through and providing a solution.

I learned that trying to do a faster job didn't yield the correct results, so my fastest solution was by far the best.

Sometimes you've just got to knuckle down, go in for the long haul, and you'll find you've come out the other end similarly restructured (in a good way!)