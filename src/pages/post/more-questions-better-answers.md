---
categories:
- development
date: "2018-06-08T15:21:21+01:00"
description: Proposing a solution that isn't a good fit for a project can be dangerious.
  It can be implemented without real thought, which can cause major frustration or
  even abandonment of a project. Instead I'm trying to think more about the question,
  instead of jumping to conclusions.
draft: false
tags:
- approaches
- core skills
title: More Questions, Better Answers
---
**Working with a large FinTech organisation has taught me a lot about the potential loopholes and considerations around certain technical decisions that I have been asked to contribute to.**

One of the decisions that we have considered recently is how to deliver content into the new website we are building.

Historically, this organisation have used CMSes only on the perhipery of the project; that is, the marketing team has a blog tht uses a popular CMS platform, other content is delivered via APIs. But the main site is plain HTML, with content embedded directly into HTML pages managed by a Ruby application.

Initially, I pushed for a CMS, thinking it would be a great idea. However, I didn't stop to think about the question more deeply. An experienced technical lead said that a CMS "didn't solve problems we already have" and that it would introduce unneeded complexity into the project.

I found this comment very interesting. Particularly because the world I've previously been surrounded with has been dominated by the need for a CMS to manage content.

With my current organisation, a very tech savvy company where about one quarter of the workforce are developers, was there a real need for a CMS?

Given this comment, I was prompted to think: what problem _was_ I trying to solve with my recommendation?

## Undo the Answer

The charachter 无 (pronounced wú in Chinese or mu in Japanese) means more than just the negative, so writes author Dan Simmons. It's apparently more like a desire to "undo" what's already been said, or the absence of the object it refers to.

I've been trying to "undo the answer" in reorganising my mind to think more carefully and understand the questions I come up with.

In reality, it's quite easy to propose an answer that might fit. The answer you propose _could_ be the correct one, particularly if you've encountered a similar question in the past.

But often this approach is flawed, and cracks in the process turn quickly to great gulfs which cause frustration and abandonment further along in the project.

So what was I trying to solve? I ultimately decided it was two: separation of concerns, and with that the absence of a single source of truth.

### Separation of Concerns

By embedding our content in the markup, we were directly mixing content and page structure. This had already become complicated when we were tasked with extracting text from the website so that it could be re-written to match our new tone of voice.

The agency wanted to be supplied with CSVs containing each page content. I got two thirds of the way into building a content scraper before realising that the markup was so unique, and the CSV so prescriptive, that that solution just wasn't going to be practical.

Once again, solutions-based thinking hits a brick wall.

### Single Source of Truth

React excels at maintaining a single source of truth for your code. The uptake of React as a framework has increased because it extols this approach.

Whereas before you had HTML markup that could be altered by both your server-side code and client-side JavaScript, as well as CSS that could be altered by your JavaScript.

What React does is bring those 3 elements into JavaScript itself. Now you have a clearer picture of what's going on because you are only working with one source of truth.

However, content should stay firmly out of this equation wherever possible. The reason for that is how it's being manipulated.

Content authors still have the need to work with the content, even after the deadline for "final copy" has passed. However, it's likely most of them won't know HTML, let alone JavaScript, and won't want to learn. It's not their job after all.

To match the design and UX requirements of a project we need to split forms into different screens, present content in different `<div>`s, and use interactive elements such as tabs, accordions and content sliders.

We might want to serve different re-useable templates for different pages too.

My solution of employing a CMS to do enable this was hitting on the idea, however inexpertly. So I framed it differently.

Now, because I outlined the problems we're having accuratey, and a solution which doesn't add complexity (in fact it could reduce it), we're pursuing this route.

## Unask the Answer, Not The Question

> "Never fear running out of answers, only running out of questions"
> — J Straczynski

I've decided that asking questions isn't to be feared or looked down upon, however silly the question may seem at the time. It's proposing the wrong solution ignorantly that leads to trouble.

I'm going to make more effort to think about questions more carefully. It's intent, background, even the thought process that prompted it.

In that way, when it does come to solutions, I can make a more informed decision or recommendation about what could be a much more appropriate solution.