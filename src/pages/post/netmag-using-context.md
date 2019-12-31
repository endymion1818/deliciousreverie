+++
date = "2019-04-08T14:21:21+01:00"
draft = false
title = "Published Article: Better Performance with the React Context API"
description = "Build for complexity and performance in this deep dive into React's Context API. This article was originally published in Net Magazine."
categories = [
  "development"
]
tags = [
    "performance",
   "netmag articles",
   "javascript"
]

+++

**People are demanding more and more out of their online services, and businesses strive to excel these demands, leading to more and more complex sites ... and larger JavaScript bundles too!**

How can we continue to deliver a first-class experience for users whilst still building for these levels of complexity? One good way of doing this - whilst at the same time as delivering more performant apps - is by using React's Context API.

This article was first published in Net Magazine. However, the Context API has been updated since. Please visit the React docs for a more up to date version of how to use Context.

## What is Context and Why Use It?

Sharing data and other properties across multiple React components previously required either an additional library (popular ones include Redux or Apollo GraphQL) or a lot of "prop drilling". "Prop drilling" means passing data up and down multiple layers of components which could be labourious, difficult to change when new requirements are built, and lead to confusing code. The Context API, released in React 16.3, aims to reduce our dependency on prop drilling and external libraries.

Apps can perform faster because changes made to properties no longer require a huge amount of re-rendering on a parent component, since the changes can be made in a separate component and handed down to child components from there.

## How to Use Context

I have set up a demo of Context in use on Code Sandbox: https://codesandbox.io/s/0pl62xq030. Let's walk through this  code.

Context consists of 2 components:

1. A "Provider"
2. A "Consumer"

The easiesy way I can think of explaining this relationship is that the "Consumer" is what will be using features "Provided" by our Context.

### Initial Setup

Create a new module called "Context.js" adding the following code:

```js
import React from "react";

export const MyContext = React.createContext();
export const MyContextConsumer = MyContext.Consumer;

export default class myContextProvider extends React.Component {
  state = {
    aRangeofOptions: ["one", "two", "three"],
    updatesOnClick: null
  };
  render() {
    const { children } = this.props;
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          onItemSelect: item => {
            this.setState({
              updatesOnClick: item
            });
          }
        }}
      >
        {children}
      </MyContext.Provider>
    );
  }
}
```
You might be able to see that on lines 2 & 3, we're calling on our core library, React, not some external dependency. That's the first benefit already!

I like to set up the `Consumer` in this file, even though we don't use it here. It helps me keep track of the logic when it's all in one place.

Inside our `class` I've set up a few items in state to demonstrate what's going on here.

Next, create a module containing a few items the user can interact with:

```js
import React from "react";
import { MyContextConsumer } from "./Context";

export default class Module1 extends React.Component {
  render() {
    return (
      <div>
        <hr />
        <h2>Data Originates in this module</h2>
        <MyContextConsumer>
          {context => (
            <div>
              {context.state.aRangeofOptions.map((item, index) => (
                <>
                  {item}
                  <input
                    type="radio"
                    name="selection"
                    key={item.Optionvalue}
                    onClick={() => context.state.onItemSelect(item)}
                  />
                </>
              ))}
              <div style={{ margin: "20px 0" }}>
                selected: {context.state.updatesOnClick || "none"}
              </div>
            </div>
          )}
        </MyContextConsumer>
      </div>
    );
  }
}
```

In this component, we can loop over an array in our `context.state` to create a few checkboxes, and a text description of the output.

In the next module we're basically going to duplicate this code but leave out the loop. This module is so we can demonstrate how context can be passed down.

Next we can create our main app.js file, or index.js if you like:

