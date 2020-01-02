---
categories:
- hugo
date: "2018-02-10T15:21:21+01:00"
description: Recently someone reached out to ask if they could use my theme that I
  use on deliciousreverie.co.uk on their site. So I've decided to release this theme
  to the public, albeit with a few changes.
draft: false
tags:
- theme authoring
- go
title: Hugo theme - Delicious Reverie
---

**Recently someone reached out to ask if they could use my theme that I use on deliciousreverie.co.uk on their site. So I've decided to release this theme to the public, albeit with a few changes.**

When you're a committed family man, coding outside work is something that of necessity, has to be done in a hurry. Yet it's often the work I most look forward to.

I coded this theme in an awful hurry, but it's served my site well over the past year or more that I've been using it. I started off by examining how the Bootstrap 3 theme output and re-used some of its layout partials when building this theme, in order to save myself some time.

The focus of this theme is it's brevity when it comes to CSS and JavaScript. I wanted to make something that was super fast, especially since this was a static site to be hosted on Netlify, and I wanted to see how quickly I could get it to load. I read Scott Jehl's excellent book "Responsible Responsive Design", and wanted to implement some of the ideas to reduce time to first byte, first paint time and time to interactivity.

My initial aim was to have only one request: the HTML file, and to inline the CSS and JavaScript. But other things were needed in order not to compromise too much on appearance, so I added a background image, and a WOFF2 font file.

Oh yes, and a Favicon.

As a result, It's very minimal indeed, with less than 300 lines of CSS when compiled. The only JavaScript is for the page transitions. It's gone through a few iterations and modular additions over the past 3 years, and I was pleased to hear that someone else liked it and wanted to use it!

## Using deliciousreverie theme

[Here's the code repo](https://github.com/endymion1818/gohugo-theme-deliciousreverie). I used Grunt taskrunner, which is what I used for ages before picking up Gulp and Webpack. I still enjoy using it.

So you can just run `npm install` and then `grunt` and you'll have regenerated the CSS and JS. Although if you just want to use the theme, you don't even need to do that.

## What's Been Left Out

Two things haven't made it into this theme that are present on my website:

1. Skybird typeface. [Philip Trautmann](http://phitradesign-fonts.com) kindly let me use this unique typeface that I feel reflects my personality very well. Before that I used Vollkorn from Google Fonts, so I replaced that font to avoid licencing issues. Although I really recommend you check out Philip's work.

2. Homepage animation. The homepage animation uses a ton of JavaScript, including the free version of GreenSock animation library and ScrollMagic. The vector art is also ... umm ... not a small payload ... and I worried that some wouldn't know how to remove this code, causing them performance issues.

## Hope you like it :-D

That's all I have to say really, except feel free to clone, download, modify, and use this code. I hope you enjoy doing so!
