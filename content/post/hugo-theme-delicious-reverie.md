+++
date = "2018-02-10T15:21:21+01:00"
draft = false
title = "Hugo theme - Delicious Reverie"
description = "Recently someone reached out to ask if they could use my theme that I use on deliciousreverie.co.uk on their site. So I've decided to release this theme to the public, albeit with a few changes."
categories = [
  "hugo"
]
tags = [
    "theme authoring",
    "go"
]
+++

**Recently someone reached out to ask if they could use my theme that I use on deliciousreverie.co.uk on their site. So I've decided to release this theme to the public, albeit with a few changes.**

When you're a committed family man, coding outside work is something that of necessity, has to be done in a hurry. Yet it's often the work I most look forward to.

I coded this theme by taking an existing theme, the Bootstrap one, and gutting out the CSS and JavaScript, and writing my own. This allowed me to skip over learning Hugo templating because I didn't have the time, nor did I wish to take that time away from my family.

It's very minimal indeed, with less than 300 lines of CSS when compiled. The only JavaScript is for the page transitions. It's gone through a few iterations and modular additions over the past 3 years, and I was pleased to hear that someone else liked it and wanted to use it!

## Using deliciousreverie theme

[Here's the code repo](https://github.com/endymion1818/gohugo-theme-deliciousreverie). I used Grunt taskrunner, which is a bit dated now but I still enjoy using it.

So you can just run `npm install` and then `grunt` and you'll have regenerated the CSS and JS. Although if you just want to use the theme, you don't even need to do that.

## What's Been Left Out

Two things haven't made it into this theme that are present on my website:

1. Skybird typeface. [Philip Trautmann](http://phitradesign-fonts.com) kindly let me use this unique typeface that I feel reflects my personality very well. Before that I used Vollkorn from Google Fonts, so I replaced that font to avoid licencing issues. Although I really recommend you check out Philip's work.

2. Homepage animation. The homepage animation uses a ton of JavaScript, including the free version of GreenSock animation library and ScrollMagic. The vector art is also ... umm ... not a small payload ... and I worried that some wouldn't know how to remove this code, causing them performance issues.

## Hope you like it :-D

That's all I have to say really, except feel free to clone, download, modify, and use this code. Just don't ask me to help you modify it, I'll probably prefer to be spending time with the kids.
