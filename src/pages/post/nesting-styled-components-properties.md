---
title: "Working with styled components: multiple nested properties"
date: "2021-05-01T15:21:21+01:00"
description: "Destructuring is a common pattern when it comes to using styled components in complex situations. But it can be hazardous to clearly identify nesting. Here are a few suggestions."
draft: false
categories:
  - development
tags:
  - css
  - styled components
---

I've seen this fairly frequently when it comes to using shared media queries. sometimes you want to set the width of an element based on one property, but you need to access the `theme` too.

```javascript
const StyledContainer = styled.div`
  ${(props) =>
    props.narrow
      ? css`
          @media (min-width: ${props.theme.desktopMin}) {
            max-width: 48rem;
          }
        `
      : css`
          @media (min-width: ${props.theme.desktopMin}) {
            max-width: 32rem;
          }
        `}
`;
```

You could destructure them like this however it can become difficult to read, particularly the position of the closing bracket, which becomes difficult to see with the template literal syntax:

```javascript
const StyledContainer = styled.div`
    ${({ narrow, theme })) => narrow ? css `
        @media (min-width: ${theme.desktopMin}) {
            max-width: 48rem;
        }
      ` : css `
          @media (min-width: ${theme.desktopMin}) {
              max-width: 32rem;
          }
      `
    }
`
```

I think it could be better _not_ to destructure. You could easily start to think about what would happen when you have nested ternaries, which in my time I have spent too long trying to unpick.
