---
categories:
- development
date: "2020-02-25T11:21:21+01:00"
description: "Want production-ready code without going to production first? This article shows how it's possible with React Testing Library. This article was originally published in Net Magazine."
draft: false
tags:
- performance
- netmag articles
- javascript
- published articles
title: 'Published Article: Unit Test your React apps'
---

**Do you really know what your code does what it is supposed to do? Have you tested it in the browser? What if you haven't, or you can't test everything, and it breaks in production?**

A testing library is a group of utilties that developers use to write individual tests on our application components. Some of the principle parts of a test are:

-   Description: describe what the test is about
-   Use / Render: uses the component in an environment where it can be tested
-   Mocking: create pretend functions, so that you can check your assumptions

In this article I'm going to show some examples from React Testing Library to help you get started with this valuable way of improving the robustness of your code output.

## Getting Started with React Testing Library

I'm going to use create-react-app for this demo, because it already comes preconfigured with the testing library. If you're using Gatsby or a custom setup, there might be some configuration you need to run through before you start using the testing library.

To start let's create a new app. If you have a recent version of Node.js already, you can run the following command without installing anything else globally:
```
npx create-react-app netmag-javascript-testing
```
Now open the folder in your code editor. 

Create-react-app is great because you can already run yarn test and see that one test is already passing. This command will also keep watching for file changes, so you can see straight away whether or not the tests you write are passing.

Let's start writing some tests!

## What to Test

Imagine we have a simple component, say a button with some state. What are some of the things that need testing in a component like this?

1.  The appearance of the component

We don't want anything to change unexpectedly after we've written our component. So we're going to write a *snapshot* test to capture how it renders. Then, if anything changes we will see it quickly, without a manual or visual test. This is great for components that consist of many smaller components: you can see quickly when (and where) it's appearance has been affected.

1.  The different *branches* that render

Because we could have 2 or more different outputs, we need to test that it's rendering all of them correctly, not just one. So we need to simulate a click event and have another snapshot test for the way it renders after this *branch* of code has been run.

1.  That functions get called as expected

We want to ensure that the code we wrote to call another function works as we assume it will. But since that function is an *external dependency*, we don't want to test that here. Our tests should encapsulate only the functionality we want them to.

## Writing our First Test

Let's write our first test. Create a new file called **MyComponent.unit.test.js** in the same folder as the component. By adding **test.js** at the end, it'll be automatically picked by the testing library. The contents of that file are below:
```
import React from 'react'

import { render } from '@testing-library/react'

import MyComponent from './MyComponent'

describe('the <MyComponent />', () => {

    // tests go here

})
```
The first thing I want to draw your attention to is the describe() function, which takes 2 arguments: the first is a string that you can use to better *describe* as a string of text what your test is going to be doing. In our case we've said simply that it should render. This is very useful when someone else looks at your code, or you have to remember what you did at a later stage. Writing good "describe" statements is a form of code documentation, and another good reason for writing tests!

The second argument are your tests. The `describe()` function will run all of these tests one after the other.

## Cleanups

Let's introduce helper function called `beforeEach()`. We need to use this because each time we do something with the component, we want a fresh copy without the props we previously had passed to it still existing in the component. Or we might need to re-render the component. `beforeEach()` does that for us, and we can pass it the cleanup function: 
```
import { render, cleanup } from '@testing-library/react'

...

describe('the component should render', () => {

  beforeEach(cleanup)

 }
```
## Writing a Snapshot Test

In this step, we're going to "mount" our component (or render it).
```
describe('the component should render', () => {

  beforeEach(cleanup)

  it('renders with basic props', () => {

    render(<MyComponent />)

  })

}
```
This render gives us access to all of the rendered properties of the compiled component. It might be good to drop this into a `console.log()` so you can see more clearly what it does.

