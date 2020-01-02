---
categories:
- development
date: "2018-10-04T14:21:21+01:00"
description: Structuring components in a reusable, discoverable way has been a challenge
  for some recent projects I've worked on. I've seen different approaches used, but
  now I think I've found a method that's basically intuitive, avoids duplication of
  effort and facilitates easy discovery of components.
draft: false
tags:
- javascript
- gatsbyjs
- react
title: Atomic Development
---

**Structuring components in a reusable, discoverable way has been a challenge for some recent projects I've worked on. I've seen different approaches used, but now I think I've found a method that's basically intuitive, avoids duplication of effort and facilitates easy discovery of components.**

I didn't come up with this approach. [Brad Frost published the book "Atomic Design" 2 years ago](http://bradfrost.com/blog/post/atomic-web-design/), and I was fascinated with his idea, that you break down your components to the smallest reusable unit, then build them up again piece by piece. Just as living organisms are made up of atoms, then molecules, then larger entities until you get the complete creature.

I tried this approach on a recent React project, and want to outline some of it's benefits. It's important to note that I don't believe it's 100% the best approach, since I don't think there is one. What I do want to show is where it's useful, where it isn't, and hopefully what those limitations are.

## The Atomic Design Approach

Brad Frost's book outlined a way to structure the design of a project based on building things up from the smallest component part.

For example, this could be an input field. Input fields are never used on their own, so the next item up the scale would be an input field and a label. This would be your atom and molecule respectively.

You could keep building upwards in this way so that you eventually had a fully designed page using a template which contained your complete form (an organism) which is made up of your separately designed molecules.

This approach could help designers think more about the patterns they are building into a project, instead of treating every item as separate compositions, which would then require a lot more work from the development team and time and money from the project owner.

But I believe we can utilise this approach in development so that there's more cross-functional collaboration between design and development. And it can also help developers structure their projects well.


## Atomic Development

On a recent project I decided to investigate whether this approach could be uilised in development. In my React project I typically use Styled Components to write my CSS styles. I therefore structured my project like this:

```
- components/
  - Atoms
  - Molecules/
  - Organisms/
  - Templates/
  - Pages/
```

### Atoms

Atoms I designated as constants which could receive props. For example, a paragraph that had a prop for the text colour.

```js
export const Paragraph = styled.p`
    ${props =>
      props.textColor
        ? `color: ${props.textColor};`
        : null }
  font-size: ${variable.REGULAR};
  margin-bottom: ${variable.SINGLE};
  & small {
    color: ${variable.BRAND_HILIGHT};
  }
  > a {
    ${props =>
      props.textColor
        ? `color: ${props.textColor};`
        : null }
    text-decoration: underline;
    &:hover,
    &:active,
    &:focus {
      color: ${variable.BRAND_HILIGHT};
    }
  }
`
```

I kept all of these in a single file because I initially believe there wouldn't be too many small components, and they were so tiny they didn't justify having a separate file for each.

I now believe that approach wasn't the best one. As I got further involved in development, and I had built up a larger library of components, I struggled to remember what I had designated as an Atom, and what was a Molecule. In future, I'm going to separate these components into individual files to facilitate easier discovery.


### Molecules

Molecules consist of stateless functional components, often comprising of several Atomic elements and usually some custom Atoms that relate to that specific Molecule.

This is a "popout" section, which has a custom MainContainer element that's only used in this Molecule. It can accept multiple props and can wrap other components.

```JS
const MainContainer = styled.div`
  width: 100%;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : variable.BRAND_PRIMARY };
  height: 100%;
  padding: ${variable.SINGLEplusHALF};
  text-align:center;
  color: ${props => props.textColor ? props.textColor : variable.BRAND_HILIGHT };
  border-radius:${props => props.corner ? props.corner : variable.RADIUS_CORNER };
  position: relative;
  background-size:cover;
  background-position: 50% 50%;

  @media (min-width: ${variable.BREAK_TABLET}) {
    padding: ${props => props.NarrowView ? `${variable.QUAD} ${variable.SEXTUPLE};` : `${variable.QUAD};` };
  }