```js
import React from "react";
import ReactDOM from "react-dom";

import MyContextProvider from "./Context";
import Module1 from "./Module1";
import Module2 from "./Module2";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <MyContextProvider>
        <h1>Hello Context</h1>
        <Module1 />
        <Module2 />
      </MyContextProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

As you can see, the two modules we've created don't have any props passed down from the parent. Instead you get this functionality with the Context provider and children inside that.

But wait! There's more we can do to boost performance here.


---
## Boxout: Analyse Performance with React Developer Tools

React Developer Tools, an extension available on both Firefox and Chrome browsers, is a tool provided by Facebook to help debug your React apps.

It can also be pretty helpful at identifying where re-renders are happening in your app, allowing you the opportunity to refactor the code if you think it's necessary.

To find out where re-renders are occuring in your app, open the developer tools. Along the top of the pane you should see a number of options, including "Elements", "console" and other tools you've probably used before. Once you've installed the React Developer Tools you should see a new item labeled "React" Near the far end of this list.

If you click on the cog icon, you'll see some additional settings, including "Hilight Updates".

Try interacting with your site when "Hilight Updates" is ticked. You might be surprised at how much re-rendering is happening, slowing down the experience for users and having a negative impact on your conversions.

Now you know where to start fixing the problem!


---


## Boxout: Reducing Re-rendering

First of all, let's explain that term. Re-rensweing is what happens when the component you're using is updated. This has performance implications especially for interactions like dragging (think sliders), and inputting text. Without proper care users could notice lagginess and be put off from using your site. And the potential for laggy or unresponsiveness increases with complexity (because more re-rendering will happen).

I have found this to be especially true on devices that aren't the most expensive on the market. JavaScript parsing times can increase horiffically on low- and mid-range devices that don't run recent versions of Chrome or Firefox. A huge group of people could be impacted, severely affecting your conversions.

One way I've been able to reduce re-renders if by using my context's state to hold functions as well.

By moving `onItemSelect` out of the class and into the state object, we can call it in a similar way (`context.onItemSelect` becomes `context.state.onItemSelect` in our modules), and avoid a component update.

## Try Using Context Today

Have you found yourself writing `props={props}` all over the place, or using the spread operator to pass props down anonymously (like this: `<MyModule {...props}/>`)? Then perhaps Context is a way out of the hole you could have drilled yourself into.

If you're looking for a way to reduce the potential for complexity in a project, or reduce performance bottlenecks and you don't need the extra features that a dedicated state management tool or client-side GraphQL server would provide, chances are Context could equally be your tool for the job.

Context isn't going to fit everyone's use case, nor was it meant to. But it is a  very useful API with some practical features that you might find give your code a little more ... well, context.

Check out the working code on CodeSandbox: https://codesandbox.io/s/0pl62xq030

---

# Resources
You can learn more about how to use the Context API by using the following resources:

## Official Documentation
The official React documentation is a great place to start especially if you want to understand new APIs like Context, because they're written so well and shows real world examples that are easy to follow.

## Courses & Blog posts
I used these docs to get started using Context, as well as Flavio Copes' guide to the Context API (https://flaviocopes.com/react-context-api/) and Kent C Dodds' course "Advanced React Component Patterns" on egghead.io (https://egghead.io/courses/advanced-react-component-patterns).

Those resources are great. But there's nothing like diving in and trying it for yourself. It'll be challenging to begin with but that's the best way to learn! I freely admit to getting frustrated, writing poor implementations, and having to start over many times before I understood Context well enough to use it in a project. But if you give up, you only have to come back to it one more time ... until you finally crack it!

To do that, you could use two fantastic resources that have recently become available:

## Codesandbox
Codesandbox (codesandbox.io) is an online editor for creating apps in many languages, with built-in support for React. It's like codesandbox but with support for javascript modules

## Spectrum.chat
[Spectrum.chat](Spectrum.chat), built by the creator of styled-components and recently acquired by GitHub, is rapidly becoming a lively community. I've found it a great place to share ideas, ask for help and chat about the latest developments in JavaScript, React and other tools I use every day. Hope to see you there!

---
