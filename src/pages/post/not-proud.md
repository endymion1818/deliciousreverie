---
categories:
- development
date: "2019-01-30T14:21:21+01:00"
description: I'm not proud of the code I wrote today. In fact, I hated it. But that's
  okay, it did what it needed to. And I'm going to redo it tomorrow.
draft: false
tags:
- professional development
- tools and processes
title: I'm Not Proud
---

Today was a stressful day. I was working to a set deadline on which a lot of other tasks depended. I felt that if I failed to achieve my work, there would be a cascade effect that could lead to delaying the release of a product I have been working on.

I didn't want that to happen. But I'm not proud of what I did to avoid it.

I was working with our best designer, who had begun to refactor a module but needed some help with some finer structure and more complicated CSS that would display the images in the way that the Creative Director had approved.

In order to hit my deadline I hacked the module I was working on. I added props that were not semantically correct. I added images directly into the module itself instead of passing them down from the page. I wrote no tests and defined no types.

After another round of tweaks and some refinements, it was ready for code review. I rushed it past, asking someone I knew would be too busy to tell me what I should've done instead. I'm sure he raised an eyebrow or two when he approved it.

Miraculously, it passed QA and was released that same day.

I still hate myself whenever I think of that code.

## Unexpected Consequences

We started a new sprint today, and one of the backlog items is a refactor of that module. This time I'm going to do it correctly, passing down the image from the page, removing the duplicate CSS and finding a way for our designer to pass specific CSS so they can position the image as they want.

What I didn't expect was to hear that our user engagement has increased significantly. Conversions are up by about 11%, and the project is much closer to launch than it would have been without those hacky changes I made.

So no, I'm not at all proud of the code I wrote today.

But it helped the whole project move forward. It might even release very soon. And now I'm going to re-do it properly.

You don't have to be proud of the code you wrote today. But you can do what's needed, and make a promise to do it properly when time allows.
