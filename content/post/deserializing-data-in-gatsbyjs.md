+++
date = "2018-03-17T14:21:21+01:00"
draft = false
title = "Deserializing Data in GatsbyJS"
description = "One of the great strengths in static site generator Gatsbyjs is the node API but it can present a few issues in certain circumstances when content is stored as escaped HTML, such as in WordPress posts and pages. Here's how we recently dealt with this issue when using react-helmet."
categories = [
  "development"
]
tags = [
   "javascript",
   "gatsbyjs",
   "react",
   "wordpress",
   "headless"
]

+++
**One of the great strengths in static site generator Gatsbyjs is it's node API. This API gives Gatsby flexibility by allowing data to be transformed from myriad sources into a format that can easily be rendered as HTML: JSON. However, this can present a few issues when content is stored as escaped HTML, such as in WordPress posts and pages. Here's how a colleague and I worked around a tricky problem we discovered when working with content pulled in from WordPress.**

I recently built a GatsbyJS site that stored content in Markdown and used NetlifyCMS to allow content authors to work directly with the site in editing and adding content. Using Markdown with NetlifyCMS was an interim solution. We needed to build a site in only a few days, but knew that requirements would at some point grow substantially, at which point we wanted to switch to a WordPress backend.

When I switched to WordPress it took me only a few hours to implement 95% of the work, most of which was spent generating the existing content as WordPress pages. I modified my `gatsby-node.js` file and my page template, but I came unstuck when using Helmet to generate page titles.

## The Issue

Using the existing data structure I was able to generate a page layout that looked like this:

```js
<div>
  <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
  <div dangerouslySetInnerHTML={{ __html: post.content }} />
</div>
```

This results in the result we expected, the content rendered as HTML inside the respective tags.

However, the post.title is stored as escaped HTML, so when you try to pop the `post.title` into the meta tag using Helmet, like this:

```js
<Helmet title={`${post.title} } />
```

you get whatever markup is stored. This is fine in most cases ... however, in WordPress land you'll quite often find people using things like `<br>` tags to adapt their layouts a little, or in my case, using a dash. When rendered as a meta tag, that looked like this:

```js
mytitle \&#8221; contains a dash
```

Not great for presentation, or SEO.

## The Workaround.

There wasn't a simple way around this issue that my colleague [David Hewitt](https://twitter.com/Mosh1e) or I could find.

We knew we needed to parse the element so that it returned as HTML again, but there wasn't an easy way to do this in Gatsbyjs. We knew we could use the DOM parser to achieve these results but here there was no document, hence no DOM.

In the end we turned to the xmldom package on NPM, and pulled the `DOMParser` method in, decoding the string and then grabbing the textcontent.

```js
import React from 'react'
import Helmet from 'react-helmet'
import { DOMParser } from 'xmldom'

class pageTemplate extends React.Component {
  render() {

    const post = this.props.data.wordpressPage;
    const siteTitle = this.props.data.site.siteMetadata.title;

    const dom = new DOMParser().parseFromString(`<div>${this.props.data.wordpressPage.title}</div>`);
    const decodedString = dom.childNodes[0].textContent;

      return (
      <div>
        <Helmet title={`${decodedString} | ${siteTitle}`} />
...
```

## Showing Gatsby's Strengths

Although we encountered an issue here, in a lot of ways it has hilighted to me the strengths of GatsbyJS, not what you might perceive as weaknesses.

In the first instance, the issue originated from WordPress which stores escaped HTML instead of JSON, MarkDown or any other format. I can see the benefits to this (being able to add `<br>` tags to titles etc) but it does present some unique challenges&mdash;and not just to GatsbyJS.

This has also hilighted one of the fantastic strengths of GatsbyJS:- that I could pull in a package from NPM and use it in my build process. This opens up a world of possibility and makes GatsbyJS a lot more customizeable than I had thought previously.

And the other strength is that it still took me only a few hours to switch from using MarkDown files to a WordPress backend, such is the strength of the node API and the `gatsby-source-wordpress` in the way that it transforms data so that there was no difference between the two builds.

[I've filed an issue on GatsbyJS on the repo](https://github.com/gatsbyjs/gatsby/issues/4543), but there are a few issues around how to write a normalizer to deal with this. For instance, in most cases we do want to use the escaped HTML, so that the Title field is rendered in the component. It's only when using Helmet that we want the string deserialized.

So I'm not sure how to proceed with this .. at least there's a workaround for now, and I'm sure as a community we can address this issue so that we can drop the external dependency or build it into the existing processes in some way.