If you do, you'll see that there's a few useful properties we can take advantage of here. I'm going to make an assertion (make a testable declaration) and test it by extracting the container. The container "contains" the DOM nodes (all of the HTML) associated with the component.
```
it('renders with basic props', () => {

    const { container } = render(<MyComponent />)

})
```
Now we have access to the container, how do I tell that it's rendered according to my assertion? By adding a *snapshot* test.

A *snapshot* is like a photograph. It takes a snapshot of our component at a specific point in time. Then, whenever we make alterations to the code, we can see if it still matches the original snapshot. If it does, we can be confident that nothing has changed in the component.

However, if it doesn't we might have uncovered an issue that originated in another component, one that we might not have spotted previously:
```
  it('renders with basic props', () => {

    const { container } = render(<MyComponent />

    expect(container).toMatchSnapshot()

  )
```
## Testing Properties

Props, or properties, of a component can be tested with snapshots too. Testing the different props you provide to your component will give you greater coverage and confidence ... you never know when a requirement is going to mean your component's props are refactored and the final output will change:

Add this object to the top of your file:
```
const lightProperties = {

    backgroundColour: 'white',

    textColour: 'darkblue'

}
```
We define the properties in an object and then use the spread operator (three dots followed by the object name, `...lightproperties`) in this way because we can only pass one argument in when we render in this way. It's also useful to see what properties you're passing in isolation:
```
    it('renders with basic props', () => {

        const { container } = render(<MyComponent />

      )

     expect(container).toMatchSnapshot()

    })

    it('renders with the light version props', () => {

        const { container } = render(

            <MyComponent { ...lightProperties } />

        )

        expect(container).toMatchSnapshot()

    })
```
## Testing Changes in the UI

Imagine that our component has a button, and you want to make sure that something happens when the button is clicked.

You might think that you want to test the state of the application, for example, you might be tempted to test that the state has updated. However, that's not the object of these tests.

This introduces us to an important concept in using a testing library: we're not here to test the state, or the way our component works. We're here to test how people are going to *use* the component, and that it meets their expectations.

So whether or not the state has updated is immaterial; what we want to test is what the *outcome* of that button press is.

Let's imagine we're testing the outcome of a function that changes the UI from dark mode to light mode. Here's the component:
```
const modeToggle = () => {

    const [mode, setMode] = useState['light']

   const toggleTheme = () => {

     if (theme === 'light') {

       setTheme('dark')

     } else {

       setTheme('light')

     }

   }

    return (

        <ToggleButton data-testid="mode-toggle" lightMode={mode} onClick={toggleMode}>

          Toggle mode

        </ToggleButton>

    )

}
```
First, we should add a test id onto the button so that we can find it in the render phase:
```
return (

    <ToggleButton 

      data-testid="mode-toggle" 

      lightMode={mode} 

      onClick={toggleMode}

     >

      Toggle mode

    </ToggleButton>

)
```
Did you notice we added the new attribute `data-testid` to the button? Here's how you might test that.

First, import a new function, `fireEvent` from the testing library:
```
import { cleanup, 

          fireEvent, 

          render 

} from '@testing-library/react'
```
Now we can use that function to test that there are changes in the UI, and that those changes are consistent:
```
it('renders with basic props', () => {

    const { container } = render(<ToggleButton />

  )

 expect(container).toMatchSnapshot()

})

it('renders the light UI on click', () => {

    const { container, getByTestId } = render(<ToggleButton />)

    fireEvent.click(getByTestId('mode-toggle'))

    expect(container).toMatchSnapshot()

})
```
This is great, we don't have to manually go to the site and look around, then click the button and look around a second time, which you might admit, you'll likely forget or miss something! Now we can have confidence that, given the same input, we can expect the same output in our component.

### A Note about Test IDs

Personally, I dislike using data-testid to find something in the DOM. After all, the object of tests is to mimic what the user is doing, and to test what happens when they do. data-testid feels like a bit of a cheat -- although data-testids will likely come in handy for your QA Engineer (see the box "The Role of Quality Assurance Engineers").

