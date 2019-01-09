+++
date = "2019-01-09T15:21:21+01:00"
draft = false
title = "Published Article: Reusable Components with Atomic Design"
description = "Structuring components in a reusable, discoverable way is a challenge across teams with diverse requirements. It can be difficult for developers unfamiliar with your library. Id like to introduce the idea of Atomic Development using React and styled-components."
categories = [
  "development",
  "netmag articles"
]
tags = [
    "react",
    "atomic design"
]

+++
**Structuring components in a reusable, discoverable way is a challenge across teams with diverse requirements. It can be difficult for developers unfamiliar with your library. They need to learn quickly how adopt, use and discover, features it has. How do you help them do that without over-burdening your components with too much documentation? I'd like to introduce the idea of Atomic Development using React and styled-components.**

Atomic Design is an approach to development that Brad Frost came up with a few years ago. He's published an excellent book about it which you can buy, or read online at http://atomicdesign.bradfrost.com/

This post originally appeared in Net Magazine issue 314 under the title "Put Atomic Design into Practice"

## The Atomic Design Approach

Brad Frost's book outlined a way to structure the design of a project based on building things up from the smallest component part.

For example, this could be an input field. Input fields should never be used on their own. Instead, you would make sure for accessibility you have a label associated with it. In our analogy, the input field would be the Atom, and the atom and label together would be a Molecule.

You could keep building upwards in this way so that you eventually had a fully designed page using not only Atoms and Molecules, but also Organisms (for example, a complete form) and a Template which contained your complete form, and perhaps other Molecules.

## Atomic Development

On a recent project I decided to investigate whether this approach could be uilised in development. In my React project I typically use Styled Components to write my CSS styles. I therefore structured my project like this:

```
- components/
  - Atoms
  - Molecules/
  - Organisms/
  - Templates/
```

### Atoms

Atoms I designated as constants which could receive props. For example, a paragraph that had a prop for the text colour.

```js
export const Paragraph = styled.p`
    ${props =>  props.textColor ? `color: ${props.textColor};` : null }
  font-size: ${variable.REGULAR};
  margin-bottom: ${variable.SINGLE};
  & small { color: ${variable.BRAND_HILIGHT}; }
  }
`
```

### Molecules

Molecules consist of stateless functional components, often comprising of several Atomic elements and can contain some custom Atoms that relate to that specific Molecule.

In the example below, we have a "popout" section, which has a custom MainContainer element that's only used in this Molecule. It can accept multiple props and can wrap other components.

```JS
const PopOut = props => (
  <atom.Container>
    <Inner {...props} style={ props.background ? {backgroundImage : `url(${props.background})`}: null } >
    {props.children}
    </Inner>
  </atom.Container>
)

export default PopOut
```


### Organisms

As we get to organisms, we start to see larger elements, bringing in several Molecules and atoms, often with components that render on the frontend as well as server, and data that might come in from an external source.


### Templates

Templates are layouts for pages that are programmatically created from other data sources, such as the one I made below for a side project about my favourite musician:

```JS
const AlbumTemplate = ({ data }) => (
  <Layout>
    <Helmet>
        <title>{ data.title } | { data.site.siteMetadata.title }</title>
        <meta name="description" content={ data.about } />
    </Helmet>
    <atom.Container>
      <ColumnsTwo
        col1={{ imageUrl: data.coverimg }}
        col2={{
          heading: data.title,
          content:
           <>
            <atom.Paragraph>{data.about}</atom.Paragraph>
            <atom.SpotifyViewer dangerouslySetInnerHTML={{ __html:data.spotify }}/>
           </>
        }}  />
    </atom.Container>
    <atom.Band
      backgroundColor={variable.BRAND_SECONDARY} >
        <atom.HeadingSecondary textColor="white">
            Featured
        </atom.HeadingSecondary>
        <atom.Paragraph textColor="white">Recently voted by fans on the Mike Oldfield Facebook page as their favourite album of all time, Ommadawn is undoubtably Mike Oldfield at his best.</atom.Paragraph>
    </atom.BandSplit>
  </Layout>
)

export default AlbumTemplate
```
## Atomic at Zopa

Coincidentally, Gerard Brull, a colleague of mine at Zopa.com who works out of our office in Barcelona had also come across this idea. We discussed it as a team and decided to try to implement it in a future iteration of our shared component library.
We hope that it will help our team collaboration and assist the onboarding experience for newer developers that join us.

---
## Modularised Application Development

At Zopa we build apps and services that start small but often scale up to millions of users. Organizing our code in a way that's easy to maintain is something we must therefore take into careful consideration before we begin development.

Senior Developer Alexis Mangin has shared his experience of what could be the best approach when it comes to scalable applications which could have many component parts:

"Categorizing files based on what they represent is an easy way of partitioning your project and has became a popular practice with developers who use patterns such as MVC. In our experience, that’s okay when you work on small applications, but it can have a tremendous effect on the team’s velocity as the application grows. One way to avoid poor-planning headaches is to structure your codebase around the concept of modules, each with its own responsibility. Creating a module means you will group a set of related components, methods and assets together, providing a public interface to be used by other modules."

[Please see this post for the full article.](https://medium.com/@alexmngn/why-react-developers-should-modularize-their-applications-d26d381854c1)
