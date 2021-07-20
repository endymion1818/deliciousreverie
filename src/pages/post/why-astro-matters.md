---
title: "Why Astro matters"
categories:
  - development
date: "2021-07-20T14:21:21+01:00"
description: "Next, Nuxt, Gatsby, SvelteKit ... there's been an explosion of frontend application frameworks lately. It's never been a more delightful experience to spin up a new project. What's the point of difference with this one? Why does it 'matter' so much?"
draft: false
tags:
  - javascript
---

**Next, Nuxt, Gatsby, SvelteKit ... there's been an explosion of frontend application frameworks lately. I've tried many (but not all) of them, and I've got to say, it's never been a more delightful experience to spin up a new project. So much so, that I've got hundreds of unfinished ones lying around everywhere.**

Recently, [Astro](https://astro.build), another new frontend application framework, launched itself on the unsuspecting JavaScript public.

Whilst many of us may have been tempted to say "oh no not another one", this framework really stood out to me.

What's the point of difference with this one? Why does it "matter" so much? Well, consider this:

## 1. Frontend can be one happy family again

Astro could be considered the first frontend "meta framework".

What's one of those then? It's a "set of core interfaces for common services and highly extensible backbone for integrating components [this is already Java thing by the way](https://www.igi-global.com/chapter/java-web-application-frameworks/16864).

Astro is essentially a "bring your own frontend" approach to modern web frameworks. You can use whatever framework (oh, ok "library" then) you know and love, and still spin up a performant app that you can host almost anywhere.

Think about the potential here. Astro could be the place the frontend finally comes together. It no longer matters (as much) what framework you use. Use them all if you like 🤷‍♂️.

Love Vue? You can love Astro. React? Same. Svelte? You'll find no argument from Astro, because Astro is the glue that underpins how we build websites and applications.

Great, innit? It'll probably never happen but I can dream, can't I?

## 2. Astro pushes the boundaries for every javascript framework\*

(\* oh, ok library then)

Take a look at this tweet from Evan You, the creator of Vue:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I just tried this in a Vite SSRed app and this approach totally works... a plugin can simply remove the script tags for the actual bundle and let petite-vue &quot;sprinkle&quot; the parts.<br><br>aka &quot;Island Architecture&quot; 🏝️ <a href="https://t.co/Oe9KRvFsrd">https://t.co/Oe9KRvFsrd</a> <a href="https://t.co/KV7SvCwyn8">pic.twitter.com/KV7SvCwyn8</a></p>&mdash; Evan You (@youyuxi) <a href="https://twitter.com/youyuxi/status/1411405615369539590?ref_src=twsrc%5Etfw">July 3, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Is it a coincidence that Vue now can do a similar thing to Astro? did Astro get Evan to start thinking more about this problem? Could the same be said for the other frameworks too?

[Better hydration is something I've been wanting ever since the present generation of frontend application frameworks came out](https://deliciousreverie.co.uk/post/towards-better-rehydration/).

I know the React team have been working on it for a long time. [I even opened (very prematurely it turns out!) this issue on the GatsbyJS repo around 2 years ago](https://github.com/gatsbyjs/gatsby/issues/17993).

React 18's hydration prioritisation is a good step forward, however the whole DOM tree still need to be hydrated. Won't it be great when we need only attach JavaScript generated elements to the DOM when components really need them?!

It would be wonderful to think that partial rehydration could be everywhere, it would certainly level the playing field and even things up a lot [for the next 1 billion web users](https://gomakethings.com/progressive-enhancement-and-the-next-billion-web-users/).

## Check out Astro

If you care about performance (you care right?) please check out this gamechanger. I'm so excited for the potential here.

https://astro.build

This post was originally published on [Dev.to](https://dev.to/endymion1818/why-astro-matters-55nj/)
