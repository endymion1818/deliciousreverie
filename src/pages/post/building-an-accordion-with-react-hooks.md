---
categories:
- development
date: "2019-06-25T14:21:21+01:00"
description: I wrote this post for Net Magazine issue 320. I wanted to showcase how
  I have begun using React Hooks, and hilight some best practices to follow for better
  accessibility.
draft: false
tags:
- netmag articles
- published articles
- javascript
title: 'Published Article: Building an Accordion Component with React Hooks'
---
 
In this article, we takes a deep dive into creating an accordion module for React that renders on the server, and that works in Internet Explorer 11.
 
On a recent project I was involved in creating this Accordion component with a few key requirements:
 
- It should provide collapsible section functionality for our users, a significant portion of whom are still on Internet Explorer 11
- It should be as accessible as possible, especially for assistive technology users
- It should show content even if the user hasn't been able to download JavaScript, or has it turned off
- It can be used multiple times on a page
 
Let's get started!
 
## Basic Setup
 
Here's the basic layout for the module:
 
```js
import React from "react"
const Accordion = (props) => {
  return (
    <li>
      <h3>
        <button>
          {question}
        </button>
      </h3>
      <div>
      {answer}
      </div>
    </li>
  )
}
export default Accordion

```
This will render a basic section and can accept our content labelled `question` and `answer`. Outside the accordion, I will define an unordered list, `<ul>`, to wrap around the items.
 
The elements used here are one of the suggestions made by Sara Souiedan in her blog post "How do you mark up an accordion?". It's well worth a read because it dives deep into the semantic meaning of these elements.
 
You can find her excellent article here: https://www.sarasoueidan.com/blog/accordion-markup/
 
## IE Support Not Needed? Use `<details>`
 
On Sara's blog post above, using the `<details>` and `<summary>` elements here for more semantic markup is discussed. This is a HTML-native accordion element!
 
If you don't need to support Internet Explorer 11, use these and skip most of this tutorial: you'll see that the accordion collapses and opens _without any css or javascript_.
 
## Functionality
 
Next, I'm going to import our first hook. Hooks allow us to write React lifecyle methods without `class`es. This means our code can be more functional, or at least not a mix of OO and functional programming.
 
 First, I need to import the `useState` hook along with React from the React library:
 
```js
import React, { useState } from "react"
```
 
 Next, I set my state items. There are 2 because `setContentVisible` will be a function to update `isContentVisible`.
 
```js
  let [isContentVisible, setContentVisible] = useState(true)
```

I'm setting a default of `true` here because I'm using server-side-rendering, so that users without JavaScript (and search engines) can see this content. Now I can use this state directly on my button:

```js
<button onClick={() => setContentVisible(isContentVisible = !isContentVisible)}>
{question}
</button>
```
Doesn't this look a lot more straightforward than writing a function before the `render` method?
 
## Screen Reader Assistance
 
Next, I'm going to add some aria roles to the accordion to indicate to users when the component's content area is visible or not:
 
```js
<li>
      <h3>
        <button
            onClick={() => setContentVisible(isContentVisible = !isContentVisible)}
            aria-controls="accordion-1"
            aria-expanded={isContentVisible}
        >
          {question}
        </button>
      </h3>
      <div>
      <ContentContainer
          aria-hidden={!isContentVisible}
          id="accordion-1"
        />
      {answer}
      </div>
    </li>
    )
```
 
This gives the screen reader ability to hear which section is open or closed, and the ability to open or close the accordion.
 
But that `id` isn't going to cut it for more than one use on a page.
 
To do that, we need to set a unique id of the accordion item so we can show the relationship between the control and content elements.
```js
  const elementId = (((1 + Math.random()) * 0x10000) | 0)
    .toString(16)
    .substring(1)
```
 
Once I've replaced `id="accordion-1"` with `id={elementId}` I should have a fairly unique ID that links up the content and the button.

<div class="boxout">

## The Slings & Arrows of Outrageous Smooth Scrolling

One of the requirements you might have with an accordion of this kind is that when the accordion opens / closes, the user is scrolled to the content area or the title.
 
You can define a separate `toggleElement` function to get the ID of the current element, and scroll to the content area.
 
