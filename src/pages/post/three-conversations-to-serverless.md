---
categories:
- development
date: "2018-11-09T23:51:21+01:00"
description: When Im explaining the idea of Serverless architecture it often takes
  three conversations before someone understands where I'm coming from, why we put
  up with the sometimes difficult to understand restrictions it puts on development,
  and ultimately why it can be extremely useful. In this post, I'm going to document
  these three conversations that Ive had with many people in the last few months.
draft: false
tags:
- serverless
title: Three Conversations to Serverless
---
**Serverless isn't such a new concept but it is still difficult to understand for many of us. I've been privileged to work with some great people over the past few months, and I've really been helped to understand serverless because of the questions they've raised, many of which I couldn't answer straight away. Often their questions have got me thinking about different ways to explain serverless.**

Since many of these people are used to managing, developing or supporting a project that's more monolithic in nature, I'm going to try to write down some of those questions in the form of the paths they often take: realisation, clarification, and comprehension. If you find you don't understand the concept of serverless after these 3 "conversations", remember that the idea of 3 conversations is perhaps a generalisation. One of my colleagues, a much more senior developer than I, was persuaded of the approach after several weeks of discussions!

## 1. Realisation

Often, people in my organisation come to me with a requirement for the project, or a solution to an outstanding problem, with an idea of how they would implement it. This is because we are often predisposed to solutions-based thinking. There have been studies of the brain to show we are likely hard wired to do this. It helps us to act quickly based on our previous experiences.

However, with serverless there's usually less common ground with previous experiences we might have had. Often, during the conversation this statement comes up:

_"there is no backend"_

When I reach this point in a conversation, it's the point that the listener realises the objective they currently have isn't possible in the way they have been thinking.

Whether it's to dynamically render content, process form data, implement redirects, or modify content using a CMS, this statement stops them short. _There is no back end_ to our static frontend that is, in our case, hosted on a dumb S3 bucket and uploaded to a dumb CDN. I mean "dumb" as in there is no processing ability there we can leverage.

Usually, this realisation prompts some critical thinking. "How can I solve my problem with this restriction?" And that's when it starts to get a bit frustrating. Which means you might need some clarification.

## 2. Clarification

You, the listener, have probably been mulling over your problem for a while now, and whilst you realise you can't stop a train that's in progress you might be thinking this whole serverless thing is a ludicrous idea.

Why would anyone build apps this way? Why make it so complicated?! When you had a monolithic app, it could do anything you wanted out-of-the-box. Now you might be finding out things. Things that might have been unknown to you before. For instance, form data needs to be processed server-side before it's sent anywhere. That a lot of 3rd party services require auth tokens, which we can't use in JavaScript because it can be read and used by anyone.

This can be frustrating. These paradigms are hard to come to terms with, at least initially. But with each restriction there is a solution that comes with some really interesting benefits. And that's when clarification can turn into comprehension.

## 3. Comprehension

Having gone through this process of realising we are dealing with something very different from what you might have imagined, to the clarification that you can't approach your requirement in the same way you have done previously, now we can start to solve the _new_ problem.

When we start doing that, we can find there are some really nice solutions that add a layer of curiosity and, you might say, delight, as listeners come to find out more about the options they have.

Heres a few of the "lightbulb" moments I've enjoyed witnessing over the course of the past few months, credited where I can remember who it was:

_"Ah so there's more security and better performance, that's good then."_

_"So you can get that data from the API at build time, **and** update it if necessary on the frontend. That's useful." (Tim)_

_"[to other stakeholders] ... and then anyone else can consume this service if they need to, it's already built for them."_

_"I can see why you wanted to use Gatsby for this project. GraphQL is ... is really useful actually" (Awais)_

_"So you can do that even **before** the site gets to the user? And it would be one request?" (Jonny)_

_"[After we reported straight As in webpagetest.org] Really impressive lads! Good work!" (Tomas)_

This has been a lot of fun for me. I have particularly enjoyed helping others see things in a different light, or with renewed potential. It's great to see people get excited about something so much that they want to go away and do something with it.

Serverless is still only one method to approach development. It's not always the best way, but it is a viable solution to certain situations and use cases. But it really does take time to come to terms with the idea. Teams you interface with also need to be aware that there are things that are going to be different and some problems may require a very different problem solving route.

Static sites in particular shouldn't be made to do everything. Sometimes complexity on the frontend can be taken too far.
But we have managed to build a site that is robust, fast, beautifully designed, deceptively simple, and that has some useful microservices that can also be utilised elsewhere.

Working with serverless is definitely my thing. I'm really looking forward seeing more implementation of this approach in the future. I particularly want to build a serverless eCommerce site next ...!
