---
title: "Publishing both JS and non-JS sites"
date: "2020-09-18T14:21:21+01:00"
description: "It's always bothered me that the majority of internet users spend a lot of money downloading and running JavaScript, yet I enjoy building things with JavaScript, and want to provide an enhanced experience using JS ... without sacrificing their needs to do so. Now, there's an easier way to do both."
categories:
  - development
tags:
  - performance
  - javascript
draft: false
---

**It's always bothered me that the majority of internet users spend a lot of money downloading and running JavaScript, yet I enjoy building things with JavaScript, and want to provide an enhanced experience using JS without sacrificing their needs to do so. Here's one way we can have the best of both worlds.**

I'm not going to argue JS vs no JS use here, I don't think it's even an argument. In my opinion we need to provide the best experience we can for _all_ of our users, and that includes both those on slow connections and those on fast ones.

Now, there's an easier way to do both.

## Why this site?

I don't really need any JavaScript on this site. But I used GatsbyJS to build it, which by generates HTML but then overlays that with a React app (I already switched from React to Preact for better performance benefits). I had a site search and an animation, which wasn't part of the core experience but were nice enhancements.

So I decided that I should by default provide an experience which was friendlier to those with CPU or battery restrictions, and then have another domain which had the fancy stuff.

## Setup using Gatsby Plugins

I used two plugins to render an HTML & CSS site with Gatsby: `gatsby-plugin-no-javascript` and `gatsby-plugin-no-javascript-utils`. The first builds the site as normal, but then unlinks the JavaScript, so that all you get is the HTML version of the site that Gatsby already builds. The second allows you to do some other finessing so that you can disable inline styles and remove sourcemaps too.

After installing and configuring these plugins, the next step was to setup an environment variable:

In a file called **.env** in the root of the project, I added:

```
JS_DISABLED=false
```

then in my **gatsby-config.js** I access this variable by adding the following to the top of the file:

```
require("dotenv").config()
```

However, I wanted to keep everything else about the configurations the same. Since the export in this file is a single JavaScript object, I could compose it up from separate elements. I could have one array for the plugins, another array for my noJS plugins, like this:

```
const defaultPlugins = [
  // everything else
]

  const noJsPlugins = [
  ...defaultPlugins,
  `gatsby-plugin-no-javascript`,
  {
    resolve: `gatsby-plugin-no-javascript-utils`,
    options: {
      removeGeneratorTag: false,
      noInlineStyles: true,
    },
  },
];
```

And now combine them into one object, conditionally choosing which array of plugins to choose, and export it as a module:

```
module.exports = {
  siteMetadata: {
    pathPrefix: "/",
    title: siteTitle,
    siteUrl: `https://deliciousreverie.co.uuk`,
    description: `blog of developer & bookworm benjamin read`,
  },
  plugins:
    process.env.JS_DISABLED === "true" ? [...noJsPlugins] : [...defaultPlugins],
};
```

## Setting up on Netlify

Netlify is very smart. I only needed to do a few things: I initiated a new site and chose the same base repo. I had to make sure I was using Netlify's DNS so that I could use my subdomain with the new site. Then I set the environment variables on both sites, merged the code and it was live!

## Updating the UI

When I checked the noJS version of my site, the search bar was still visible, although it didn't work. So I had to stop it from showing on the noJS version.

I tried using `process.env.JS_DISABLED` in the JSX, but Gatsby separates environment variables. If I wanted to access this variable on the frontend, I could rename it GATSBY_JS_DISABLED, but I thought of another way of doing it that proved just as effective...

```
{typeof window !== 'undefined' && <SearchForm />}
```

Now, the JSX that gets built on the server doesn't render the searchform because there's no Window object. [Josh W Comeau has a more robust way of handling this use case on his blog post](https://joshwcomeau.com/react/the-perils-of-rehydration/)

I used this again to display a message in the footer to let users know which version of the site they are on:

```
  {typeof window === 'undefined' ? (
    <p>You're currently on the <i>javascript disabled</i> version of the site. To enable the site search and some pretty animations, <a href="https://jsenabled.deliciousreverie.co.uk">view the javascript enabled react app</a>.</p>
  ) : (
    <p>You're currently on the <i>javascript enabled</i> version of the site. if you need to conserve your battery or CPU, <a href="https://deliciousreverie.co.uk">view the HTML & CSS only site</a>.</p>
  ) }
```

I used this method because I wanted to _toggle between_ elements that were inside a single parent element.

## Conclusion

What's stopping us building everything like this? It didn't take long to set up, and with some UI tweaks I got the best of both worlds: a fancy site with all the whistles and bangs of a JavaScript app, and a barebones (but still pretty) site that doesn't cost the earth to run.

## Post-Script: "This should be done by [browser, hosting platform, a serverless function]"

One of the things I hear often is that we developers shouldn't be responsible for this kind of thing, that it should be the responsibility of some other part of the infrastructure of the web to handle request loads, but I don't think that's the case.

Here's a few reasons I don't think it can be the responsibility any of those things:

### Browser?

Browsers start fetching small packets of information, then scale up until they've expended the bandwidth. It's only once they reach that point that they can tell what the users' connection is like. This is probably too late to decide what to send down the wire.

### Hosting platform?

Hosting platforms don't have the information required to know in detail what the users' connection is like. At best this is an approximation. Could we implement an API so that we can get that data? Maybe, but take a look at what happened with the Battery status API. We don't want to go there again.

### Serverless function?

Hmm ... maybe ... but see above. Potentially an edge function could do it ... though I don't know enough about this to see how.

### Nobody?

Erm no. Someone has to take responsibility here, and it's not the user. Since we've exhausted all other options, I think that we must rise to the challenge and provide people the online experience ... not that they _need_, but that they _deserve_.
