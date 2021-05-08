---
title: Towards better hydration
description: "I came across a tool recently that I'm really excited about ... it's something that I think can solve one of the most pressing concerns in JavaScript development: rehydration."
tags:
  - horizon thinking
categories:
  - development
  - javascript
date: "2021-05-08T15:21:21+01:00"
draft: false
---

**I came across a tool recently that I'm really excited about ... it's something that I think can solve one of the most pressing concerns in JavaScript development: rehydration.**

Imagine how orange juice is transported: the water is removed to reduce the quantity, and water is added back - "rehydrated" - at the destination.

A similar thing happens with a lot of modern JavaScript frameworks: they build static HTML pages (either when the application is built or on the server) send that down to the browser. But there's a fundamental problem with that that I think needs to be solved before we can scale our applications for the next generation of frontend architecture.

Today I think we're much closer to finding a suitable answer to this significant issue.

## The issue

JavaScript is inextricably tied to the other building blocks of the web: html and css. There's one property that allowed more and more control to be given to JavaScript:

```javascript
const root = document.getElementById("root");
```

If you've spent any time with JavaScript, you'll recognise that this is where it takes over the DOM, rendering pages in JavaScript instead of native HTML, facilitating our single page applications.

But this creates a few issues:

1. Nobody can see the page until the JavaScript is parsed and that version of the page renders (even if we're using static or server rendering),
2. Bundle sizes grow larger and larger dependent on the requirements of the application, meaning that the JS pages take longer dependent on the bundle size (and therefore the complexity of the project),
3. We also create performance issues such as lag or jankiness for people on lower-powered devices, because JavaScript runtime takes more processing power (not to mention battery energy) than plain old HTML.

## Solution 1: Hugo, Jekyll, Eleventy et al

The first answer to this problem is static-site generation: use JS to compile in the pipeline, and serve only static HTML to the browser. Certain static-site generators (like the ones mentioned above), excel at this.

The advantage of this approach is that HTML is still the fastest and best way to serve up content.

However, when you want to add any dynamic functionality, you need to load on a separate JavaScript framework, like Vue, Alpine or React. Some static site generators bundle this functionality on, some just focus on statically generating pages. But still I think the problem remains: the static site and the javascript are _separate entities_, and it could sometimes be challenging to keep them in sync.

## Solution 2: Next, Nuxt, Gatsby

In sharp contrast to the static generators above, these send down HTML and then _rehydrate_ the entire page in JavaScript. This has some cool advantages, such as literally no overhead when making components dynamic or interactive, because, at the end of the day, the whole page is already rendered in JavaScript. But ... and this is a big but! ... it's expensive. Because every page has both HTML and JavaScript counterparts, it means bundle sizes are larger, and browsers are working harder to process JavaScript for scroll position, routing and even CSS styles.

## Many ideas, not so many that work yet ...

I've been trying to figure out how we negate these problems, because until we do, we face an impasse which prevents us from scaling our applications as we want — and from reaching broader audiences. Remember, the next billion web users come from countries where conditions are a lot less ... guaranteed.

My attempt at this idea is what I currently do on my website: I allow people the _option_ to visit a statically-rendered HTML and CSS site, or to visit a JavaScript SPA rendered with Preact. That's fine to do on small blogs like this one, but it's not a viable option for sites when some complex functionality is required .. or even some simple functionality: my HTML site doesn't have animations or a search tool.

## A solution

What we need is something _in-between_ these options. Something that can build HTML statically (or on the server), and _partially rehydrate_ elements on the client where that is needed.

![Partial rehydration demonstrated](/images/partial-rehydration.png "a mostly HTML web page with interactive elements in the header and carousel using JavaScript")

This isn't a new idea. The core React team were hoping that concurrent mode would allow you to do this. However, building up a DOM tree is pretty difficult to achieve asynchronously.

Massive steps towards this idea have been made by NextJS with server rendering (building pages on demand), and with SvelteKit's optional rendering (which allows individual pages to be statically rendered as HTML or JS) ... but it's still happening on a per-page basis, meaning that for those pages: there's either no possibility of interactivity, or there's a JavaScript overhead. Sometimes both.

This idea of partial rehydration, or "Islands architecture" by Jason Miller (creator of, among other things, Preact), is something I had really hoped we'd get to at some point.

And now it seems we are here. The below talk at Svelte Summit 2021 blew my mind:

<div class="responsive-iframe-container">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/fnr9XWvjJHw?start=10490" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Astro is the first tool I've come across that has this ambition: to facilitate importing and selectively hydrating components in your page as you require them.

And Astro goes further: we can share state across components, or potentially use different modern frameworks (react, svelte, Angular, you name it!) as we want, and we can request JavaScript to only load when the component is in the viewport.

This has the potential to solve all of these problems:

- No more "uncanny valley" of pages not being interactive
- No large bundles being loaded upfront
- We can even give the user control over whether they want to load certain components

Astro is in early alpha, and seemingly in stealth mode too! I'm so eager to get building with this tool now, but it seems I'm going to have to wait a while before the team are ready to open it to a public beta offering.

This could be a really powerful tool, and fundamentally improve the way we build for the web. How exciting would that be!
