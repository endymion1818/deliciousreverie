---
title: "Working with styled components: multiple properties"
date: "2021-01-02T15:21:21+01:00"
description: "Some tricks with styled components."
draft: false
categories:
  - development
tags:
  - css
  - styled components
---

This is a common pattern when it comes to using shared media queries. sometimes you want to set the width of an element based on one property, but you need to access the `theme` too.

After much trial and error with destructuring, which ended up being confusing and messy, my colleague and I settled on this solution: don't destructure the props.

```javascript
const StyledContainer = styled.div`
  ${(props) =>
    props.narrow
      ? css`
        @media (min-width: ${props.theme.desktopMin}) {
            max-width: 48rem;
        }
        }
    `
      : css`
          @media (min-width: ${props.theme.desktopMin}) {
            max-width: 32rem;
          }
        `}
`;
```

You could destructure them like this however it can become difficult to read:

```javascript
const StyledContainer = styled.div`
    ${({ narrow, theme })) => narrow ? css `
        @media (min-width: ${theme.desktopMin}) {
            max-width: 48rem;
        }
    }
    ` : css `
        @media (min-width: ${theme.desktopMin}) {
            max-width: 32rem;
        }
    `}
`
```

I think this could somehow be better. You could easily start to think about nested ternaries, which in my time I have spent too long trying to unpick.
