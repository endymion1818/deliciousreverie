---
categories:
- development
date: "2015-06-26T15:21:21+01:00"
description: I've been using the esteemed Rachel Baker's BootstrapWP theme for a while,
  but recently I decided to build my own Wordpress / Bootstrap starter theme. Here's
  why I took this step and what I plan to do with it in the future.
draft: false
tags:
- php
- wordpress
title: I Built A Wordpress Bootstrap starter theme
---

**I've been using the esteemed [Rachel Baker's BootstrapWP](https://github.com/rachelbaker/bootstrapwp-Twitter-Bootstrap-for-WordPress/tree/bootstrap3 "Rachel Baker's BootstrapWP on GitHub") theme for a while, but recently I decided to build my own Wordpress / Bootstrap starter theme. Here's why I took this step and what I plan to do with it in the future.**

There's still an argument raging about whether or not web developers should use Bootstrap or Foundation as a UI starting point for their projects. I don't want to undermine the very valid and extremely important role of UX / UI design. We do want to avoid every site looking the same (current trends notwithstanding).

### Once More Unto The Breach, Dear Friends ...

At the same time, I really think that Bootstrap, Foundation and the rest have raised the bar for good UI design significantly.

For example, where I work we do a lot of work for smaller clients who don't have the budget for a developer to work on a site for over a month, doing everything from scratch. To better serve this range of client, and to avoid going the route of using someone elses potentially un-semantic, bloated and non-extensible paid-for theme, we decided to construct a Wordpress Bootstrap starter theme.

This way, we can have more control over our code, we can keep more projects in-house, and still raise the standard of production for these smaller clients.

### Crafting a Theme with Wordpress and Bootstrap

It's not the purpose of this post to list everything the theme contains. In fact, it's far from complete and as I use it on live projects in the coming months, I'll no doubt add functionality I find useful / desireable. But I have started off by adding the following:

- Menu item CSS styles (replaced Bootstrap's .active with Wordpress' .current-menu-item etc)
- Breadcrumb support
- Better pagination (the page will display a UL list of pages, instead of just "older" and "newer" links)
- Uncompressed and deregistered Jetpack's CSS file by default (because there's just no need for bloat).

You might see that I'm on a personal mission to end needless bloat as much as I reasonably can.

### Other Nice Things

I've also added a sample `wp-config.php` file that allows you to add your local, development environment and live database information all in one, so you don't have to worry about overwriting the file when you commit a change or upload a batch of files.

There's a sample `htaccess` file too, adding support for `svg` files. I frequently encountered that this was turned off by default on the servers I've been working on. Because SVGs are so useful especially for logos, I've enabled this on Apache / NGIX servers using this code snippet.

The `htaccess` file also adds support for `mod_deflate` too, so gZipping can be enabled easily. This is something I found I was forgetting to do once a project was going live, so this helped me to streamline my processes.

### What's not there

Template files are virtually non-existant in this theme, outside of the Wordpress standard pages `index`, `page`, `post`, `front-page`. I have included a template for a `sitemap` page.

More templates will follow when I have the time, possibly [using the existing starter templates](http://getbootstrap.com/getting-started/#examples "example pages constructed with Bootstrap") or when I've worked on a project that contains some particularly useful, challenging or interesting templates.

### Updates

This project will be updated and maintained regularly. I'm particularly interested by [the roadmap to Bootstrap 4](http://blog.getbootstrap.com/2014/10/29/bootstrap-3-3-0-released/ "Bootstrap blog post containing info about Bootstrap 4"), and can't wait to incorporate it here (although I personally might wait until 4.1 before I use it in production).

### There you have it.

There you go, [feel free to download this starter theme](https://github.com/endymion1818/blazebase/ "Link to Blaze Base starter Wordpress theme"). If you notice any bugs, please report them via [Github Issues](https://github.com/endymion1818/blazebase "GitHub repository for this theme"), or just get in touch via [Twitter](https://twitter.com/muzzlehatch_ "Benjamin Read on Twitter").

Have fun!
