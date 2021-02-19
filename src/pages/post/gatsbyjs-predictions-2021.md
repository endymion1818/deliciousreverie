---
title: Predictions for GatsbyConf 2021
date: "2021-02-19T01:21:21+01:00"
description: "It's no secret that NextJS is knocked the socks off Gatsby last year in terms of developer adoption. I think the frameworks will keep learning from each other (read: steal features), and it's a good thing for both frameworks. Here's my take on what could be announced at Gatsby's forthcoming conference."
draft: false
categories:
  - development
tags:
  - gatsbyJs
  - Nextjs
  - javascript
---

**It's no secret that NextJS is knocked the socks off Gatsby last year in terms of developer adoption. I think the frameworks will keep learning from each other (read: steal features), and it's a good thing for both frameworks.**

Dustin Schau [asked in this tweet](https://twitter.com/schaudustin/status/1362223485523648512?s=21), "What do _you_ think we're launching at #GatsbyConf on March 2nd?"

Here's my take on what could be announced at Gatsby's forthcoming conference.

## 1. Hosting on Gatsby Cloud

Using Gatsby Cloud as part of a preview environment has been a great innovation, especially the work that has gone into the speed and ease of incremental builds.

Building out this existing functionality into a fully-fledged hosting platform to compete with the likes of Vercel and Netlify makes sense, especially if deploys benefit from that same speed.

## 2. Server functions

One of the reasons many developers love NextJs is that it isn't restricted to being exported as a static site. Vercel, Netlify and AWS Amplify and some other platforms allow you to run serverless functions which complement the application, so that you don't have to render all of your content on build, instead when a page is requested for the first time, it can be generated then.

Allowing this isomorphic approach is definitely on Gatsby's radar, and it would really be good to see it a first class citizen on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/), their hosting platform that will compete with Vercel, Netlify, and all the other offerings that have sprung up in the last year or two.

This will probably mean those platforms will have to do some work to ensure they are compatible with this new way of using Gatsby, so expect a bit of a delay before they are able to use this new version of Gatsby.

## 3. GraphQL Toolkit

One of my biggest issues with Gatsby at the moment is that data from GraphQL APIs isn't able to be transformed. If you have a CMS that supplies rich text or Markdown, you have to write that transformation in the template, so it gets packaged into your bundle and transformed in the JavaScript runtime.

It's a huge problem, but the [GraphQL Toolkit project](https://github.com/gatsbyjs/gatsby-graphql-toolkit) looks really promising. Here's hoping it's ready to be merged in!

## 4. Some new LowCode / NoCode features

Gatsby is aiming for a very different market to NextJS ... it's chief market are newer or less experienced developers who are building marketing sites for smaller organisations. WordPress proved that there's a huge volume of these and plenty of scope to facilitate a world where developers can pick a theme, add content, make some customisations, set up hosting and charge a client a fee for doing so.

To what extent Gatsby wants to enter this market is anybody's guess. I'm hoping they don't get too invested into it; I think it's healthy for Gatsby to still take on the NextJS market (to my mind this is more experienced developers who want a React & Node framework for their applications). However there's good money to be had and its doing a much better job than the current incumbent in this space.

Let's wait and see what happens!
