---
title: Towards better hydration
description: "There are two huge issues that we're facing with JavaScript. Well, perhaps three if you look at it in a different way. GatsbyJS and NextJS have made huge leaps forward but still haven't answered the key problems of rehydration and concurrency."
tags:
  - horizon thinking
categories:
  - development
  - javascript
date: "2021-05-02T15:21:21+01:00"
draft: false
---

**There are two huge issues that we're facing with JavaScript. Well, perhaps three if you look at it in a different way. GatsbyJS and NextJS have made huge leaps forward but still haven't answered the key questions of rehydration and concurrency.**

Today, I think we're much closer to finding a suitable answer to these problems.

## The issues

JavaScript is inextricably tied to the other building blocks of the web: html and css. There's one property that allowed more and more control to be given to JavaScript:

```javascript
const root = document.getElementById("root");
```

If you've spent any time with JavaScript, you'll recognise that this is where it takes over the DOM, rendering pages in JavaScript instead of native HTML, facilitating our single page applications.

But this creates a few issues:

1. Nobody can see the page until the JavaScript is parsed and that version of the page renders (even if we're using static or server rendering),
2. Bundle sizes grow larger and larger dependent on the requirements of the application, meaning that the JS pages take longer dependent on the bundle size (and therefore the complexity of the project),
3. We also create performance issues such as lag or jankiness for people on lower-powered devices, because JavaScript runtime takes more processing power (not to mention battery energy) than plain old HTML.

I've been trying to figure out how we negate these problems, because until we do we will face an impasse which prevents us from scaling our applications as we want, and from reaching broader audiences.

There have been issues that have tried to converge the flexibility of JavaScript with the speed of HTML for a while now. These are at the very opposite end of what Gatsby and NextJS do: they in some way incorporate small JS libraries that, instead of rehydrating (replacing entire HTML pages with JavaScript ones) they allow you to select some part of the DOM tree and make it interactive.

However with these tools you're still working with two separate entities: a compiler that builds pages and a separate one that does DOM manipulation. It's an incongruous mix that has it's own issues, edge cases and limitations. The two tools are fundamentally separate, and stay separate.

My attempt at this idea is what I currently do on my website: I allow people the option to visit a statically-rendered HTML and CSS -only site, or to visit a JavaScript SPA rendered with Preact. That's fine to do on small blogs like this one, but it's not a viable option for sites when some complex functionality is required .. or even some simple functionality: my HTML site doesn't have animations or a search tool.

## A solution

What we need is something _in-between_ these options. Something that can build HTML statically (or on the server), and _partially rehydrate_ elements on the client where that is needed.

![Partial rehydration demonstrated](/images/partial-rehydration.png "a mostly HTML web page with interactive elements in the header and carousel using JavaScript")

This isn't a new idea. The core React team were hoping that concurrent mode would allow you to do this. However, building up a DOM tree is pretty difficult to achieve asynchronously.

Massive steps towards this idea have been made by NextJS with server rendering (building pages on demand), and with SvelteKit's optional rendering (which allows individual pages to be statically rendered as HTML or JS)

This idea, dubbed "Islands architecture" by Jason Miller (creator of, among other things, Preact), is something I had really hoped we'd get to at some point.

And now it seems we are here. The below talk at Svelte Summit 2021 blew my mind:

<div class="responsive-iframe-container">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/fnr9XWvjJHw?start=10490" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Astro is the first tool I've come across that has this ambition: to facilitate importing and selectively hydrating components in your page as you require them.

And Astro goes further: we can share state across components, or potentially use different modern frameworks (react, svelte, Angular, you name it!) as we want, and instruct Astro to only load the JS for them when they're in the viewport.

This has the potential to solve all of these problems:

- No more "uncanny valley" of pages not being interactive
- No large bundles being loaded upfront
- We can even give the user control over whether they want to load certain components

Astro is in early alpha, and seemingly in stealth mode too! I'm so eager to get building with this tool now, but it seems I'm going to have to wait a while before the team are ready to open it to a public beta offering.

This could be a really powerful tool, and fundamentally improve the way we build for the web. How exciting would that be.
