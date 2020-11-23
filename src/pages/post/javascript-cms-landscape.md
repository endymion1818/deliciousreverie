---
title: The JavaScript CMS Landscape
date: "2020-11-23T15:21:21+01:00"
description: "I've been keenly interested in a specific subset of CMSes since about 2 years ago, when it became clear that Zopa would soon need to invest in one, and that I would be involved in choosing something that would be a good fit for the company. This post is a roundup of some of the great products available, and is the result of some of the research and proofs-of-concept I have made."
draft: false
tags:
  - javascript
  - CMS
  - content management
categories:
  - development
---

**I've been keenly interested in a specific subset of CMSes since about 2 years ago, when it became clear that Zopa would soon need to invest in one, and that I would be involved in choosing something that would be a good fit for the company. This post is a roundup of some of the great products available, and is the result of some of the research and proofs-of-concept I have made.**

## 1. Ghost

Ghost seems like the grandaddy of JavaScript CMSes. Their version 3, which was launched about a year ago, was fully API-enabled, allowing it to be used as a headless CMS.

Ghost was built out of dissatisfaction with the WordPress technology stagnation if I remember correctly, but it's grown far past to become a slick, comfortable and beautiful interface for building simple blogs.

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

Webiny is a lot more than a CMS, in fact, the CMS aspect is just one of the plugins for this incredible serverless framework. And honestly, Webiny does showcase some of the incredible things that become possible with Serverless, and also levels out a lot of that road for newer developers.

If you're interested in serverless architecture, definitely give Webiny a look.

**Pros:** Serverless, so expect a lot of free hosting. A great way to learn the serverless architecture paradigm  
**Cons:** I can't recommend Webiny as a GatsbyJS backend yet sadly, because there's no way to transform data in Gatsby's node processes. They badly need their own gatsby-source plugin, which I'm sure they'll get to once v5 has been released.  
**Link:** https://webiny.com

## 4: Keystone

I haven't spent any time with Keystone, but Wes Bos hails it's solid role-based access and easy deployment features. I'll update this post when I've had a chance to play with it.

**Pros:** Role based access, easy deployment  
**Cons:** // TODO: try this app and update this blog post  
**Link:** https://www.keystonejs.com

## 5. Apostrophe

Apostrophe only just fits onto this list because it's a full-stack CMS with a Headless plugin ... which is just fine, but it's an interesting choice. However the presence of plugins like this one gives me confidence this is a mature app that has a solid future. Again, I haven't tried it out, but I will report back when I have!

The marketing talks about "in-context editing", but I'm not sure this refers to headless mode or not ... if it is, this could be a killer feature.

**Pros:** // TODO: try this app and update this blog post  
**Cons:** // TODO: try this app and update this blog post  
**Link:**
https://apostrophecms.com

## Conclusion

I have tremendous confidence in css-in-js, and believe if you're using React, Styled Components is a great, broadly performant solution that gets most people where they need to be.

However, it has to be noted that there is a runtime overhead that increases with every component you extend.

I am interested to see if there's a way of compiling all components at build time and avoiding that `React.Context` link, since in our case we don't expect the original components to change after that.

And I'm interested to see whether other solutions, like Linaria, can provide a solution we can utilise in the future.
