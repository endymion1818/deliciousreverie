---
categories:
  - development
date: "2019-08-22T14:21:21+01:00"
description:
  TypeScript. You either love it, or hate it ... or are terrified of it.
  But it could be a valuable tool that benefits your workflow. This article, originally
  published in Net magazine, shows you how to get started with TypeScript
draft: false
tags:
  - netmag articles
  - published articles
  - javascript
title: "Published Article: Getting Started with TypeScript"
---

Mention TypeScript to a developer who works with JavaScript and you'll probably get one of two responses: they will either struggle to understand why someone would NOT want to use TypeScript, or they will struggle to see why someone WOULD use it.

I think this sometimes depends on where you started your journey to JavaScript. Often people come to the language from a server-side language such as C or Java, which are statically typed. In these languages, dynamic typing is seen as a real hazard, an unsafe practice.

But if you've started your journey as a developer from HTML and CSS, you've probably been more used to the generally more ... dynamic ... world of the frontend.

If this is the case, but you hate the fact that your application is blowing up in production, and the cause is often a typeError, or you want to improve communication between developers working on a project, TypeScript can be a good solution.

In this article we're going to introduce some of the concepts of TypeScript using Styled Components. I've chosen this route because I think it gives us a good insight into how certain features can be used without introducing more complicated concepts too soon.

## Let's Get Started!

For this tutorial, we're going to take a react template that uses styled components and move it to TypeScript.

The original code we're going to use is here: https://codesandbox.io/s/netmag-react-typescript-4l4cj

Fork this code, and open on the **Container.js** module. We'll work through it together to convert it to TypeScript.

The project on CodeSandbox already has a compiler set up for TypeScript. So we can start by renaming our file. Instead of `.js` at the end, change it to `.tsx`.

Don't forget the x! This tells the compiler to use JSX, the templating language often used with React. If you didn't have an x at the end, you would start to see some very verbose errors very quickly.

Already, TypeScript is working for us. By forcing us to have an x at the end of the file, we can see that this module contains a JSX template. So it's easier to see at a glance what's going on in each file.

## What is an Interface?

TypeScript works by forcing us to tell it what properties are going into, and coming out of, our functions. Since styled components are functions, we have to type these as well.

Let's add our first interface!

```javascript
export interface ISContainerProps {}
```

Here we're declaring what will interface with our function. As a convention we should use a capital I at the start of the name so that we can more easily see later that it is an interface, instead of anything else (more about what else it could be in a bit ...)

Let's add our first property:

```javascript
export interface ISContainerProps {
  bgColor: string;
}
```

I've given `bgColor` the type "string" here. This means that it can only be a `string` value. If someone comes to use our component and writes `bgColor={42}`, they'll see a red underline, indicating an invalid type has been used! Usually this means a PR won't pass quality checks or you will be prevented from pushing code to a branch in the repo.

I want to restrict the use of the next property, text colour, a little more than that. I want them to have the choice between only black and gray text. Because of this, I'm going to rename `textColour` to `lighterText`:

```javascript
    lighterText?: boolean;
```

The question mark (`?`) tells the compiler that lighterText is an optional property. If nothing is declared, it'll be false by defaut. Within my styled component, I can output grey or black based on this boolean value:

```javascript
    color: ${props.lighterText => (props.lighterText ? `black` : `gray`)};
```

This can be shortened a little bit by some destructuring:

```javascript
    color: ${({ lighterText }) => (lighterText ? `black` : `gray`)};
```

## Introducing Enums: A Type of Types

For my final property, I want to introduce you to the humble `enum`. enums, I'm told by reliable sources (wikipedia), have been around for a while. Instead of a normal type, say a `boolean`, `string` or `number`, an `enum` is it's own type.

My `enum` is going to declare the container widths I want people to have access to:

```javascript
export enum EContainerWidth {
  SMALL = "36rem",
  MEDIUM = "48rem",
  LARGE = "64rem"
}
```

Can you see the name I've given the `enum` starts with a capital `E`? This is the equivalent of using a capital `I` for the interface.

Now I'm going to declare that my `containerWidth` property is a type of `EContainerWidth`:

```javascript
export interface ISContainerProps {
  bgColor: string;
  lighterText: boolean;
  containerWidth: EContainerWidth;
}
```

This makes sure someone can only use these values for the container width. In this way, how a developer uses this module can be controlled more tightly. So, no more accidentally setting the container width to something that doesn't match the design. It also helps a developer to stop and think more carefully about their choices.

So, now, how do I tell my styled component about my interface? By adding chevrons after the tag declaration, but before the body of the function (inside the backticks), and writing the name of my interface there:

```javascript
export interface ISContainerProps {
  containerWidth: EContainerWidth;
}

const SContainer =
  styled.div <
  ISContainerProps >
  `
    max-width: ${({ containerWidth }) => containerWidth}
