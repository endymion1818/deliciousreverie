+++
date = "2017-05-18T15:21:21+01:00"
draft = false
title = "Continuous Deployment with Netlify and Hugo"
categories = [
  "development"
]
tags = [ 
    "hugo", 
    "netlify",
    "this website"
]

+++

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

## Custom Headers

After this, my site loaded in around 2 seconds. I'd shaved a whole second off by using AWS, Cloudflare and a static site generator. Whoo hoo!

I celebrated by adding a large background image that added another second to the load time.

To reduce the weight, I cropped the file as much as I dared, then compressed the file using [kraken.io](https://kraken.io). I also added _another_ config file to the root directory to specify some custom headers for the project. In a file called `_headers` I added the following:

```
Link: </img/fancybg-light.jpg>; rel=preload; as=image, </fonts/Biko_Regular.woff2>; rel=preload; as=font, </fonts/Skybird_Regular.woff2>; rel=preload; as=font
```
This allowed the browser to prioritise my `woff2` fonts and the background image, so that they'd begin to load before they were found in the CSS file. This shaved off a further few milliseconds. 

One caveat: that means I now have 3 seperate files to configure Netlify. Why?! Can't we have a `netlify.toml` that contains all settings, requirements and headers?

## Aims

My site now loads in 2.285 seconds. This still seems to be quite large time for 185kb of content. I'm going to continue to refine this so that hopefully I can find out how to cache static content, or find other improvements that'll hopefully bring this down as much as I can.

I also aim to add commenting via [Staticman](https://staticman.net), contact forms using [Formspree](https://formspree.io), and [Forestry](https://forestry.io) as a CMS so that I can author posts online.

Ahh, static sites aren't so static after all, are they?

## Verdict

As the web becomes more bloated, I really believe static site generators are going to be the way to get ahead. Once you add the previously mentioned services, they can adequately compete with some of the lumbering, huge CMSes out there (of which [Perch](https://grabaperch.com) isn't one, I hasten to add).

Continuous delivery is a bit cumbersome. I'm on the free Netlify plan, which means I get a lot less in terms of build previews. However, it's certainly a lot more safe than the shaky transfers of FTP/SFTP, and because it's built on the server for you, if it fails you won't break your site, which I know I've done a few times.