Instead we could use getByText() and pass in the text of our button. That would be a lot more behaviour specific.

## Mocking and Spying

Sometimes we need to test a call to a function, but that function is outside the scope of the test. For example, I have a separate module that contains a function that calculates the value of pi to a certain number of decimals.

I don't need to test what the result of that module is. I need to test that my function does as expected. For more information about why this is, please see the box "unit and integration tests". In this case, we could "mock" that function:
```
const getPiValue = jest.fn()

it('calls the function on click', () => {

    const { container, getByTestId } = render(<ToggleButton />)

    fireEvent.click(getByTestId('mode-toggle'))

    expect(getPiValue).toHaveBeenCalledTimes(1)

  )

})
```
`toHaveBeenCalledTimes()` is one of the many helper functions in the testing library that allow us to test the output of functions. This allows us not only to scope our tests only to the module we want to test, but also allow us to "spy" on, or see what our function does when it calls that function.

## Start Testing your React Applications Today

Writing tests can seem a little daunting to start with. I hope this tutorial has given you a little more confidence to try it. Since I started writing tests for my applications, I really can't go back: I can rest easier, knowing I'm leaving behind a much better legacy for those who will use my work in the future.

For more ideas about how to test your components take a look at one of the links below:

-   https://react-testing-examples.com
-   https://testing-library.com/docs/react-testing-library/intro

If you're looking for some courses to help you get started, the one by Kent C Dodds (who wrote and maintains React Testing Library) is popular:

https://testingjavascript.com/

I also enjoyed this one on Level Up Tutorials, it's the one that got me started writing tests for my code: 

https://www.leveluptutorials.com/tutorials/react-testing-for-beginners

<div class="boxout">

## Boxout: Unit and Integration Tests

There are generally two types of tests we talk about in the context of code tests:

### Unit Testing

This is to test the *units* of code, or each module *in isolation*. They shouldn't call other modules in your project, instead you should mock these modules so that the unit test is able to run.

### Integration Testing

When two or more modules are used in conjunction, then it's a good practice to write an *integration test*. These test how modules work together. Well written integration tests can identify issues when you're using modules as part of a larger piece of work.

These are the two kinds of tests that developers are usually responsible for writing. There are other kinds of tests that QA Engineers write (see the box "The Role of Quality Assurance Engineers").

</div>
<br/><br/>
<div class="boxout">

## Boxout: What is Test Driven Development?

TDD, or test-driven development, is a testing discipline that forces you to think about edge cases when you're in the process of development.

You start out with a hypothesis that forms the basis for your tests. This could be something like "it renders a button", "it renders a button using the dark mode ui on click", then you go ahead and write your tests.

Only after you have at least 3 robust tests that you can use to verify what your component's behaviour should be, then you start coding the actual component.

I like this concept because it forces you to think about the structure of your component from completely different angles. You're not trying to preserve the code you already wrote, so you can find different ideas more easily.

Be careful though: you can write tests that will pass under any circumstances! For this reason, three or more tests are often required that allow you to "triangulate", or effectively define the functionality of your component, before you can start building it.

</div>
<br/><br/>
<div class="boxout">

## Boxout: The Role of Quality Assurance Engineers

Quality Assurance engineers are the secret superpower of web development. A good QA Engineer and a strong QA process can save development time, reduce issues in production, and have been known to save the reputation of entire development teams ... and the companies they work for!

QA Engineers have totally different mindset to developers: Developers naturally build against assumptions about how something should work, and can only test these assumptions. QAs on the other hand, challenge these assumptions, using every trick they can think of to try to break the code in some way.

This ensures that your customers aren't acting as your QAs, causing you to lose money and good will in a very public manner.

A dedicated Quality Assurance engineer will write an automated tests suite that check the expected functionality of the built application, predominantly on a staging domain, and end-to-end tests that check users can carry out goals that you expect them to achieve.

</div>