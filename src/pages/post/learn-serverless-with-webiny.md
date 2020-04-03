---
categories:
- development
date: "2020-04-01T14:21:21+01:00"
description: "Webiny is a new CMS in the market, one that seeks to compete with other well-established headless CMS platforms and existing apps. But I've also come to enjoy using it for another reason..."
draft: false
tags:
- serverless
- CMS
title: 'Learning serverless with Webiny'
---
**Webiny is a new CMS in the market, one that seeks to compete with other well-established headless CMS platforms and existing apps. But I've also come to enjoy using it for another reason: it's helping me learn how to apply principles of Serverless application architecture.**

I've spent a great deal of time over the past 2 years around the CMS space. I am particularly focused in self-hosted, javascript-based CMSes. I had already created sites with both Ghost and Strapi, two very competent systems with content APIs. 

Very recently, I came across Webiny, a hosted platform who recently pivoted to become a self-hosted product, and who has the interesting selling proposition of being a "serverless" CMS.

## Why I think serverless matters

There's a lot of buzz around the word "serverless" in my world recently, and for good reasons. Although some are keen to point out that the term doesn't technically mean you're not using servers, it does have the strong advantage that you only pay for what you use, and if you don't exceed often generous free initial offerings, you don't pay for the product ... at all.

This is how Heroku got so popular. It can afford to give you the space to create an app, knowing that past a certain point it can be destroyed, saving on computing expenses. Your app can then be spun up at some point in the future when called upon at the cost of a minute of two of time.

Companies today spend a huge amount of money running servers constantly, even when there's nobody using their services. Imagine if you didn't have to pay for that downtime?

That's why I think serverless is going to become an increasingly large player in the devops space in the next few years.

## Webiny: truly "serverless"?

Unless your CMS is git-based tool, such as NetlifyCMS, Tina or Forestry, your content needs to be stored on a database somewhere. And therein lies a weakness of any CMS: it depends on writes to one single database, which you could argue doesn't scale hugely well.

Webiny is no exception: it has connectors for different databases, and I've used Mongo's hosted service "Atlas" for mine. However does that mean it doesn't truly fit into the "serverless" paradigm?

I would argue that it does. And this reveals some of the underlying arguments around the semantics of what "serverless" means. To some people, the term only refers to lambda functions, and not to other things like the authentication service, or the file storage system.

However, for me, "serverless" means a disparate collection of interrelated services, tied together by common use. By this definition, the file storage system, the authentication service, the database, and everything else, constitutes a serverless application ... i mean, tool ... I mean, whatever.

## How Webiny helped me learn about serverless

Although you can create serverless applications using the online interfaces given to you by different providers, it's real strength is in allowing you to programmatically create your services as you go.

This is incredibly powerful. Here's my Webiny application code:

```yaml
name: webiny-apps-xxxxxxx

vars:
  region: ${env.AWS_REGION}

site:
  component: "@webiny/serverless-app"
  inputs:
    description: Webiny Site
    region: ${vars.region}
    memory: 128
    timeout: 30
    code: ./site/build
    env:
      SSR_FUNCTION: ${ssr.name}

ssr:
  component: "@webiny/serverless-function"
  inputs:
    description: Site SSR
    region: ${vars.region}
    hook: yarn build:${cli.env}
    root: ./site
    code: ./site/build-ssr
    handler: handler.handler
    memory: 2048
    timeout: 30

admin:
  component: "@webiny/serverless-app"
  inputs:
    region: ${vars.region}
    description: Webiny Admin
    hook: yarn build:${cli.env}
    root: ./admin

api:
  component: "@webiny/serverless-api-gateway"
  inputs:
    name: Apps Gateway
    binaryMediaTypes: ["*/*"]
    description: Serverless React Apps
    endpoints:
      - path: /admin/{key+}
        method: GET
        function: ${admin}
      - path: /admin
        method: GET
        function: ${admin}
      - path: /{key+}
        method: GET
        function: ${site}
      - path: /
        method: GET
        function: ${site}

cdn:
  component: "@webiny/serverless-aws-cloudfront"
  inputs:
    origins:
      - url: ${api.url}

```
I'm not going to break down everything, but you might be able to recognise different services for "site", "ssr", "admin", "api" and "cdn", etc, which are variously the API gateway, the admin interface, the frontend static site, and some lambda functions.

They all tie together to make the backend interface work, and to compile a static site hosted on S3. 

And if I log into my AWS dashboard, I can see these services there too ... I mention that just because I have a visual kind of brain.

This idea, of "infrastructure as code" means your applications are truly portable: you can destroy it and re-create it from its blueprint using the code you've written.

And with the amount I use my Webiny CMS, I'm probably not going to ever pay a thing for it.

## Try it out!

I highly recommend giving Webiny a spin. The product is in early stages but is already quite promising. It's nice that as JavaScript developers, we have a good range of choice between this, the rising star Strapi, and the very mature Ghost.

What do you think of it? Let me know!