`


const PopOut = props => (
  <Container>
    <MainContainer {...props} style={ props.background ? {backgroundImage : `url(${props.background})`}: null } >
    {props.children}
    </MainContainer>
  </Container>
)

export default PopOut
```


### Organisms

As we get to organisms, we start to see Classes being used, bringing in several Molecules and atoms, often with components that render on the frontend as well as server.

This is a carousel component. It had several smaller components and so many unique styles that they were collocated within a folder.

```js
class CardsCarousel extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Main
        style={
          this.props.backgroundimg
            ? {
                backgroundImage: `url(${this.props.backgroundimg})`,
                backgroundSize: `cover`,
              }
            : null
        }
      >
        <Container {...this.props}>
          <MainTextContainer>
            <HeadingSecondary textColor={this.props.textColor}>
              {this.props.heading || 'Recent News'}
            </HeadingSecondary>
            <Paragraph textColor={this.props.textColor}>
              {this.props.content || 'Content.'}
            </Paragraph>
            <Button to="/news/" white>
              Read more articles
            </Button>
          </MainTextContainer>
          <CardsContainer>
              <Carousel lightBubbles {...CAROUSEL_SETTINGS_LARGE}>
                {this.props.posts
                  ? this.props.posts.map(item => (
                      <Card key={item.node.id} data={item.node} />
                    ))
                  : null}
              </Carousel>
          </CardsContainer>
        </Container>
      </Main>
    )
  }
}

export default CardsCarousel
```

### Partials

As I developed this project, I realised there was an extra item which I didn't feel fitted into either Organisms or Templates. These were the site's headers, footer, and a parent component called Layout which would wrap all of the pages and provide some base CSS (fonts and a minimal reset).

So I created a Partials folder for these 3 components. I'm still not certain they shouldn't have been Organisms. But easy discovery for me meant that I wanted to keep them separate from other, re-usable Organisms that would be used in different contexts.

### Templates

Does what it says on the tin really. These are where the layout for pages that were programmatically created from other data sources are kept.

### Pages

Fully formed JSX pages lived here, comprising of a component that would wrap every page (Partials/Layout.js), and many Organisms, Molecules and Atoms to build up entire pages.

Here's a short example of a page so you can see the final use of this approach:

```JS
import React from 'react'
import Helmet from 'react-helmet'
import * as variable from '../components/variables'
import Layout from '../components/Templates/Layout'
import Link from '../components/Molecules/Link'
import * as atom from '../components/Atoms'

import Masthead from '../components/Organisms/Masthead'

export const frontmatter = {
  title: "NOT FOUND",
  path: "404",
  description: "Page not found",
  inMainNav: false
}

const NotFoundPage = props => (
  <Layout>
    <Helmet>
      <title>NOT FOUND | { props.data.site.siteMetadata.title }</title>
      <meta name="description" content="Page not found." />
    </Helmet>
    <Masthead
        title="NOT FOUND"
        intro="Page not found"
        textColor={variable.BRAND_SECONDARY}
    />
    <atom.Band>
      <atom.Container>
        <atom.Paragraph>You just hit a route that doesn&#39;t exist... the sadness.</atom.Paragraph>
        <atom.Paragraph>You might want to check out the <Link to="/sitemap">sitemap</Link>, or go back to the <Link to="/"> homepage</Link>.</atom.Paragraph>
      </atom.Container>
    </atom.Band>
  </Layout>
)

export default NotFoundPage

export const query = graphql`
query notFoundPageQuery {
  site {
    siteMetadata {
      title
    }
  }
}
`
```

As you can see from this code, an approach I started to adopt included importing everything from `atoms` and using `<atom.band>` to identify clearly what grouping it came under. It also made imports much shorter and somewhat tidier.


### Atomic Could Be the Future

The title of this section is a bit of a misnomer. The Atomic approach might not be best for your project. It might not fit your development team workflow. Or it might not match your particular mental model of how you see your project's code. That's OK, I document this in the hopes that it might be useful to some.

If you do end up adopting this approach I'd really like to know about it.