`;
```

## Typing the Template

Now we need to tell the compiler what the type is for our JSX template. I'm using a React functional component (`FC`) for this project. The type for this can be imported directly from React at the top of our module:

```javascript
import { FC } from "react";

export const Container: FC = ({
```

Now we need to pass in our properties. They're the same as the ones we've used above, with one addition: the children, other react nodes we want to render inside the template.

```
export interface IContainerProps {}

export const Container: FC<IContainerProps> = ({
    ...
})
```

Interfaces can be re-used and extended by other interfaces. This is going to be particularly useful when it comes to our JSX template:

```javascript
export interface IContainerProps extends ISContainerProps {}
```

Now the template has the same types as our styled component. Now let's add the additional property. We mentioned that this was a React node, and that's another type we can import from react:

```javascript
import {FC, ReactNode} from 'react'

...

export interface IContainerProps extends ISContainerProps {
    children: ReactNode;
}
```

We are ready to use our template!

## Using the Template

We've declared an `enum` for our container width. We need other developers to have access to this when using our template.

Because we have already exported our `enum`, we can import it along with our component:

```javascript
import Container, { EContainerWidth } from "./Container";
```

I have a global file in my **src/** folder (usually I call it "tokens") where all of my project's enums are kept. This is much better for helping others discover what properties they have access to, and it's much easier to re-use them.

Now, instead of assigning properties to the template at will, every time you or another developer comes to use it, you or they will have reason to pause and make sure they're using it in the way it was intended:

```javascript
<Container
  bgColor="red"
  lighterText={true}
  containerWidth={EContainerWidth.MEDIUM}
>
  JavaScript Container
</Container>
```

If you got this far and followed along, congratulations on making your first TypeScript component!

<hr>

## Start Using TypeScript today

TypeScript is one of the fastest growing trends in JavaScript. Reinforcing types in your application can help you avoid making fatal errors in production, especially when working with teams of developers. By using TypeScript we can lean on our IDEs more and simplify our workflow, introduce self-documentation and better code hinting.

<div class="boxout">

## BOXOUT: What is TypeScript?

TypeScript was developed by Google specifically for the frontend framework AngularJS. It's not a separate language to JavaScript, but a superset, it adds to the existing language. You can write in normal JavaScript, but you add special syntax to identify types for functions, variables etc.

TypeScript needs to be compiled to normal JavaScript to be used on a browser. But this is an advantage: errors that are generated can be caught and mitigated before anything goes into production.

</div>
<br/><br/>
<div class="boxout">

## BOXOUT: Static vs Dynamic Typing

One of the most powerful features of any programming language is the ability to store things in allocated memory, often called a variable, the value of which can be updated or changed by the program.

```javascript
// define a variable
var a = 1;

console.log(a); // 1

// define a function which will change it's value
function updateAVariable() {
  a = "a is now a string";
}

// call the function
updateAVariable();

console.log(a); // "a is now a string"
```

This demonstrates how powerful JavaScript's dynamic typing is. The variable a can be anything: a string of letters, a number, whatever you want.

The problem with that is it can easily break stuff:

```javascript
function addOneToA() {
  a = a + 1;
}
addOneToA();

console.log(a);

// 'a is now a string1'
```

By contrast, static typing means that you'll only use one type of thing, and if that changes, you will know about it before you even run the code:

```javascript
var a: number = 1;

function updateAVariable() {
  a = "a is now a string";
  // typeError!
}
```

Imagine our variable comes from another location, which is written or controlled by another team. Imagine that variable, somehow and without your knowledge, starts returning a string instead of a number.

In that case, we now have a failure in the application. It could be crashing in production. The only way to check it might be to manually go through the checkout process, add something to your cart and try to purchase an item.

Instead, your code editor, terminal or CI tool lets you know, potentially before even running the code that there could be the possibility of a failure like this in your application.

That's one reason why I like using Typescript: my code editor tells me where I've made a mistake, and it won't let me push code to my Git repo unless some TypeScript rules I've given it are followed.

</div>
<br/><br/>
<div class="boxout">

## BOXOUT: Resources

There are some great resources for TypeScript out there, and they're growing as more people write about their experience with the language. Here are some places to start:

- https://www.typescriptlang.org/
- https://definitelytyped.org/guides/best-practices.html
- https://github.com/dzharii/awesome-typescript

The main problem I have with TypeScript is that people writing about it assume you've got good conceptual programming understanding to begin with, so it's hard to pick up for newer developers.

If you want a good beginner level course on TypeScript, I can really recommend this one by Scott Tolinski. Scott is great at explaining things simply and clearly without assuming too much:

https://www.leveluptutorials.com/tutorials/level-1-typescript

</div>
