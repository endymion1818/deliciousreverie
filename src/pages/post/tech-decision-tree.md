---
title: "What should I use to build my new project?"
categories:
  - development
date: "2021-07-20T15:21:21+01:00"
description: "There are so many choices when it comes to frameworks, and that's teriffic! But it could be bad news for people who struggle to make decisions. They might feel paralyzed just by the amount of choice that's on offer. So I made this with the aim of helping."
draft: false
tags:
  - javascript
---

**There are so many choices when it comes to frameworks, and that's teriffic! But it could be bad news for people who struggle to make decisions. They might feel paralyzed just by the amount of choice that's on offer.**

With that in mind, I've given some deep thought into the tools I've looked at recently, and historically, and tried to imagine how I might build an application, both frontend and backend, if I was just starting out.

I came up with this chart. It's not a complete list of technologies, and it's at least a little biased towards my favourites. But it's hopefully something that can help unblock that paralysis, at least giving you a place to start.

Making decisions about technology is difficult. I hope that this resource eases your pain even if just a little!

[![Tech decision tree](/images/tech-decision-tree-thumb.png "decision tree graphic. Click for a larger view")](/images/tech-decision-tree.png).

## Backend

This isn't mutually exclusive, but you might be spinning up a blog using Markdown or a 3rd party service. In which case, let's just skip this part and go to the frontend.

Also, a lot of the frontends I've mention have some sort of functions API built in. But since the backend isn't the focus of those tools, I've left them out for simplicity's sake.

If you're thinking you aren't going to need a lot of backend, likely the best thing to use would be lambdas. As I mentioned above, a lot of the frontend tools we have access to do have some sort of API for backend services. You could use that, or Netlify / Vercel's implementation, unless you're going directly to a cloud provider for your hosting.

If you need more than this, you might want to consider whether you want to go the serverless route, or use a monolilth.

Serverless tooling is a little less mature but it's probably more cost effective. You're not constantly paying for containers running in whatever service you're hosting on. So if you're needing a lot of backend it might pay dividends later.

As I mentioned, the choices are very broad with monoliths. From straight-up CMS forms like Keystone, Ghost, Strapi, Payload and Apostrophe to full-blown frameworks such as Express, Meteor, Nest or Blitz.

If you're looking at serverless, choices are decidedly more finite. There's a caveat though: some of the monoliths _can_ run as serverless. Nest and Express are the most notable of these.

Otherwise if you want a framework to build on, there's Redwood (which works particularly well on Netlify and soon Vercel) or Webiny (for AWS, Azure and others).

## Frontend

The only JavaScript tool that doesn't have dynamic client-side routing out of the box is Eleventy. Eleventy's focus is on compiling away JavaScript, so you get a fast, browser-native experience out of the box.

If you're focus is performance, and you need client-side routing, check out SvelteKit. Rather than shipping your framework to the frontend, SvelteKit compiles to pure JavaScript. But it still hydrates all of what you can see on your screen, meaning it's not as performant as Astro can be.

Astro, a newcomer on the scene, does client-side routing via it's Collections API, other than that it's HTML all the way baby. I'm particularly fond of Astro because you can use whatever frontend framework you want.

If you're planning for a lot of client side JavaScript, dynamic routing and all, then your choices are on to whether you want a Vue-based or React-based framework.

In the Vue world, there are plenty of choices, from the more low-level Nuxt, to Gridsome, which has a plugin ecosystem and build-time GraphQL API. It'll likely be quicker to use Gridsome because of this, but you may not need it.

Similarly, Gatsby or NextJS are React frameworks. Gatsby has a large plugin ecosystem and GraphQL build-time API, whereas NextJS has a more low-level approach, you source data yourself, and plugins are scarce and likely not officially supported.

I must admit i really enjoy using the build-time data layer approach. It's much easier to see when things are going to be rendered, and you can save API calls for your visitors by doing them upfront at the build stage.

But also Next and Nuxt have some tricks up their sleeves. Next's innovated ISR "incremental static regeneration" means it can keep content more fresh than Gatsby currently can. However I imagine that's going to be a short-lived triumph.

## Go forth and build!

Phew! There's a lot to choose from isn't there?!

If you're still stuck at this point, and don't think you have a clear idea other than you want to build ... just choose one at random!! You will always learn something significant, and it'll be fun!

It's never been more fun to build with JavaScript, the choices we have these days are staggering. I hope this has helped unblock your decision paralysis!!
