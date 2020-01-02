---
categories:
- development
date: "2018-08-18T14:21:21+01:00"
description: In order for people outside of the development team or community to use
  your software, care must be given to allow them to write and publish content with
  the least amount of friction or obstruction as possible. A well crafted interface
  that allows people to do this isn't easy. I have started to use Strapi as a serverless
  backend API interface recently and believe it's going to be a very useful solution
  for a lot of projects.
draft: false
tags:
- strapi
- javascript
- serverless
title: Serverless Content Authoring with StrapiJs
---
For years, WordPress has been the de facto standard for content authoring on the web. The reasons for this are many, but principal among them is it's clean, easy-to-use interface that gives content authors control over nearly every aspect of their content. WordPress isn't going away, but hosting and maintaining it safely can be a challenge.

At the organisation I work for, we have a WordPress blog, but almost no PHP expertise as we were moving from Ruby towards a JavaScript stack. We also have another service that used a WordPress-like interface, but were tied into expensive hosted services - which was deprecated, and yet still fulfilled an essential function as a core part of our content strategy.

For this reason, I started to investigate a way of amalgamating this content into one location, on one platform (preferably JavaScript), with an API so that I could pull in content to our static site built with Gatsbyjs.

## The Elusive Dashboard

There are lots of services out there that could have fulfilled our requirements, but all of these stored content on another platform, an approach we patently wanted to avoid. For that reason, services like [Forestry](https://forestry.io/), [Contentful](https://www.contentful.com/), and even [Sanity](https://www.sanity.io/) with its installable api and hosted backend, were out of the equation.

Instead I looked into dashboard / content authoring UIs that we could build an API around. I saw that [Meteorjs had an open-source project  in this vane](https://github.com/yogiben/meteor-admin "A complete admin dashboard solution"), but that there really weren't that many active projects on NPM that we could utilise.

Then I discovered Strapi.

## A Content Interface

Strapi quickly started looking like it was a product that could fit our requirements. A self-hosted, API-focused system with a well designed dashboard and a useable interface. I particularly liked that we could create content types on the frontend, designate the fields, and start using them straight away.

Strapi showed promise, however version 1 was depracated, v2 hadn't made it out of the door, and v3 was still in Alpha release stage. This is a cause for concern, however the team were progressing with a good deal of focus on fulfilling key user needs. I decided I would get involved in the project and start using it for personal work.

## Deploying Strapi on Heroku
Since my  focus over the past few years has been Severless technology, I wanted to deploy Strapi on [Heroku](https://www.heroku.com/ "Cloud application platform"), a managed platform with a generous free tier that allows you to host applications in a raft of different languages, from PHP and Ruby, to Go and JavaScript.

Fortunately for me, there's already a decent [Strapi starter for Heroku](https://github.com/strapi/strapi/ "Strapi Github repo"),  which is advertised right on the Strapi repo readme. One click and I had started my own Heroku instance, using [mLab](https://mlab.com/ "Database-as-a-service by Mlab") to host the MongoDB database, all connected up and ready to be used.

This is great for giving Strapi a spin, but I wanted this to be my content platform. To do that I needed to create my own fields and add some new content types. I added some, only to find they'd rolled back again afterwards. I tried uploading images, to find they disappeared after a few hours. What was happening?!

What I hadn't realised is that Heroku's file system is ephermeral, which means data stored there won't persist. You application's instance can be destroyed and rebuilt from the git store depending on Heroku's, or your, needs. So making changes to the API, storing images locally, or even data, needs to be done differently.

The core issue was that I needed to clone the site locally, add my changes, then  to Heroku's Git repo, and push it to Heroku's repo.

## Cloning Locally

Cloning the Heroku build pack so you can work on it locally is a bit tricky. I [found this helpful guide](https://help.heroku.com/XOBUHLKQ/why-do-i-see-a-message-you-appear-to-have-cloned-an-empty-repository-when-using-heroku-git-clone "Why do I see a message 'You appear to have cloned an empty repository' when using heroku git:clone?
") and worked through it, and eventually I was able to spin up my Strapi app locally.

I work on Linux, and I had to be careful when installing MongoDB locally. This is because I needed to add MongoDB via the APT package manager, and I inadvertently tried to install a version meant for older Linux OSes. So I broke my computer and had to re-install the OS.

After that, I decided to stick with the remote service mLab until I can decipher the Docker documentation and get it all running together inside a container.

Once done, I was able to add  content types and fields, and add [Cloudinary](https://cloudinary.com/ "image and video storage, optimization and CDN") as an image storage provider, and push my changes to Heroku.

## Querying the API

One last hurdle remained, which was to query the API from GatsbyJS. To start with, I found I kept geting 401 Unauthorised notifications. This is because every content type you define is private by default. You have to enable the public user, or submit auth details, in order to query the data. [Here's a handy guide on how to do that](https://strapi.io/documentation/getting-started/quick-start.html#consume-your-api "Strapi Quick Start: Consume your API").

That was it, I now had a fully functional API hosted for free on Heroku. I could start the app (Heroku's free tier means that you app will sleep until its needed), run Gatsbyjs, and get my data using the gatsby-source-strapi plugin.

![Strapi's interface.](/images/strapi-interface.png "The Strapi content editor")

## Strapi - Ready for Production?

As I write this, Strapi is moving steadily towards an initial Beta release. It's positioning - a self-hosted API dashboard and content authoring platform - is pretty much unique in the JavaScript world. I'm using it to store content for my new personal site https://discovermikeoldfield.info, and I'm putting it forward at work as a replacement (and enhancement) over those separate, difficult to maintain or retired APIs I mentioned at the start.

However, **this is a product that's very much in development**, and there are certain inconsistencies to watch out for. Plugins and even features may change frequently. I had some serious issues with the date picker in the version I was using, and I couldn't get the Cloudinary plugin to work so I instead created a text field and uploaded my images to Cloudinary independently.

However, it still met my requirements and proved to be a product I recommend investigating, and using if it meets your requirements. If you are after this type of thing I ask you to be generous with your support for the time and money the contributors have put into it. It takes not only serious programming chops but also a good investment in design for such a thing to be useable, and I think the Strapi team have achieved that.

It's still a little rough around the edges as you might expect from software still in prerelease. But it's filling a huge gap in the market and that's pretty unique. Strapi is definitely shaping up to be a tool I am going to be using frequently in the future.

[Strapi website](https://strapi.io/) &bull; [Github](https://github.com/strapi/strapi/)
