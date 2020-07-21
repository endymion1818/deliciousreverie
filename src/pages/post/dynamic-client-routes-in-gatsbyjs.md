---
date: "2020-07-18T15:21:21+01:00"
title: Dynamic client side routes in GatsbyJS
description: "Would you use GatsbyJS for a dynamic app? Yes I would. The reason is that I can make good use of Gatsby's great developer experience, as well as do everything I would normally do in a React application. Here's how I recently implemented dynamic routing."
categories:
  - development
tags:
  - javascript
  - gatsbyjs
draft: false
---

**Would you use GatsbyJS for a dynamic app? Yes I would. The reason is that I can make good use of Gatsby's great developer experience, as well as do everything I would normally do in a React application. Here's how I recently implemented dynamic routing.**

_Disclaimer: My colleage Romina Moya origianlly discovered that Gatsby could do this, and showed it to me afterwards._

I've been learning more about Amazon Web Services recently, and found an excellent tutorial written by the makers of Seed, a sort of CI pipeline for serverless applications. You can find the tutorial at https://serverless-stack.com.

I wanted to diverge from the tutorial a little on the frontend, especially since I really enjoy working with GatsbyJS and wanted to use it's static rendering where I could.

One of the lessons uses React Router to render routes for notes like this:

```
/notes/2074d6b0-c5d7-11ea-bd39-5f447bbc7b39
```

where the last part of the url (the "pathname") needs to be generated client-side only. The reason is that the component would resolve to any number of records in the database, and needs be accessible only to the logged-in user.

To achieve this in Gatsby I referred to their excellent documentation (https://www.gatsbyjs.org/docs/client-only-routes-and-user-authentication/), but I still felt that for me it wasn't all that clear, so here's some extra pointers that I thought might be useful:

## Setup

In my applications as in most Gatsby sites, I use a wrapping component that I name "layout" or "entry". If you don't have that, you could effectively do the same thing by adding a file in the root of your project named "gatsby-browser.js" and using the `onClientEntry()` api (https://www.gatsbyjs.org/docs/browser-apis/#onClientEntry).

In that file I needed to first `import { Router } from "@reach-router"`, and also `import { navigate } from "gatsby"` then in the `render` function add this:

```jsx
<Router>
  <BounceToHome default />
</Router>
```

The `BounceToHome` function is for any path the router comes across that isn't defined (as you can see from the `default` prop I passed to it). This is useful for if the user types anything That function uses `navigate()` that I imported earlier:

```js
const BounceToHome = () => {
  useEffect(() => {
    navigate("/", { replace: true });
  }, []);
  return null;
};
```

As you can see I use the `useEffect` hook to navigate the user home on the first render.

## Rendering client-only component

At the top of the file I've imported the functionality I already defined for rendering, editing and deleting notes:

```jsx
import Notes from "./Notes";
```

Now as a child of the Router component I'm going to add in my Notes component:

```jsx
<Notes path="/notes/:noteId/" component={Notes} />
```

The `path` tells Reach Router that I want to accept paths with a prefix "/notes", and the colon after that is a variable that will be passed to your component. It could be called anything you like, I thought `noteId` was the most relevant name for what I was building.

On the following line I've passed to the router which component I want to render on that path.

Now I can use that component in the page in this way:

```jsx
export default function Notes({noteId}) {
  useEffect(() => {
    function loadNote() {
      return get("notes", `/notes/${noteId}`, '');
    }
    async function onLoad() {
      try {
        const note = await loadNote();
        setContent(note.content);
        setNote(note);
      } catch (error) {
        onError(error);
      }
    }
    onLoad();
  }, [noteId]);
  return(
    ...
  )
}
```

Whenever the `noteId` changes the `useEffect` hook runs and `loadNote()` gets the note using functionality available in the **aws-amplify** package.

## Gatsby is ready for Apps!

If React is "just JavaScript", then Gatsby is "just a javascript framework", with all of the benefits that brings you, as well as some significant other things like better accessibility, static rendering, and loads of other cool stuff.

Let's not be too quick to pigeon-hole Gatsby into a certain corner: it's a versatile set of tools that allows us to jump start our projects and create any number of really cool things.
