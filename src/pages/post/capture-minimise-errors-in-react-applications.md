---
categories:
- development
date: "2019-03-15T11:21:21+01:00"
description: If we we've spent any time developing, specifically with JavaScript,
  we've seen the White Screen of Death. Nothing renders to the screen, and the only
  way of investigating the issue we caused is by opening the console and looking at
  the stack trace.
draft: false
tags:
- react
- netmag articles
title: 'Published Article: Capture and Minimise Errors in your React Applications'
---
We've all done it. Whether it's by forgetting to close a function, misspelling a variable or just plain old doing it wrong...

If we we've spent any time developing, specifically with JavaScript, we've seen the White Screen of Death. Nothing renders to the screen, and the only way of investigating the issue we caused is by opening the console and looking at the stack trace.

But what if that error occurs in production? On someone elses' machine? If this is happening (chances are it is) you might be losing a large segment of potential customers (How many? Nobody knows!), not to mention the fact that you have absolutely no visibility about the nature of the error, so debugging and fixing it becomes very difficult.

In this tutorial we're going to dive into React's `ErrorBoundary` API to see how it can be used effectively to (1) stop the app from crashing, (2) provide a fallback, and (3) capture data for analysis later.

This article was originally published in Net Magazine issue 316.

## Let's Get Started!

To save this tutorial from being too long, I've included the code for the above on GitHub at https://github.com/endymion1818/netmag-react-error-reporting. It's a basic create-react-app setup with axios hooked up to get some data from the Star Wars API. However, there's a deliberately placed issue in the `render()` method that's causing the app to crash.

To see this code in action, download or clone the repo. Open this directory in your terminal and install dependencies by running `npm i`.

You can run the app in development mode by typing `npm start`. It's time to take a closer look at what's happening here.

## Error Boundary API

The `ErrorBoundary` API allows us to create a component that wraps around our whole app, an individual component or both. Then, if anything in that component fails, we can define an error message - or a replacement UI component - to appear instead of our broken one.

We're going to create a new file, `FormErrorBoundary.js` and add some code there. This does the following:

1. Defines some `state` so that we can decide what to do if there is an exception
2. Use a built-in React function to set state if there is an error
3. Send the error message somewhere we can examine and track it

```js
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError(error) {
    return { hasError: true }
  }
  componentDidCatch(error, errorInfo) {
  }
  // continued below ...

```

Next, let's provide our fallback UI component:

```js

  // ... continued from above

  render() {
    const { children } = this.props

    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong with our app!</h2>
          <p>We're aware of the problem and we're working hard to fix it.</p>
          <p>In the meantime, you can reach us by phone or email.</p>
        </div>
      )
    }
    return children
  }
}

```

Now let's import that into our form, and wrap it around the rest of the component:
`
import ErrorBoundary from './ErrorBoundary'
`
Now if an exception occurs in that component, the visitor will see this message instead. You can trigger it on your machine easily by leaving a tag unclosed or doing something else you know would ordinarily break your app.

But, how do we capture what has caused our error so we can fix it?

## Grab, Bag and Tag

This is where a logging service comes in. Now, inside the `componentDidCatch()` method of our ErrorBoundary component, we can send the exception data to a 3rd party service.

For Enterprise level applications, I've enjoyed using Splunk. Splunk is built for more than error reporting and I've seen people use it as a conversion metric tool as well. Splunk's strength is in the vast volumes of data it can collect. It also allows you to visualise your data in charts so you can track trends and analyse data more easily.

However, for smaller applications Splunk might be a bit overkill. I've recently been introduced to Sentry, which offers a simpler set of tools that allow you to collect, categorise, monitor and track your issues.

[Sentry](https://sentry.io/for/javascript/) has a free tier for developers and is really easy to get started with.

## Error Reporting with Sentry

Now, let's assume that - even though you've tested your app thoroughly - you suspect there are errors happening in production. Or perhaps you want to find out for certain if there are any.

Let's add Sentry to this project.

```js
npm install @sentry/browser
```

This gets the Sentry package which we can now import into our ErrorBoundary, and initialise with our credentials to enable Sentry to recieve our errors:

```js
import * as Sentry from "@sentry/browser"

Sentry.init({
  dsn: "your-dsn-here"
})
```

Update the `componentDidCatch()` function with the following:

```js
  componentDidCatch(error, errorInfo) {
    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key])
      })
      Sentry.captureException(error)
    })
  }
```

Now each time an error occurs, the data will be sent to Sentry, and you can even recieve an email alert!

## Let's see it In Action!

Are you ready to see what we've been doing? To do that, we need to build our application, and serve it somewhere - ideally your local computer. This step involves installing a local javaScript web server to your computer.

First, in your terminal, run `npm install --global sentry`. Next, from your project directory, run `npm build`. This builds the production-ready app. Now we can serve this folder locally by running `serve -s build`. Opening up a browser and typing **http://localhost:5000** and you should be able to see our beautiful error message!

Congratulations! You are no longer in the dark about your JavaScript errors. Now you can increase the usefulness of your app and improve your stability by not only providing a fallback state for your app, but also by reporting and squashing all of your remaining bugs.

---
## React Testing Caveats

Catching and reporting errors in the way described in this article does have one caveat: the `ErrorBoundary` API is only capable of capturing errors that happen in your app. So errors could occur before your app is loaded that aren't captured.

Sentry specifically mentions this in their document, stating that their error reporting tool should be initialised as soon as possible in your application.

On some projects this is harder to achieve than others without some serious hacking about. On projects with server-side-rendering I've been able to write the script into Helmet. That way, the error can be captured by using the `window.onerror` browser API instead of React's built-in API that we're discussing in the article:

```js
import * as Sentry from "@sentry/browser"
// ...
<Helmet
	    <script type="text/javascript">{`
        {
           Sentry.init({
  				dsn: "your-dsn-here"
			})
            window.onerror = Sentry.withScope(scope => {
      			Object.keys(errorInfo).forEach(key => {
        			scope.setExtra(key, errorInfo[key])
      			})
      			Sentry.captureException(error)
    		})
        }
    `}</script>
/>
```
--
## Beware of Non-Standard Error Reporting

It may not surprise you to know that the way browsers report errors differs across different rendering engines and implementations. Sometimes, the errorObject object isn't defined, so you'll likely get some errors that aren't that helpful. Most will show you a really helpful level of detail, down to the exact line of code where the error occurred. But don't expect the same level of reporting from every browser. This doesn't mean Internet Explorer either. Safari only recently introduced some better error reporting practices. There's a comprehensive table on Sentry's blog to identify the inconsistencies, as well as implementing a workaround: https://blog.sentry.io/2016/01/04/client-javascript-reporting-window-onerror.html#browser-compatibility

---
## Errors or Exceptions?

You may have heard situations whre your application fail termed `Exceptions` instead of errors. The reason for that is that they're not errors insofar as a problem with the language but instead exceptional results from the way that language has been used. This means the problem has originated with something that is not driven by by pure logic ... that means you or I. Therefore they are **exceptional** results from the way you have applied the language.