```js
  const domElementTop = elementId.offsetTop - 150
  const toggleVisibility = () => { 
    window.setTimeout(function() {
      window.scrollTo({ top: domElementTop, behavior: "smooth" })
    }, 0)
  }
```
 
There's an IE11 caveat with this though. IE calculates `scrollTo` differently, with a px value instead of a string or ID. You can use `scrollTop` instead, but this doesn't allow you to have smooth scrolling behaviour which is a nicer effect for users. If you want to support IE11 with smooth scrolling, you can use `smoothscroll-polyfill` and call that before `window.scrollTo`.
 
There's a bug in iOS Safari too! If you want to support Safari on iOS (particularly some iPad versions) it's advisable to set a timeout when you start scrolling:
 
```js
    window.setTimeout(() => {
      // call the polyfill (to support IE11)
      smoothscroll.polyfill()
      window.scrollTo({ top: domElementTop, behavior: 'smooth' })
    }, 0)
```
 
</div>

## Showing & Hiding Content
 
The last item we need to take care of is showing / hiding the content area. Now, we could do it this way:
 
```js
{isContentVisible && (
    <div
       aria-hidden={!isContentVisible}
       id={`content-${AccordionIdentifier}`}
    >
      {answer}
    </div>
)}
 
```
 
Note the use of the double-ampersand. If the `isContentVisible` is true, the following block (inside brackets) will show.
 
You can also do the show/hide with a class attributes, using the `display` property to show & hide them using CSS.
 
Lastly, I want to make sure that when my user has got the JavaScript bundle and the page has been **rehydrated** (see box, "What is Rehydration"), the content is collapsed, ready for them to interact with. I can do that with the `useEffect` hook, but I need to make sure I call `useEffect` only once, similar to how `componentDidMount` was used.

First, import that from React the same way as the `useState` hook:

```js
import React, { useState, useEffect } from "react"
```
 Then reverse the value of `setContentVisible`:
```js
  useEffect(() => {
    setContentVisible(isContentVisible = !isContentVisible)
  }, [])
```

Did you see the extra square brackets (`[]`) at the end? By passing an empty array to the `useEffect` hook we can call it only once. If we didn't do that, the `state` would be updated every time the component updated in some way.
 
## Conclusion
 
I think using React Hooks is a simpler and tidier workflow that helps our code to be quicker to understand and more flexible. There are some significant changes to the way we use React, but understanding the differences in my opinion is only going to improve the way you write your code.

You can find this example on Code Sandbox: https://codesandbox.io/s/wqnmql8l78
 
<div class="boxout">

## BOXOUT: What is Rehydration?
 
Think of a carton of orange juice. You'll often see on the side of the packet "from concentrate" or "rehydrated".
 
This means they've extracted the water from the juice to condense it. In this way it can be transported more easily, in greater quantities. The water is added back in at the destination.
 
Rehydration in JavaScript can be compared with this method. With some frameworks, notably GatsbyJS, our page is built in HTML and rendered in the browser. Then, once the JavaScript is loaded, it replaces the HTML with it's JavaScript version of the page.
 
The advantage is a fully interactive application that is better for SEO and for users.
 
There are still some key puzzles to solve with rehydration. I'm looking forward to seeing a time when only parts of a page that need interactivity are rehydrated, instead of having to replace the entire page. But it's a great way of making faster and more resilient interactive experiences.

</div>
<br/><br/>
<div class="boxout">

## BOXOUT: MVT, Object-Oriented or Functional Programming?
Managing the code of large applications where several people are contributing over the course of longer periods of time tends to be difficult. In fact any sufficiently complicated system tends to break down over time. 

To combat this tendency in code, people have tried several different approaches. The ones I'm familiar with are MVC, OO (object-oriented) and Functional.

As far as I know, Angular 1 introduced the MVC principle to the frontend. It tried to keep separate the views (or templates), models (interpretations of data) and controllers (the functional parts) separate.

This proved in many cases to be a burden on the overall code that was sent down to the client. A few later frameworks experimented with Object Oriented programming, which works great for languages like Ruby and PHP, and can be successfully implemented with JavaScript too.

However, JavaScript doesn't really work in an object-oriented way under the hood. The `class` keyword was a wrapper around some of the prototypes of the language.

In an effort to work _with_ the language instead of imposing an artificial structure on top of it, functional programming has been growing in popularity in recent years.

</div>