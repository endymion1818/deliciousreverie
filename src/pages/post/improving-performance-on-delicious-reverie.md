---
categories:
- development
date: "2015-10-06T15:21:21+01:00"
description: I can't possibly think I could get away with a post about performance
  when my own site wasn't as spot-on as I could get. So I've been spending a bit of
  time investigating how to reduce my load times. This is what I found out and how
  I implemented it
draft: false
tags:
- performance
title: Improving Performance on Deliciousreverie.co.uk
---

**I can't possibly think I could get away with [a post about performance](http://deliciousreverie.co.uk/post/why-performance-matters "Why Performance Matters on deliciousreverie.co.uk") when my own site wasn't as spot-on as I could get. So I've been spending a bit of time investigating how to reduce my load times. This is what I found out and how I implemented it.**

I built this site in December 2014 when I was on paternity leave. Now that my little bairn is finally sleeping through the night I can look at my code again through significantly less zombified eyes. I found a few things I'd like to improve on, namely:

1. Reduce unused DOM elements
2. Use non-blocking HTTP requests (at least on the home page)
3. Streamline my CSS

Let's break down each of these and see what can be done to improve them.

### Reducing unused DOM elements
When I built this site, I originally envisioned a main (central) content area, with sidebars of supplementary content. But at the time, I was beginning to realise [that normal people don't understand sidebars](http://deliciousreverie.co.uk/blog/post.php?s=2015-03-23-normal-people-dont-understand-sidebars "Normal People Don't Understand Sidebars on deliciousreverie.co.uk").

I have since decided to just focus on delivering good content in a branded experience. That's the core of what I wanted to achieve here.

So the sidebar elements are gone, along with their CSS.

### Use non-blocking HTTP requests

My CSS is pretty important to the experience of the site, but I'm aware that by linking to an external stylesheet in the header was creating an extra round-trip for the browser before the content could be rendered.

Since my CSS is pretty lean on this project (119 lines, 2kb uncompressed or minified), I opted not to use a Taskrunner tool but instead use a PHP include instead:

```php
 <style>
<?php include 'assets/css/deliciousreverie.min.css'; ?>
</style>
```
I have a unique header file for the home page, so on my other pages, the header still renders via 'perch_get_css' as normal.

If my CSS code was much larger, I would find a tool to identify all necessary "above-the-fold" css and abstract that out into a separate CSS file for inclusion.

### 3. Streamline CSS

I have tended to use normalize.css to standardise delivery of my site across different browsers, just because I thought that's what everybody else did.

However, after having a chat to someone I admire, I realised that following the crowd in this instance was costing me in terms of performance.

When you include something like normalise.css, you're adding extra work for the browser to parse, often without rendering much of it. And you're potentially adding an extra CSS overwrite to your styles. For instance, if you want a unique checkbox input style, normalise already includes one extra style. So now we have 3 different renders: 1) The User Agent (browser) styles, 2) Normalize styles, 3) Your styles.

I've made a promise with myself to look at the source code of these libraries before I make any assumptions about what I should include in my builds in the future!

### Conclusion

I've gained some great results from these excercises:

![Web Page Test shows many 'A's](/resources/straight-a.png)

Seeing this result on [Web Page Test](www.webpagetest.org/ "Web Page Test speed testing site") was a big encouragement to me:- I had achieved much of what I wanted to.

I'm especially proud of the fact that I have no images at all on my home page. The render chart is similarly encouraging:

![My site loads in 1.1 seconds!!](/resources/onesecond.png)

![Fonts make up 92% of the size of my site. Wow.](/resources/bytesized.png)

As you can see here, I have made some huge sacrifices for including three Google fonts. On the other hand, I have had a big win with regards to images, it feels nice to splash out a bit on this form of branding.

So, great. For my next challenge I want to see what I can do to streamline Wordpress. Whilst I don't think you can ever get as good results from that CMS as Perch allows you to, I'm sure I can think of some ways of getting better results.

What results have you had from taking a closer look at the performance of your site? I'd love to hear what you come up with - please tweet me on [@muzzlehatch_](https://twitter.com/muzzlehatch_ "Ben Read on Twitter")!
