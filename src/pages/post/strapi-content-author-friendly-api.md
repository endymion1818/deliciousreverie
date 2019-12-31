---
categories:
- development
date: "2018-06-08T15:21:21+01:00"
description: I've worked in a few different capacities around the web, and can see
  the value of interfaces that those writing content for the web feel comfortable
  using. I'm also becoming more comfortable with JavaScript, and want to find alternatives
  to the PHP tools I've been using. On that journey, I discovered Strapi.
draft: true
tags:
- javascript
- tools
- apis
title: Content-Author friendly APIs with Strapi
---
**I've worked in a few different capacities around the web, and can see the value of interfaces that those writing content for the web feel comfortable using. I'm also becoming more comfortable with JavaScript, and want to find alternatives to the PHP tools I've been using. On that journey, I discovered Strapi.**

When I think of content authors, I'm specifically thinking about non-technical individuals who don't want to get involved in writing HTML. For these people, making or editing a Markdown file might be a disagreeable process. This is simply because they need to be in an envinronment that allows them to focus on their current task — writing an article, updating page content, publishing a job advert - without distraction. Or at least, with minimal distraction.

I am sure this is one reason WordPress has gained the community it has:- it's easy to use, and makes the content author feel informed and empowered without them feeling like the software is getting in the way.

The challenge for me has become to find some software - preferably open-source, definitely JavaScript - that can be a suitable environment for these kind of authors. 

And I think Strapi could be a very good fit indeed.

## How Strapi Works for Content Authors

The 3 main requirements I had when analysing this project for a content authors' perspective were:

- easy to write & edit posts
- easy to restrict and enable access and authorship
- content authors feel in control

I'm going to cover these in more detail below.

### Writing and Editing Posts

Logging in and authoring content in Strapi works very much like any other content platform. There's a left sidebar which you can use to navigate different types of content, and fields that you fill out that are clearly labeled, functional and give suitable feedback when you're filling them out, or saving posts, or just navigating around.

### Author Roles and Permissions

New authors can be defined by administrators, and access can be given to specific areas of the API.

This allows us a key feature that I've seen being particularly useful in larger applications: authors can write articles that can be reviewed before publication.

### Authors Feel In Control

The thing that I felt conflicted most about WordPress was that it gave too much control to authors. The ability to add plugins and change the site's appearance made it a minefield for a developer.

But WordPress made a deliberate choice to do that. WordPress' aim is to "democratise publishing" so that anyone can have a blog or personal website. 

There's always a balance to be struck here: too restrictive and authors will go elsewhere, too open and you end up with a mess of a site that can cost thousands to fix.

Strapi has a plugin ecosystem, which I hope will grow. Through their marketplace (which you can't miss, it's heavily promoted within the backend), you can add analytics tracking and other functionality, or purchase plugins which extend Strapi.

This allows content authors and business owners to feel more in control of their project. Having these plugins means they're not totally dependent on others when it comes to extending their Strapi site. 

It makes authors feel that the site belongs to _them_ and not their developer.

But, of course, it has to work for developers as well...

## How Strapi Works For Developers

For Strapi to work for those with a development background, I am looking for the following:

- easy API authorship
- extensible code
- ease of entry for newer developers

### API Authorship

API authorship can be done in 2 ways with Strapi. Either in the GUI or in the command line. This, I think, is a master stroke.

Independently-minded content authors can define or destroy their own content fields, and entire _types_ as they wish, in a GUI that gives them adequate feedback about what's happening.

``` 
Pic of Strapi backend
```
Conversely, APIs can be set by the developer in a JavaScript object, without having to interact with the GUI at all.

```
A Strapi API definition
```

This is really great. By not forcing us down a single route, Strapi gets the best of both worlds.

### Extensible Code

Calling to the strengths of a robust language that's well known, developers can modify Strapi to their hearts content, as long as they don't want to update the core. And if they do, they can also turn to authoring a plugin, and hook in to  Strapi in a way that separates our concerns out and allows us to write code in isolation.

As I cautioned above, this could lead to Strapi being mis-used, and result in bloated or insecure code. However, Strapi's major advantage in this is that it is an API first, and a content authoring platform second.

So whatever plugin authors do, they can never arbitratily affect the frontend of the website. Even if some malicious — or simply bad - code enters Strapi, rendering it unuseable, that needn't affect the frontend of the site at all, especially if it's a static site.

### Good For Newer Developers

Ultimately, developers are going to be the ones selling this product. We're the ones who hear about this new stuff and set expectations to decision makers about whether or not to use it.

So it has to be accessible to a broad base, including (in my view) newer developers.

I particularly frame this for newer developers not just to widen the catchment of a product but because it gives me a window into some other areas not directly related to the code: the helpfulness of the documentation, and a sense of community surrounding the project.

It seems like a lot of effort has been made by the Strapi team to get clearly written and easy-to-follow documentation into the places where it can be found:- not just on the website and GitHub repo, but on 3rd party sites, like Medium, too.

However, I have had difficulty with the documentation because it often refers to older versions of Strapi which are no longer maintained. I found this to be a bit of a minefield when I tried to initially use the Docker image that's available, and found the interface took me to the now-depracated Strapi Studio to create my APIs.

I then deployed to Heroku using the Strapi 1-click deploy, and spent literally days trying to either modify the API or clone the site locally. Admittedly, this was less to do with Strapi than complications with using Heroku. However, it was a roadblock that delayed my using Strapi in production until I can fix that.

To be fair, the community is very responsive and after joining the Slack channel I got answers to my questions very quickly.

## Strapi - A Project I hope will grow

Overall, I really believe the Strapi authors have done it right. It meets the needs of content authors and developers really well. Although the docs leave a little to be desired, the project itself is making good progress.

Personally, I can't wait to see what the future of Strapi means for content creation on the web.