---
categories:
- design
date: "2015-11-23T15:21:21+01:00"
description: Although I've really gotten into the SASS revolution, I haven't yet adopted
  a method for structuring elements of CSS. I guess it's because none of them strike
  me as particularly visual, and being a former print designer, I tend to think in
  those terms. But something about Brad Frost's Atomic Design principles makes sense
  to me. Here's why.
draft: false
tags:
- design thinking
- tools and processes
title: Why Atomic Design Makes Sense
---

**Although I've really gotten into the SASS revolution, I haven't yet adopted a method for structuring elements of CSS. I guess it's because none of them strike me as particularly visual, and being a former print designer, I tend to think in those terms. But something about Brad Frost's Atomic Design principles makes sense to me. Here's why.**

When we're designing, we tend to think more about design principles instead of build principles. What I mean is that we think about rhythm, white space, alignment and these types of things. These are very necessary components of great web design as they are of design in other mediums.

But the web is still a unique animal. If we're truly going to design for the web, we need to think about the medium itself, much as a printer considers the stock, the inks, and the situation artwork is going to be displayed in.

![atomic design : a book by Brad Frost](/resources/screen-shot-2015-12-18-at-08.19.57.png)

##### [http://atomicdesign.bradfrost.com](http://atomicdesign.bradfrost.com "Link to Brad's website where he's writing the book")

Atomic design really helps at this level: it helps us design repeatable elements that can be coded and re-used on different parts of our site. I don't intend to re-hash Atomic principles here, but take a look around, [perhaps at this post](http://blog.invisionapp.com/atomic-design-principles/ "Using Atomic Design at InVision"), or [read a pertinent excerpt from the book](http://atomicdesign.bradfrost.com/chapter-2/#atomic-design-is-for-user-interfaces "atomic design is for user interfaces"), to see what I mean.

This is going to really help us when it comes to building things out in code, especially if it's someone else building it.

## Thinking Like Developers

This is important. I don't personally think it's a requirement for designers to be able to code — but I do believe we need to think like developers. If we comprehend the way a developer approaches a project, we'll see that system-based thinking (rather than individual page-based thinking) actually helps us get a product that reflects our design intentions more completely.

And we'll also be able to empathise with our developers, which means greater understanding, greater cooperation and - again - much better result, not just in appearance but in cleaner, more efficient code that has performance benefits.

And website performance is part of our job too, right?

## Atomic Design as a Developer

As a developer, I'm wondering if I use SASS partials to structure my code. Perhaps defining files this way:

for atoms:
- a-type
- a-colors
- a-inputs

for molecules:
- m-card
- m-navbar
- m-lists
- m-formfields

for organisms:
- o-navbar
- o-contactform
- o-banner

and so on..

Hm, ok I'm going to try this. Hope to give you a development update in due course.

In the meantime, I really think atomic design makes sense - for designers, for developers, and to meet the diversifying needs of our users and project stakeholders.
