---
categories:
- development
date: "2017-05-18T15:21:21+01:00"
description: Over the past few days, I've moved tech stack entirely for deliciousreverie.co.uk,
  from reseller hosting using PHP to cloud hosting on AWS by Netlify, and using continuous
  deployment. This post details some of the hazards and benefits I encountered.
draft: false
tags:
- hugo
- netlify
- this website
title: Continuous Deployment with Netlify and Hugo
---

**Over the past few days, I've moved tech stack entirely for deliciousreverie.co.uk, from reseller hosting using PHP to cloud hosting on AWS by Netlify, and using continuous deployment. This post details some of the hazards and benefits I encountered.** 

Since I created this blog, I've always been a very proud user of Perch CMS and have recently upgraded to Perch 3, which brought loads of enhancements as well as an improved interface. So why the switch?

The truth of it is that I've been paying for reseller hosting with my previous provider, UK Web Solutions Direct, for 7 years. They've always been quick to respond to my support questions, and I'd highly recommend them.

However, since I gave up my freelance work, it came to the point where I only had this website hosted on it, which seemed a bit of a waste. I also wanted to try out Netlify's continuous deployment service as an alternative to FTP.

## Building a Hugo Site

I felt that Hugo was fairly easy to get a grasp of. Once you get around how strange Go templates look initially, I grabbed the theme called `base` from the Hugo theme repo and began rolling my own.

I've since found that Base theme isn't maintained and doesn't contain some of the new shiny that's present in Hugo 0.20. Just a caution if you were thinking of doing the same. Sadly, there isn't yet another theme that can replace it to give you a quick leg-up without any CSS already present in the theme.

The hardest thing I found when using Hugo was ... how to build my site. Hah, yes it's hilarous, but having used commands like `hugo server` and `hugo new site` and `hugo new theme` it totally passed me by that to actually build my static site, all I needed to do was run `hugo`.

There you are. Laugh all you want. I'm maybe being a little bit dense, but I think it's counterintuitive. Why not `hugo build` or something?

So, I had my theme and set up a Netlify repo. Next was deployment.

## Deploying to Netlify

Netlify's interface makes deployment pretty painless. Once I authorised GitHub on my account, it slurped the code, installed dependencies, ran the `hugo` build process ... and failed miserably.

It failed because currently, by default, Netlify seems to default to an older version of Hugo (v0.16 or something) which meant I was getting build failures.

I eventually found out that you need to add a `netlify.toml` file in the root directory to specify the Hugo version you need:

```
[context.production.environment]
  HUGO_VERSION = "0.20"
```

That seemed to work! I switched my DNS over to Cloudflare and the site went live!


## Using Pygments on Netlify

One thing I noticed post-launch was a that a Python dependency I had started to use wasn't working on Netlify. My code blocks would render as plain text, making them unfathomable and messy.

I came across [this post - entitled Hugo on Netlify](https://discuss.gohugo.io/t/hugo-on-netlify/1505/10) - which helped me to see I could add that dependency to Netlify's build process by adding another config file, `requirements.txt` to the root, and adding `Pygments==2.1.1` as the content.

So I ran `hugo` again, added the commit, and waited ... and waited. Quite a long wait this time actually. Pygments does slow Netlify down quite a bit. But the alternative to Pygments is a Javascript library, which would slow down my users. So I don't mind taking a bit of a hit to save them the extra load time.


## HTTPS

I initially had trouble setting up by DNS with Cloudflare and applying Netlify's HTTPs certificate. It turns out, after having talked to Netlify, that they don't have IPv6 yet. Cloudflare adds an AAAA record to your DNS which messes up the HTTPS somehow. 

Once I'd disabled Cloudflare's CDN, I reapplied the certificate and everything worked fine, and I was able to secure my content.


## Aims

My site now loads in 1.526 seconds and serves 182kb of content in 8 requests. I'm going to continue to refine this so that hopefully I can find out how to preload fonts and the background image, inline my CSS and JavaScript, or find other improvements that'll hopefully bring this down as much as I can.

I also aim to add commenting via [Staticman](https://staticman.net), contact forms using [Formspree](https://formspree.io), and [Forestry](https://forestry.io) as a CMS so that I can author posts online.

Ahh, static sites aren't so static after all, are they?

## Verdict

As the web becomes more bloated, I really believe static site generators are going to be the way to get ahead. Once you add the previously mentioned services, they can adequately compete with some of the lumbering, huge CMSes out there (of which [Perch](https://grabaperch.com) isn't one, I hasten to add).

Continuous delivery can a bit cumbersome to manage for some projects in my view. I say this because my build and production environments were different and that caused me a few issues. I'm on the free Netlify plan, which means I get a lot less in terms of build previews. Looking through their documentation, it seems there's a lot more available on their paid tiers.

That being said, it's certainly a lot more safe than the somewhat shakier transfers of FTP/SFTP. One of the benefits became real to me when a friend of mine submitted a pull request, but I was able to see before I merged the code that the change would've broken my site, resulting in down time. That was a really useful feature. Now I know I can change my theme, and even if it succeeds locally, if it fails on production you won't break your site, which I know I've done a few times.


#### Addendum

This article was edited to remove the references to custom headers, which aren't yet available on Netlify yet.
