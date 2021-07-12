---
title: "React: data fetching results in type error: object is not a function"
categories:
  - development
date: "2021-07-12T10:21:21+01:00"
description: "Sometimes I get frustrated with React, there can still sometimes be obscure errors that are a result of it's component lifecycle methods. But at least it means I can tell you about how to avoid them ..."
draft: false
tags:
  - javascript
  - indigotree
---

**Sometimes I get frustrated with React, there can still sometimes be obscure errors that are a result of it's component lifecycle methods. But at least it means I can tell you about how to avoid them ...**

Take a look at this code a second. There's nothing wrong with the fetch() resolution, the API works fine. There's nothing wrong with the render method either.

But if you try to run this code you'll get some error like `Error: Objects are not valid as a React child (found: [object Promise])`.

```javascript
async function getFacts() {
  const response = await fetch("https://cat-fact.herokuapp.com/facts/random?amount=10")
  if (!response.ok) {
    throw new Error(‘error’)
  }
  const facts = await response.json()
  return facts
}
export default async function Home() {
  const facts = await getFacts();
  return (
    <div>
    {facts && facts.map(fact => (
      <div key={fact.id}>test</div>
    ))}
    </div>
  )
}
```

The problem is that the data you fetched isn't consumed by the components' lifecycle. Yet there's nothing to tell you that in the error. Here's what you need to do to resolve it:

```javascript
import { useEffect, useState } from 'react'

async function getFacts() {
  const response = await fetch("https://cat-fact.herokuapp.com/facts/random?amount=10")
  if (!response.ok) {
    throw new Error(‘error’)
  }
  const facts = await response.json()
  return facts
}
export default async function Home() {
  const [facts, setFacts] = useState()

  useEffect(() => {
      getFacts().then(facts => setFacts(facts))
  }, [])

  return (
    <div>
    {facts && facts.map(fact => (
      <div key={fact.id}>test</div>
    ))}
    </div>
  )
}
```

You see that we imported the `useEffect` and `useState` hooks, then when the component mounts, we fetch the data, and pass it to state using `setFacts`.

Now, once the data has been retrieved, you won't get that error any more.

It's a simple fix for an issue that wouldn't have occurred except for the fact that we're in React, and we need to respect the React component lifecycle, and it's way of handling data. We can't fetch data and assume we can just use it.

When in Rome ...
