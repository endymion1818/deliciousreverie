---
title: The JavaScript CMS Landscape
date: "2020-11-23T15:21:21+01:00"
description: "I've been keenly interested in a specific subset of CMSes since about 2 years ago, when it became clear that Zopa would soon need to invest in one, and that I would be involved in choosing something that would be a good fit for the company. This post is a roundup of some of the great products available, and is the result of some of the research and proofs-of-concept I have made."
draft: false
tags:
  - javascript
  - cms
  - content management
categories:
  - development
---

**I've been keenly interested in a specific subset of CMSes since about 2 years ago, when it became clear that Zopa would soon need to invest in one, and that I would be involved in choosing something that would be a good fit for the company. This post is a roundup of some of the great products available, and is the result of some of the research and proofs-of-concept I have made.**

The requirements I had for my search were:

- Has to be self-hosted, open source, so we can secure our perimeter
- Needs to be maintainable by an internal team of JavaScript developers
- Needs to be headless (in order to render the frontend in an existing JavaScript application)

I had a separate search for a hosted platform-as-a-service which I executed in parallel, but my personal interest is more towards the open source community, hence the focus of this blog post.

## 1. Ghost

Ghost seems like the grandaddy of JavaScript CMSes. Their version 3, which was launched about a year ago, was fully API-enabled, allowing it to be used as a headless CMS.

Ghost was built out of dissatisfaction with the WordPress technology stagnation if I remember correctly, but it's grown far past that to become a slick, comfortable and beautiful interface for building simple blogs.

**Pros:** Wonderful editing experience  
**Cons:** Not very extendable in terms of custom fields and content types  
**Link:** https://ghost.org

## 2. Strapi

I've watched Strapi go from an early Alpha state to a mature product with an international team, and that's been very rewarding to see. The UI is really great with a lot of integrations, and they're constantly working on new plugins and features that enrich your experience.

I was particularly pleased that they continue to improve on their Gatsby integrations, but there's one thing that I hope they're able to resolve in the short term: transforming data in their Gatsby examples is done on the frontend, when it can be done in the Node process.

**Pros:** Very adaptable and customizable  
**Cons:** You only get 3 roles on the free tier (unless your OSS or a student), their GatsbyJS examples don't demonstrate how to transform data on the server  
**Link:** https://strapi.io

## 3: Webiny

Webiny is a lot more than a CMS, in fact, the CMS aspect is just one of the plugins for this incredible serverless framework. And honestly, Webiny does showcase some of the fancy things that become possible with serverless, and also levels out a lot of that road for newer developers.

If you're interested in serverless architecture, definitely give Webiny a look.

**Pros:** Serverless, so expect a lot of free hosting. A great way to learn the serverless architecture paradigm  
**Cons:** Recommends use of gatsby-source-graphql plugin, which doesn't have access to nodes at build time. As a result, data transforming must be done on the frontend :-(  
**Link:** https://webiny.com

## 4: Keystone

I haven't spent any time with Keystone, but Wes Bos hails it's solid role-based access and easy deployment features. I'll update this post when I've had a chance to play with it.

**Pros:** Role based access, easy deployment  
**Cons:** // TODO: try this app and update this blog post  
**Link:** https://www.keystonejs.com

## 5. Apostrophe

Apostrophe only just fits onto this list because it's a full-stack CMS with a Headless plugin ... which is just fine, but it's an interesting choice. The presence of plugins like this one gives me confidence this is a mature app that has a solid future. Again, I haven't tried it out, but I will report back when I have.

The marketing talks about "in-context editing", but I'm not sure this refers to headless mode or not (edit: it's not) ... if it is, this could be a killer feature.

**Pros:** // TODO: try this app and update this blog post  
**Cons:** // TODO: try this app and update this blog post  
**Link:** https://apostrophecms.com

## 6. Payload

I heard about this newcomer on the scene only a few days ago, but the value proposition made sense to me. The UI is very minimal, on the basis that you'll want to customize it significantly. Their strongest feature is that there are hooks for every action, so you can extend the functionality very easily, and the initial codebase you see is _extremely_ minimal.

**Pros:** // TODO: try this app and update this blog post  
**Cons:** // TODO: try this app and update this blog post  
**Link:** https://payloadcms.com

## Conclusion

JavaScript, particularly on the server, is still a new language, but it's incredible that we have so much variety in tooling available to us already.

I've been keenly interested in how the CMS market has developed: I was initially afraid that hosted platforms would gobble up all of the market share and there would be no room left for open-source options. I'm glad to say this hasn't happened, and we have the freedom to choose between hosted platforms and these more maintenance-heavy but intrinsically open apps.
