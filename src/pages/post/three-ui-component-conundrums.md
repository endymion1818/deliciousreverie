---
title: Three UI Component Conundrums
date: "2020-10-30T15:21:21+01:00"
description: "I really like using React with Styled Components for building effective user interfaces. However I have recently come across three conundrums to solve."
draft: false
tags:
  - javascript
  - computer science
categories:
  - development
---

**React combined with Styled Components is a flexible and maintainable way of composing reusable user interfaces for the web. However, every set of tools has as well as awesome features, a few tricky problems to solve. Here are three that I've come across recently.**

## Some conundrums

### 1. CSS inheritance: The conundrum

The first issue concerns encapsulation. Broadly speaking, the main differing opinions on this argue that the results of your functions should be bound to that function only, and not have any effect on anything outside that variable (this is _encapsulation_), versus the idea that it's OK for things to _inherit_, or to have an effect that carries on across multiple functions.

I'm weighing into this discussion on a different level to most. In this post, I'm not talking about encapsulation and inheritance as it pertains to object-oriented programming, although the principles are the same. I'm chiefly interested in UI components, and here I'm going to talk about these principles and how they've impacted my recent work.

The basic tenet of CSS assumes inheritance. It's in the name: _Cascading_ Style Sheets. If you started your web development career from this angle, then you're probably quite used to seeing things like:

```css
div {
  color: lightblue;
  background-color: green;
}
div.banner {
  color: green;
}
```

The `div` with the class `banner` will _inherit_ the `background-color` from the first `div`. This is a normal way of writing CSS ... _if_ you've had a certain type of introduction to CSS.

At work, I'm using an internal library of components written in Styled Components. This has some really distinct advantages: it's very simple for developers to keep within the brand guidelines, and even very basic elements are _encapsulated_, that is, they can be composed together without any unexpected side effects.

But this has also led us into some complications... here's the conundrum and solution for two of them:

Here's a real-world example in React using the CSS-in-JS library Styled Components:

```javascript
// declared in an external library
const Text = styled.p`
    color: lightblue;
`

// declared in an external library
const Card = ({ children }) => (
    <SCard>
        <Text as="p" color={default}>{children}</Text>
    </SCard>
)

// my override
const SCard = styled(Card)`
    p {
        color: green;
    }
`
```

In this example, no inheritance will occur, because the style applied directly to `<Text/>` has higher priority than the `color` declaration on `<SCard/>`.

So, how do I make the text in `<SCard/>` the colour I need it to be? At this point, I have to either set the API of the `<Text/>` component to recieve a `color` property (if you have access to that, which I didn't), or override the colour in `<SCard/>` using an `!important` declaration.

### 1: CSS inheritance: The solution

In this instance, our solution was to change the API of `<Text />` so that by default the colour was `inherit`. This made it possible for both approaches: inheritance where necessary using CSS, or by adding a colour directly to the Text component using it's `color` property.

### 2: Large pages: the conundrum

I'm not sure what the average number of DOM elements on a page is. We have some pages that have a lot of elements, around 1,100. Just about every element is a separate `React.Component`, and due to design variation, we extend a lot of them in a similar way to this:

```javascript
import Card from "component-library";

const SCard = styled(Card)`
  background: lightblue;
`;
```

This seems to wrap the component in a `React.Context` that serves to keep track of the original component ... after all, if the _original_ component changes, how will we know to update this extended component?

On the pages where there are a lot of these extended components, we are seeing a significant drop in performance. I'm assuming it's because of the extra dependencies involved (1. the original component, 2. the `React.Context` wrapper, 3. the new component).

### 2: Large pages: the solution(s)

We haven't solved this yet, but I found it particularly interesting that there was a significant drop in performance, proving to be a noticeable factor in how many conversions we see from those pages when compared to a previous iteration of the application.

I can think of a few options:

1. Switch to a css-in-js solution with lower (or zero) runtime, like Linaria
2. Keep Styled Components but export CSS strings alongside the components so that we can extend them using CSS only (in most, the components' APIs don't change significantly)
3. Rationalise the design so that it uses styles that already exist in the library

What would you choose?

### 3: Markdown content: the conundrum

This one is related to the above, but we are also using these components in Markdown content we pull in from our CMS. So for each `<p>` tag that's generated from the Markdown, we use our libraries' `<Text />` component.

This hasn't been an issue yet, but I can see one day we're going to have an extremely long page of content that uses many elements that also impacts page performance.

### 3: Markdown content: the possible solution(s)

We're probably going to have to use one of the 3 solutions in the previous conundrum to solve this one too.

## Conclusion

I have tremendous confidence in css-in-js, and believe if you're using React, Styled Components is a great, broadly performant solution that gets most people where they need to be.

However, it has to be noted that there is a runtime overhead that increases with every component you extend.

I am interested to see if there's a way of compiling all components at build time and avoiding that `React.Context` link, since in our case we don't expect the original components to change after that.

And I'm interested to see whether other solutions, like Linaria, can provide a solution we can utilise in the future.
