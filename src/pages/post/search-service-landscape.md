---
title: "The search service landscape"
description: "Search is a massive growth market but there is only one market leader and many inadequate contenders. Here's why I think we should be building more search providers to expand the market."
draft: false
tags:
  - approaches
  - industry thought
categories:
  - development
  - industry
date: "2020-08-28T11:21:21+01:00"
---

**Search is a massive growth market but there is only one market leader and many inadequate contenders. Here's why I think we should be building more search providers to expand the market.**

When did you last use a site search tool? What engine powered that tool? I can pretty much guess what most of you would reply. And whilst they are by far the market leaders, I think that's an indication that search as a market is about to explode.

## History of search

Building a basic search implementation was often something that was baked into monolithic apps. For example, WordPress comes with a no-frills search built in.

However we've gotten past monolithic do-everything-in-one-codebase apps now. Search becomes it's own concern, which is better for the search tool, and for the person using it, because we have the option to swap tools that aren't doing their job well enough.

Whilst **Apache Solr** and **Elastic Search** are the granddaddies of search, they are in themselves extremely powerful, out-of-the box platforms. I am going to exclude them from the criteria because they're more used for logging, processing and analysing hefty amounts of data such as event logs, application errors and things like that.

The use cases I'm specifically thinking about are site search, app search and searches for online documentation.

## The contenders

Search is an emerging market and not nearly as well developed as the CMS market. But there are a few up and coming options.

### 1. Algolia

Algolia is the shining beacon here. It is clear from their implementation that they saw a gap in the market and have exploited it masterfully. They've also got the most unbelievable marketing department, so good that you might be pursuaded to believe there are no contenders for the throne (which is almost true ...)

**Pros:** Lovely analytics dashboard, delightful SDK  
**Cons:** Closed source platform that can get really expensive ... just mention "single sign-on" and watch the dollar signs roll...  
**Link**: https://www.algolia.com

### 2. Cludo

Cludo are an up and coming SaaS platform not unlike Algolia, with a nice dashboard and machine learning backed features. I really want to like Cludo ... but they currently only offer a web scraper as a tool. Having seen the interface, I can say it's a really good scraper with a good set of features, but it's still a content scraper. In the use case I had, I needed to upload indexes at the time we built them, and we couldn't rely on that kind of tool. If they extended their product to include API uploads, it would be a much stronger product in my opinion.

UPDATE: Cludo team have told me they _do_ have a data push API, so you don't need to use their site crawler. More info: https://docs.cludo.com/#data-indexing_push

**Pros:** Good contender for the market  
**Cons:** No SDK.  
**Link:** https://www.cludo.com

### 3. SwiftType

SwiftType have recently been bought out by Elastic, and is now called "Elastic Site Search". Again, a good tool with two strong products: app search and site search. But again this product falls into the trap of only allowing content in via web scraper.

**Pros:** Backing of Elastic, a leader in the landscape  
**Cons:** No content uploads API. No SDK.  
**Link:** https://swiftype.com

### 4. Meili

Meili is an outlier in this space, and an entirely new product that isn't built on any existing technologies (most of the other platforms rely on Elastic under the hood). Meili is an open-source, self-hosted solution (I hope they'll offer it as a Saas in the future too), written in Rust. It is in active development, and possibly pre-alpha as I write this. There's no dashboard which seems a shame, but there is a good set of SDKs and [integration guides on their GitHub repo](https://github.com/meilisearch/integration-guides).

**Pros:** Self hosted, fast as heck. Upload content via API  
**Cons:** No analytics dashboard  
**Link:** https://www.meilisearch.com

### 5. TypeSense

I'm adding Typesense about a month after I published this original article, since I've only just found it.

Typesense is, like Meili, open source, with a "cloud" version that you can sign up to as well. Typesense seems to have its positioning right, as a search API that you can install from a Docker image or on a Linux server via apt or yum package managers. There's also API libraries in JavaScript, PHP, Python and Ruby. The JS package in particular seems to come at a reasonable bundle size.

The interesting thing about this is it's written in C++, so it's likely to be pretty fast too.

Shoutout to Christopher Geary for letting me know about this one.

**Pros:** Self hosted and cloud option  
**Cons:** No analytics dashboard  
**Link:** https://typesense.org

## Conclusion

If I was an indie hacker or an investor with some developer punch, I'd be building an Algolia clone right now. Whilst they are clearly market leaders there's plenty of room for growth here, only one or two key features hold back the expansion into a mature market with a good amount of choice.

For now, I'm not sure whether to recommend Algolia with the bitter pill of it's astronomical Enterprise costs, or bet on a competitor, hoping that they will eventually catch up.
