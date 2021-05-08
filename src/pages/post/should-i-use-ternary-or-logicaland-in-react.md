---
title: Should I use ternary or the logical and operator?
date: "2021-05-06T10:21:21+01:00"
description: "Templating with JSX in React is easy ... until it's not. Recently a colleague recommended I use the logical and operator instead of a ternary. However once we'd dug into it a little, we found these operators do very different things ..."
draft: false
categories:
  - development
tags:
  - javascript
  - react
---

**Templating with JSX in React is easy ... until it's not. Recently a colleague recommended I use the logical and operator instead of a ternary. However once we'd dug into it a little, we found these operators do very different things ...**

Quite often we follow this pattern for brevity, and there's good value doing it if there's only one variable at play:

```javascript
{
  isLoggedIn && <SomeComponent />;
}
```

This avoids us from having to write something like

```javascript
{
  isLoggedIn ? <SomeComponent /> : null;
}
```

which is totally redundant here, since if it's value is `false`, it won't return the component.

However, when there's a couple of things going on you might find it doing something unexpected:

```javascript
{
  formErrors.likesPotatoes ||
  formErrors.likesBananas ||
  formErrors.likesCake ? (
    <NotificationMessage icon="alert" status="error">
      <p>
        Please ensure that all the required questions have been answered before
        proceeding.
      </p>
    </NotificationMessage>
  ) : null;
}
```

is **not** equivalent to:

```javascript
{
  formErrors.likesPotatoes ||
    formErrors.likesBananas ||
    (formErrors.likesCake && (
      <NotificationMessage icon="alert" status="error">
        <p>
          Please ensure that all the required questions have been answered
          before proceeding.
        </p>
      </NotificationMessage>
    ));
}
```

With the ternary operator (`isTrue ? dothis : dothat`), our `<NotificationMessage/>` will show when _any_ of the conditions are met. The logical AND (`isTrue && dothat`) will only show the component if _all_ of the conditions are met.

Why?

## The Difference between the logical AND and ternaries

Ternaries work similar to the `if` operator. So it short circuits (closes off before any other variable is assessed), and returns true if any of the values are true.

On the other hand, the logical AND operator returns true [only if and only if all of its operands are true](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND "MDN docs for logical and operator").

In our case, when checking for form errors, we want to show a notification if _any_ of the fields have an error. So the ternary is the way to go.

## Alternative 1: abstract it

There is another way of handling this situation where you could use the logical AND: chain those errors in a variable before `return`ing the JSX:

```javascript
const hasError =
  formErrors.likesPotatoes || formErrors.likesBananas || formErrors.likesCake;
return (
  <>
    {hasError && (
      <NotificationMessage icon="alert" status="error">
        <p>
          Please ensure that all the required questions have been answered
          before proceeding.
        </p>
      </NotificationMessage>
    )}
  </>
);
```

## Alternative 2: Wrap it

My friend Warrick Hill mentioned that you could also wrap the options in brackets to ensure they get evaluated together and therefore don't short circuit. This is how mathematical bracket operators work, where everything inside the brackets gets evaluated first, for example `(2 * 3) + 2 = 8` but `2 \* (3 + 2) = 10`:

```javascript
return (
  <>
    {(formErrors.likesPotatoes ||
      formErrors.likesBananas ||
      formErrors.likesCake) && (
      <NotificationMessage icon="alert" status="error">
        <p>
          Please ensure that all the required questions have been answered
          before proceeding.
        </p>
      </NotificationMessage>
    )}
  </>
);
```

Although Warrick points out that this is harder to spot than the alternative #1 above.

## Thanks

Thanks to Aimable N and Chris Geary (as well as Warrick) for their help with this article.
