---
categories:
  - development
date: "2018-07-25T08:21:21+01:00"
description:
  This is the reproduction of an article I wrote for Net Magazine and was
  published in Issue 308 (August 2018).
draft: false
tags:
  - serverless
  - gatsbyjs
  - wordpress
  - netmag articles
  - published articles
title: "Published Article: Using WordPress as a Headless CMS"
---

In case you missed it, here's the article and links to the example code I wrote to help developers get started with Gatsbyjs.

Code for this example: https://github.com/endymion1818/netmag-wpheadless

## You Will Need

- A computer with an internet connection (obvs)
- A code editor (Atom or VS Code)
- A command line shell / terminal
- A recent version of NodeJS installed (you can download & install from here: https://nodejs.org/en/)
- A WordPress site to get content from. If you don't have one, you can use the WordPress.com platform (wordpress.com) or this Heroku build pack: https://www.technomile.com/capabilities/application-development/heroku/wordpress

## Getting Started

**Using WordPress**

WordPress comes out-of-the box with the REST API, and that is what we're going to use to query your data. So we don't really need anything else! Our display site is totally separate from our content site, so we won't need a theme or any other customisation outside a few (optional) plugins.

The exception is if you need custom meta fields for extra content areas you're probably using Advanced Custom Fields to do so. You can add that data to the WordPress API buy installing this plugin: [https://en-gb.wordpress.org/plugins/acf-to-rest-api](https://en-gb.wordpress.org/plugins/acf-to-rest-api)

**Using a Static Site Generator**

Now that we have our content source, let's fetch the data and display it using a static site generator (**see the box "why use a static site generator"**). My weapon of choice in this realm is Gatsby (https://gatsbyjs.org), an excellent static site generator built with JavaScript.

If you're looking for a good way to build on your JavaScript skills, and learn React by getting stuck into some code, I highly recommend trying Gatsby to do so. I've learned a lot myself by playing with it.

First, let's install a command-line tool that allows us to create Gatsby sites:

`npm install -global gatsby-cli`

Now, navigate to the folder where you want to keep your site, and run this command:

`gatsby new blog`

This will create a new folder called 'blog' and install Gatsby and its dependencies to this folder. Open this folder in your favourite text editor. There might seem to be a lot of files there. Don't worry, we'll only be directly editing the `gatsby-config.js`, `gatsby-node.js` files, and the `src` folder, which is where our templates live.

---

<small>
### Why Headless?

I first heard about this approach from a talk I watched from Twin Cities Drupal (https://www.youtube.com/watch?v=GX9z5M9mz30). I liked the idea of a seperation of concerns between authoring content and viewing that content.

I had also already experienced how easily one server can go down, taking out all of the sites on it, leading to minutes or hours of heart-stopping panic (there were 24 hours on mine). I had also seen how a monolithic CMS-based site could suffer a security compromise and take a lot of effort to repair (that took me more than 2 days of unpaid work).

I had also seen the benefits of CDNs (content delivery networks) that can store your image, audio and video files on servers optimized for fast delivery, and can duplicate those files across the world for speedy delivery to those regions if needed. What if your entire website could benefit from this approach?

I gave a talk at WordCamp London 2018 about this subject, you can find the slides and more references here: https://wpheadless.indigotree.co.uk
</small>

---

## Getting our Content

The first step we want to take is to fetch our content from the WordPress site's API.

To do that, we're going to install `gatsby-source-wordpress`, a prewritten plugin for WordPress. This is one of the main reasons I love Gatsby - you can get your data from many different sources. A lot of static site generators are restricted to using Markdown files, but Gatsby is very flexible.

Gatsby's plugin ecosystem is very mature with loads of prewritten ways of getting your data, and lots of other functionality that comes in useful too.

To install the plugin, first change directory into your new Gatsby site by using this command: `cd blog`.

Now run this command: `npm install --save gatsby-source-wordpress`

Now open the `gatsby-config.js` file. There will already be some basic setup Gatsby gives us by default. We're going to add to that to configure our plugin here.

```js
module.exports = {
  siteMetadata: {
    title: "Gatsby Default Starter",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "my-wordpress-site.com",
        protocol: "https",
        hostingWPCOM: false,
        useACF: true,
        searchAndReplaceContentUrls: {
          sourceUrl: "https://my-wordpress-site.com",
          replacementUrl: "https://my-static-site.com",
        },
      },
    },
  ],
};
```

**Did it work?**

You can check by opening your terminal, typing `gatsby develop` and watch what happens. Be warned! Even if you got your settings correct, **You will get some warnings anyway,** this may be Gatsby looking for content which you haven't written yet.

If the last few lines looks something like this, you're probably OK:

```
You can now view gatsby-starter-default in the browser.

  http://localhost:8000/

View GraphiQL, an in-browser IDE, to explore your site's data and schema

  http://localhost:8000/___graphql

Note that the development build is not optimized.
To create a production build, use gatsby build
```

If that isn't what you're getting, check your WordPress site isn't on a subdomain, and that it's definitely using HTTPS or HTTP, and you have the same in your settings.

Now we can go to http://localhost:8000/ and see our Gatsby site!

![The Gatsby default starter screen.](/images/netmag-wpheadless-1-gatsby-starter.png "Gatsby works")

**Can We Query our Data?**

You may have noticed that there is no WordPress content here. This is because we haven't told Gatsby what to do with it yet. Before we do that, let's just check we have actually got our content available to GatsbyTo do that, visit this url:

http://localhost:8000/___graphql

This built-in tool is called GraphiQL, and is another secret power of Gatsby.

GraphQL is similar to REST : it's a way to query data. But with GraphQL, you can interact with your data much more easily. GraphiQL (a visual IDE for GraphQL) can show us some of these tricks. On the left panel, try typing the following:

```js
{
  allWordpressPost {
    edges {
      node {
        id
        slug
        status
        template
        format
      }
    }
  }
}
```

This might look a bit like JSON, but it's not. It's a new query language that I think one day will largely replace REST as a way of communicating with APIs.

What did you get when you pressed CTRL + Enter in GraphiQL? You hopefully will have seen your WordPress posts on the right site of the screen, something like this:

![Graphical GraphQL interface showing our posts that we have just queried.](/images/netmag-wpheadless-2-graphql-query.png "GraphQL interface")

We are actually going to use this query in our next step, so keep it handy! You might want to see what other data you can get with GraphiQL whilst you're here. If you want to do that, try moving the cursor around and typing either CTRL + Space and / or CTRL + Enter. That will reveal other groups of content.

So, we now have content in Gatsby. Next, we need to display it...

## Displaying our Posts

For this next step we're going to use the `gatsby-node.js` file.

`gatsby-node.js` is a file you can use to interact with Gatsby's "Node API". Here you can control how your site is generated and create pages, posts and more.

We're going to write some instructions here to tell Gatsby what to do with our data:

```js
const path = require(`path`);

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(
      `
        {
          allWordpressPost {
            edges {
              node {
                id
                slug
                status
                template
                format
              }
            }
          }
        }
      `
    ).then((result) => {
      if (result.errors) {
        console.log(result.errors);
        reject(result.errors);
      }

      const postTemplate = path.resolve(`./src/templates/post.js`);

      result.data.allWordpressPost.edges.forEach((edge) => {
        createPage({
          path: `/${edge.node.slug}/`,
          component: postTemplate,
          context: {
            id: edge.node.id,
          },
        });
      });
      resolve();
    });
  });
};
```

This code creates pages from our GraphQL query, and for each page it'll use a template we've defined (`/src/templates/post.js`). So next, we need to create that file!

**Create post template**

Inside the /src/ folder, create a folder called templates, and a file inside that called `post.js`. Add to it this code:

```js
import React from "react";
import Helmet from "react-helmet";

class postTemplate extends React.Component {
  render() {
    const post = this.props.data.wordpressPost;
    const slug = this.props.data.wordpressPost.slug;

    return (
      <div>
        <Helmet title={`${titleString} | ${siteTitle}`} />
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    );
  }
}

export default pageTemplate;

export const query = graphql`
  query currentPost($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      slug
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
```

This uses a different GraphQL query to get data about the specific post it's been fed by the `gatsby-node.js` file, then uses React to render that out into the browser.

If you want to quickly see a list of all your posts, you can type `http://localhost:8000/a` into your browser's address bar. This will take you to a development 404 page, which lists all of your posts. Click on one to visit it!

![Gatsby development 404 page showing all of our WordPress posts.](/images/netmag-wpheadless-3-gatsby-development-404.png "Gatsby JS logo")

## Next Steps

We've scratched the surface of how to use WordPress as a headless CMS, and I hope I've introduced you to some interesting concepts and tools that you might be able to use and experiment with in the future.

There's a lot more to this story, and my colleagues and I have blogged about it extensively at Indigo Tree - https://indigotree.co.uk/, and I've also written more on my personal blog, Delicious Reverie (https://deliciousreverie.co.uk/).

Please, keep in touch with me via those channels and on Twitter to hear more exciting developments in the world of headless CMS!

---

<small>
### Why use a Static Site Generator?

Traditionally, when a user visits a site, some code where the website lives kicks into action, getting data from a database, inserting it into templates, and stitches page pieces together before sending that code down to the user. This can take quite a bit of time.

A static site generator does all of this _before_ the user gets to the website. Because of this they can be a lot faster, and a lot less prone to security risks (because there's no code running behind the scenes on the server). They allow us to have a website with dynamic content (blog posts, pages, products, or any other class of content) which might need extra pages for archives, categories, and a way of making & saving drafts.

Static Sites can be hosted entirely on CDN services like Netlify (https://www.netlify.com/) that have generous free plans and take away the worry of managing servers.

I prefer Gatsby (https://www.gatsbyjs.org/) because of its' healthy plugin ecosystem, adaptable approach to data and because it uses React, my favourite JavaScript framework. In fact, I didn't _get_ why so many people loved React until I started working with Gatsby.

![Static site generator Gatsby is a really useful tool built on JavaScript and React.](/images/netmag-wpheadless-4-gatsbyjs.png "Gatsby JS logo")
</small>

---
