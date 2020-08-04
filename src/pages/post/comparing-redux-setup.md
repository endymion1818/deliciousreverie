---
title: Comparing two redux setups
date: "2020-08-03T14:21:21+01:00"
description: I recently came across two different examples of setup that used Redux to manage state in a sample app. They were so different that I thought it was worth delving a little deeper into why, and how we can write Redux code so it's a good fit for our needs.
categories:
  - development
tags:
  - javascript
  - react
  - redux
draft: false
---

I recently came across two different examples of setup that used Redux to manage state in a sample app. They were so different that I thought it was worth delving a little deeper into why, and how we can write Redux code so it's a good fit for our needs.

## Minimum Viable Redux

Redux used to be pretty much the only way of managing state in React without "prop drilling" or mutating state (which means changing it so that the original state is lost) as you go. There are a bunch of different options now, but Redux is still in common use. However that use doesn't always have a common pattern. Take this example I found on a JSFiddle by Caner Dagli:

```jsx
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

function fetchPostsRequest() {
  return {
    type: "FETCH_REQUEST",
  };
}

function fetchPostsSuccess(payload) {
  return {
    type: "FETCH_SUCCESS",
    payload,
  };
}

function fetchPostsError() {
  return {
    type: "FETCH_ERROR",
  };
}

const reducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return state;
    case "FETCH_SUCCESS":
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};

function fetchPostsWithRedux() {
  return (dispatch) => {
    dispatch(fetchPostsRequest());
    return fetchPosts().then(([response, json]) => {
      if (response.status === 200) {
        dispatch(fetchPostsSuccess(json));
      } else {
        dispatch(fetchPostsError());
      }
    });
  };
}

function fetchPosts() {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  return fetch(URL, { method: "GET" }).then((response) =>
    Promise.all([response, response.json()])
  );
}

class App extends React.Component {
  componentDidMount() {
    this.props.fetchPostsWithRedux();
  }
  render() {
    return (
      <ul>
        {this.props.posts &&
          this.props.posts.map((post) => {
            return <li>{post.title}</li>;
          })}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

let Container = connect(mapStateToProps, { fetchPostsWithRedux })(App);

const store = createStore(reducer, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById("container")
);
```

I really think this example is great, it shows us how to write the most basic boilerplate code for a Redux store and how you might use it for a simple use case, one data type and a single action.

So does Redux require a lot of boilerplate code? Not in this example. However, if you want to be able to scale it to use different data types (think posts and users and tags and pages ...), the above code isn't going to scale.

## Redux at scale

Take a look at this example, it's a GatsbyJS starter but I hope you can still find your way around the code: https://github.com/Evaluates2/Gatsby-Starter-TypeScript-Redux-TDD-BDD

If you peek inside the **/src/** folder, you'll see another folder, **/state/**, with another 4 folders, **/actions/**, **/middlewares/**, **/reducers/** and **/types/**.

Just look inside the **/actions/** folder and you'll see four files. Two are tests, but there's an action for each data type (login and todos respectively). Similarly, there's a reduce for each data type, middleware for each type ... etc.

This code is built for extensibility. By compartmentalising code like this I can see that I will be able to add another type (like lists or pages or transactions) without having to make fundamental changes to how this project is set up. Smiliarly, if something changed in my todos, I can see more easily where I need to go to change something so that the app still renders in the way I expect it to.

I liked this example because it shows us a totally different way of writing Redux code. It helps us see the separate concerns we need to care about (reducers, actions, middleware even) if we are going to write a robust application that will be able to serve many product iterations over a longer period of time without major refactors.

I think these two approaches also teach us that Redux is a powerful suite of tools that help us manage state in our applications — and that it can be used in different ways depending on your desired approach.

But they also tell us something about software development: the fastest approach is great for some small project you're only going to touch once. But architecting an application that will withstand the test of time is a different game altogether.

That's the great thing about the way Redux is built: it doesn't get in the way of writing new code ... providing we start out in the right way!
