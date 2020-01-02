---
categories:
- development
date: "2015-02-11T15:21:21+01:00"
description: A little while ago, I had a telephone interview in which the lead developer
  customarily dismissed my application because I didn't know how to write SASS or
  LESS. He was very born again about the whole thing, and I resolved to learn at least
  one of these frameworks in response.
draft: false
tags:
- css
- sass
- professional development
title: 'Not Using SASS: Rebellion in the ranks'
---

**A little while ago, I had a telephone interview in which the lead developer customarily dismissed my application because I didn't know how to write SASS or LESS. He was very "born again" about the whole thing, and I resolved to learn at least one of these frameworks in response.**

Whilst I'm very glad I did learn SASS, I have to say there are a number of drawbacks I've noticed ...

### Drawback 1: Increase Code Stack

SASS is written in Ruby. Whilst I would love to get into coding in Ruby, it's not something I wanted to learn as a priority—I'm having enough trouble picking up enough other skills more pertinent to frontend development.

I do use Grunt in my workflow, because I'm a performance freak and hate to see unminified scripts and multiple HTTP calls when there could be one. So that's already added Node.js to my workflow.

But the problem I ran into when developing in SASS was that I had to leave the code base alone for a few months ... and when I came back to it, it wasn't doing what I expected. I had to seriously dig around to find out that I needed to update to the latest version of Ruby (which of the several package manager solutions had I used again??!) and Node.js before it would run again.

I was working on this site, as it happens, so it wasn't all that important. But I have heard too much experience of developers who spend a greater portion of their time fixing their environments instead of contributing to the project at hand, to not take this seriously.

### Drawback 2: It Does't Run On Your Server

Okay, so developing your project whilst its on the staging server might not be the best route to take ... but who hasn't had that last-minute code change that the client wants to see just before their conference call—or you just want to try something live to see if your hunch is correct.

But of course you can't do that with SASS unless you happen to have Node.js running on your server. With this project, I didn't, and so was ham strung once again.

Actually, that's my currently roadblock with this site as I write this: I have in mind some CSS changes, but my dev environment is on my Mac at work ... and with a small child the only time I get to mess with my Macbook is when he's asleep (like right now).

### Don't Knock A Good Thing

These drawbacks notwithstanding, I do love SASS. It's so handy having variables, and being able to split down your stylesheets into easily-manageable parts has saved me lines of code and not a few headaches.

It's fantastic to see If Only the CSS specification was a little more ahead of the curve, instead of way behind where it currently is. I can't wait to see the wonderful tools we use in SASS freed from their current shackles.
