---
categories:
- development
date: "2018-12-24T11:21:21+01:00"
description: In the recent past, I've heard React being criticised for not being accessible,
  or for allowing practices that don't help developers think about accessibility.
  I have to disagree.
draft: false
tags:
- accessibility
- react
- netmag articles
title: 'Published Article: React Accessibility'
---

**In the recent past, I've heard React being criticised for not being accessible, or for allowing practices that don't help developers think about accessibility.**

I have to disagree.

Just like any other frontend code, working with React in an accessible way requires some forethought.

One of the common mistakes I've seen is that we sometimes put click events on non-semantic elements. It's true, React makes it very easy to put a click event on any dom element.

I think one of the reasons for this is that with React, our JavaScript is our single source of truth, so we tend to think in JavaScript. One DOM element is like any other DOM element, and they all can be manipulated in much the same way.

However, if we're thinking about accessibility, we're committing ourselves _before we start coding_, that we're going to do things the right way, including using semantic elements. If we do this, we'll ensure we assign a click event to a semantic element to start with - a `<button>` or an `<a>` tag - or we'll do all the extra legwork that's required to make up for it.

## Encourage Accessibility in Components

Another way to encourage others using your components to think in an accessible way is to compose components to include accessibility features. For example, this component passes down a prop that's an image source.

```js
<img src={this.prop.imgurl} />
```

What are we missing here? The `alt` attribute. How do we encourage accessibility in this instance? Wrap the component in a conditional, so that it doesn't render without the alt tag:

```js
{
  this.props.imgalt ? (
    <img src={this.prop.imgurl} alt={this.props.imgalt} />
  ) : null
}
```

You could go a bit further with this, and check that the `length` of `imgalt` is greater than 0.

## It Starts & Ends With Accessibility

Just as our thinking process starts with the commitment to code with accessibility in mind, our launched product should finish with accessibility. So test your assumptions:- did you really build an accessible site or app?

Use software to test what you can. But better than that: connect with people you know. Take your product to your friends and relatives or your audience. How do they get on using it?

React has plenty of built-in support for building things in an accessible way. Check out the documentation at https://reactjs.org/docs/accessibility.html.

The question is, will you make that commitment to yourself, and the people who will use your site?

This article was first published in Net Magazine.
