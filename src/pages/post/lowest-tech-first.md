---
title: Lowest tech first
date: "2021-06-23T10:21:21+01:00"
description: "Should I use CSS or JavaScript to perform this task? If you're asking yourself this question, I have an answer for you: use the lowest technology available to you which can complete the task."
draft: false
tags:
  - javascript
categories:
  - development
---

**Should I use CSS or JavaScript to perform this task? If you're asking yourself this question, I have an answer for you: use the lowest technology available to you which can complete the task.**

I did a lot of prop threading the other day. I was updating our navigation section so that the last dropdown in the navigation would be positioned better.

```javascript
<NavList isLastItem={index.length - 1 ? true : false} />
```

My colleague pointed out that I was threading this through 3 successive components so I could apply some CSS to the menu, which is OK sometimes, but there could be a better way of doing it.

```css
&:last-of-type {
  left: 0;
}
```

Why is this better?

Because it's using the lowest tech first principle. I'm setting the property in CSS which means there's less overhead for the browser to maintain, less prop threading going on, and it's arguably easier to see what's going on in the styles of this component.

I think we should strive to do things this way more. It's less overhead and easier to maintain.
