import { graphql, StaticQuery } from "gatsby";
import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Lovechild from "../../assets/Lovechild-Regular.woff2";
import ButtonStyles from "../Atoms/ButtonStyles";
import Wrapper from "../Atoms/Wrapper";
import ErrorBoundary from "../Molecules/ErrorBoundary";
import Footer from "../Organisms/Footer";
import Header from "../Organisms/Header";
import { colors, size, borderradius } from "../tokens";
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

import ShareCard from "../../assets/sharecard-default.png";

export interface INavEdges {
  edges: [
    {
      node: {
        frontmatter: {
          MainNavOrder: number;
          secondaryNavMenu: string;
          secondaryNavOrder: number;
          title: string;
          path: string;
        };
      };
    }
  ];
}

export interface IPrimaryNavProps {
  primaryNav: INavEdges;
}

export interface ISecondaryNavProps {
  secondaryNav: INavEdges;
}

export interface ISiteMetaProps {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      siteUrl: string;
    };
  };
}

export interface IStaticQueryProps
  extends ISiteMetaProps,
    IPrimaryNavProps,
    ISecondaryNavProps {}

const AccessibilityMainContentSkipLink = styled.a`
  position: absolute;
  display: inline-block;
  transform: translateY(-${size.sextuple});
  padding: ${size.singleplushalf};
  background-color: ${colors.neutral.medium};
  color: ${colors.base.primary};

  &:hover,
  &:focus,
  &:active {
    transform: translateY(-${size.zero});
  }
`;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: system;
    font-style: normal;
    font-weight: 300;
    src: local(".SFNSText-Light"), local(".HelveticaNeueDeskInterface-Light"), local(".LucidaGrandeUI"), local("Ubuntu Light"), local("Segoe UI Light"), local("Roboto-Light"), local("DroidSans"), local("Tahoma");
    font-display: auto;
  }
  @font-face {
    font-family: Lovechild;
    src: url(${Lovechild});
    font-display: swap;
  }
  body {
    margin: 0;
    font-family: system, sans-serif;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Lovechild;
  }
  p {
    line-height: 1.2;
  }
  li {
    line-height: 1.25;
  }
  img {
    max-width: 100%;
  }
  hr {
    border: 0;
    border-bottom: 1px dashed #ccc;
    background: ${colors.neutral.dark};
  }
  pre {
    background-color: ${colors.base.secondary};
    padding: 0.5rem;
    color: ${colors.neutral.nearWhite};
    overflow-y: scroll;
    border-radius: ${borderradius.small};
  }
  button {
    ${ButtonStyles}
  }
  #gatsby-noscript {
    display:none;
  }
  .boxout {
    border: 1px solid white;
    border-radius: ${borderradius.medium};
    padding: 2rem;
    background-color: rgba(255,255,255, 0.2);
  }
  .responsive-iframe-container {
    position: relative;
    overflow: hidden;
    padding-top: 56.25%;

    > iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }
  }
`;

const Main = styled(Wrapper)`
  padding: ${size.single} 0;
`;

export interface ILayoutProps {
  pageTitle?: string;
  pageDescription?: string;
  isIndexable?: boolean;
  datePublished?: string;
}

const Layout: FC<ILayoutProps> = ({
  children,
  pageTitle,
  pageDescription,
  isIndexable = true,
  datePublished = "2017-05-12T15:21:21+01:00"
}) => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
              description
              siteUrl
            }
          }
        }
      `}
      render={(data: IStaticQueryProps) => {
        deckDeckGoHighlightElement();
        const { title, description, siteUrl } = data.site.siteMetadata;
        const sharecardAbsoluteUrl = siteUrl + ShareCard;
        const amalgamatedDescription = `${pageDescription} - ${description}`;
        return (
          <ErrorBoundary>
            <Helmet>
              <html lang="en-GB" />
              <title>{`${pageTitle} - ${title}`}</title>
              <meta name="description" content={amalgamatedDescription} />
              <script type="application/ld+json">
                {`{
                  "@context": "http://schema.org",
                  "@type": "NewsArticle",
                  "headline": "${pageTitle}",
                  "author": {
                    "@type": "Person",
                    "name": "Benjamin Read"
                  },
                  "datePublished": "${datePublished}",
                  "image": "${sharecardAbsoluteUrl}"
                }`}
              </script>
              <link
                rel="preload"
                href={Lovechild}
                as="font"
                crossOrigin="anonymous"
              />
              <meta property="og:site_name" content={title} />
              <meta property="og:locale" content="en_GB" />
              <meta property="og:type" content="website" />
              <meta
                property="og:description"
                content={amalgamatedDescription}
              />
              <meta property="og:title" content={pageTitle} />
              <meta property="og:image" content={sharecardAbsoluteUrl} />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:site" content="@muzzlehatch_" />
              <meta name="twitter:title" content={pageTitle} />
              <meta
                name="twitter:description"
                content={amalgamatedDescription}
              />
              <meta name="twitter:image" content={sharecardAbsoluteUrl} />
              {!isIndexable && (
                <meta name="robots" content="NOINDEX, NOFOLLOW" />
                )}
            </Helmet>
            <GlobalStyle />
            <AccessibilityMainContentSkipLink href="#main">
              Skip to main content
            </AccessibilityMainContentSkipLink>
            <Header
              siteTitle={title}
              siteDescription={description}
              primaryNav={data.primaryNav}
            />
            <Main
              id="main"
              backgroundColour={colors.base.primary}
              textColour={colors.neutral.medium}
            >
              {children}
            </Main>
            <Footer
              siteTitle={title}
              siteDescription={description}
              primaryNav={data.primaryNav}
              secondaryNav={data.secondaryNav}
            />
          </ErrorBoundary>
        );
      }}
    />
  );
};
export default Layout;
