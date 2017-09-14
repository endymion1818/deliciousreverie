+++
date = "2017-09-14T14:21:21+01:00"
draft = false
title = "Developing in React: Starting to See It"
description = "With the rise of the JAMStack making a profound effect on my work day, and Gutenberg for Wordpress making React a fact of daily life, I've decided to delve into the library. As I do, I find that some things I'd never considered before suddenly seem more appealing."
categories = [
  "development"
]
tags = [ 
   "javascript", 
   "react",
   "jamstack"
]

+++
Up until now, as a frontend designer I've prided myself on being a HTML and CSS specialist. My use of JavaScript had been scoped to presentational animations and DOM manipulation. However, at Indigo Tree we're branching out from our staple of Wordpress and trying different methods of creating websites with functionality that our clients require, whilst maximising their budget.

We're also bracing ourselves for the stormfront of Gutenberg for our Wordpress projects. From the time it's included in Core, knowing JavaScript will be a lot more of a necessity for every developer on a project. Understanding templating in React will be too.

So I decided to dive in with a few courses, some experimentation, and the aim of building a site in [Gatsby.js](https://www.gatsbyjs.org/ "Blazing-fast static site generator for React") as a potential kickoff point for projects which can be built as static sites.

## Letting Go

The first thing I had to do when investigating how React works was to let go of some preconcieved ideas I had - that JSX is just plain wierd, that JSS (JavaScript Stylesheets) was an uncessary abstraction. There was a recent post about how possible it is to make React templates that are accessible, an argument that has previously been levelled at the framework. 

So I tried not to look at the templating wierdness too much, and embrace the differences. My classes soon became `classNames`s, my `<a>` tags `<Links>`, and I quickly saw what people had been enthusing about.

Managing everything in one place is such a catharthic experience.

Before I used to have function files, filter files, template files, and SASS partials, often with similar names, depending on the framework I'd be using.

So each time a client would come in with a last-minute change, I would open up the code (which I might last have touched weeks or months previous), and try to grok what function lived where, or what I had called that SASS partial... even with the help of browser dev tools, this can be really annoying.

Now, especially with Gatsby, I have my logic in one language, and in a way that makes groking easier. I have my layout, template and config modules to hand in the folder structure, without duplication.

```js
import React from "react"
// Template for blog page
export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div>
      <h1>
        {post.frontmatter.title}
      </h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}
// The data query
export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        type
      }
    }
  }
`
```

## GraphQL: SQL-like data queries

One thing I particularly love about Gatsby.js is its inclusion of [GraphQL](http://graphql.org/ "A query language for your API"), with which you can query your data, whether from Wordpress API, Contentful or Markdown, and extract a dataset to display in your template.

This approach to data is really adaptable. I love the fact that you can install a module and query your API endpoints with such ease. 

Gatsby.js comes with GraphiQL, which is a simple web-based IDE so you can query your data and get back examples of content immediately. You can then copy this query into your React module and get back the information you need, whether it's the title, content, featured image, categories or any other frontmatter you might have set up.

```js
export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        type
      }
    }
  }`
```

Aside from those pesky ticks, I think this is a great tool, and has sped up my development a significant amount.

## CSS in JS

This is the thing that I found hardest about React. I've tried 3 methods so far, and don't really love any of them.

However, since I'm managing my HTML with JavaScript, why not CSS as well? As above, having everything in one place simplifies the workflow and allows you to focus on context without having to grok SCSS again, reducing mental friction.


## The Way Forward?

My initial concerns around using a JavaScript framework such as React seem to have all been allayed. With server-side React we no longer have a dependency on frontend JavaScript, so progressive enhancement is not just a possibility but a standard. There's momentum in arguments towards accessibility, and for me as a developer, the tools are there (such as Babel, Chrome Dev Tools React extension and others) for a faster, more efficient development experience.

I'm glad to say I'm sold on the idea and methods of developing with JavaScript, and React in particular. The site I've re-built from Wordpress into Gatsby.js will be going live in the next few weeks.