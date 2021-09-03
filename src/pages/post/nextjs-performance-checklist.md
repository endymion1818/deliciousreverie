---
title: "NextJS Performance Checklist"
description: "Building React applications with NextJS is a great way of getting things in front of customers quickly. But you might find that they aren't using your site because it's too slow. Here's a list of things you might be able to do to improve the performance of your NextJS application."
date: "2021-09-03T10:07:21+01:00"
tags:
  - javascript
  - react
  - nextjs
categories:
  - development
---

**Building React applications with NextJS is a great way of getting things in front of customers quickly. But you might find that they aren't using your site because it's too slow. Here's a list of things you might be able to do to improve the performance of your NextJS application.**

This post was originally published on [Dev.to](https://dev.to/endymion1818/nextjs-performance-checklist-5gjb)

I've geared this towards NextJS for a few specifics I wanted to include, but this list can be applied more generally too.

## Applications

- Frontends are entirely cached on CDNs wherever possible ("Jamstacked" https://jamstack.org/)
- Where that’s not possible, pages are constructed at build time or on the server using Incremental Static Regeneration (https://www.smashingmagazine.com/2021/04/incremental-static-regeneration-nextjs/)
- Make use of module replacement strategies in links to internal routes (https://nextjs.org/docs/api-reference/next/link )

## Images

- Images are fetched either on build or on request from a CDN
- Images are fetched at the correct dimensions and most performant formats (https://ericportis.com/posts/2014/srcset-sizes/ )
- High priority images (those in the viewport when the page is opened) use responsive `preload` (https://www.bronco.co.uk/our-ideas/using-relpreload-for-responsive-images/ )
- Low priority images are downloaded asynchronously using loading="lazy"
- Make use of application image components where possible (https://nextjs.org/docs/api-reference/next/image )

## Styles

- Don’t use css-in-js (https://pustelto.com/blog/css-vs-css-in-js-perf/ )
- Only used styles are sent to the client (https://markmurray.co/blog/tree-shaking-css-modules/)
- If using css-in-js try to make css as static as possible (https://itnext.io/how-to-increase-css-in-js-performance-by-175x-f30ddeac6bce)
- CSS is minified

## Fonts

- Use font substitution (https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display )
- Use fonts from a CDN
- Download only necessary fonts
- Subset fonts where possible (https://developers.google.com/fonts/docs/getting_started#specifying_script_subsets )

## Scripts

- Only interactive elements are hydrated on the client (https://medium.com/@luke_schmuke/how-we-achieved-the-best-web-performance-with-partial-hydration-20fab9c808d5)
- Only used JavaScript is sent to the client (https://web.dev/codelab-remove-unused-code/, https://developers.google.com/web/fundamentals/performance/optimizing-javascript/tree-shaking)
- Consider using Preact instead of React (https://dev.to/dlw/next-js-replace-react-with-preact-2i72)
- JavaScript is minified
- Scripts are compressed using
  - GZip (good)
  - Brotli (better)
- JavaScript bundles are split to allow for effective download & parsing
- Only essential JavaScript is blocking
- Use web workers for memory intensive operations
- Use more performant libraries (or use native JavaScript) where possible (eg. Lodash vs Underscore, Temporal API vs Moment)

## Data

- Only fetch data you need (consider using GraphQL)
- No API chaining (consider using GraphQL)
- Minimise data normalisation (offload to a standalone function or backend)

## Third-party scripts

- Third party scripts are non-blocking (https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript )
- Use resource hinting to parallelise downloads (https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript )

## Perceived performance

- UI placeholders are used for loading states
- Loss of connectivity results in a notification and showing the previous state (https://www.apollographql.com/docs/react/data/queries/#previousdata )
- Completed action states are shown when data has been sent not received by the server
- Prevent jumping content / layout shift
- Reduce DNS resolution & SSL negotiation time where possible (https://zoompf.com/blog/2014/12/optimizing-tls-handshake/ )

## Testing and analysis

- PRs that degrade performance are identified in the pipeline
- Frontend performance is measured (https://speedcurve.com/ )
- Frontend performance is regularly analysed
- Analysis is turned into actionable backlog items

There are two benefits to implementing as many of these as you can: conversions will likely improve because more users can use your app. And also you will save your own costs: less downloads, less bandwith and where you can cache from origin, you'll save on infrastructure costs.

I'm sure this list isn't quite complete, let me know if there's anything I've missed!
