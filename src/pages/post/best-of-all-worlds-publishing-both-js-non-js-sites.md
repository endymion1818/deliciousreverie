---
title: "Best of all Worlds: Publishing both JS and non-JS sites"
date: "2017-07-15T14:21:21+01:00"
description: "It's always bothered me that the majority of internet users spend a lot of money downloading and running JavaScript, yet I enjoy building things with JavaScript, and want to provide an enhanced experience using JS ... without sacrificing their money to do so. Here's how I achieved it."
categories:
  - development
tags:
  - performance
  - javascript
draft: false
---

**It's always bothered me that the majority of internet users spend a lot of money downloading and running JavaScript, yet I enjoy building things with JavaScript, and want to provide an enhanced experience using JS ... without sacrificing their money to do so. Here's how I achieved it.**

I'm not going to argue JS vs no JS use here, I don't think it's even an argument. We need to provide the best experience we can for _all_ of our users, and that includes both those on slow connections and those on fast ones.

Now, there's an easy way to do both.

## Why this site?

I used my personal blog as a good candidate for this because I have a few nice things that use JS, and I built it using Gatsby. I already switched to using Preact to improve the performance, but I didn't want to remove the site search and the animation which I enjoyed building, and gives the site a little bit more flair. Yet I also wanted to allow users without much CPU or battery life to use my site as comfortably as possible.

##
