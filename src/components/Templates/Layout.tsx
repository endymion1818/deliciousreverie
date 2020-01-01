import { graphql, StaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Skybird from "../../assets/Skybird-Regular.woff2";
import Wrapper from "../Atoms/Wrapper";
import ErrorBoundary from "../Molecules/ErrorBoundary";
import Footer from "../Organisms/Footer";
import Header from "../Organisms/Header";
import { colors, size } from "../tokens";

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
  }
  @font-face {
    font-family: Skybird;
    src: url(${Skybird});
  }
  body {
    margin: 0;
    font-family: system;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Skybird;
  }
  p {
    line-height: 1.2;
  }
  #gatsby-noscript {
    display:none;
  }
`;

const Main = styled(Wrapper)`
  padding: ${size.single} 0;
`;

const Layout: React.SFC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: IStaticQueryProps) => (
      <ErrorBoundary>
        <GlobalStyle />
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />
          <script type="application/ld+json">
            {`
              "@context": "http://schema.org",
              "@type": "Individual",
              "name": "Delicious Reverie",
              "url": "https://deliciousreverie.co.uk",
            `}
          </script>
        </Helmet>
        <AccessibilityMainContentSkipLink href="#main">
          Skip to main content
        </AccessibilityMainContentSkipLink>
        <Header
          siteTitle={data.site.siteMetadata.title}
          siteDescription={data.site.siteMetadata.description}
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
          siteTitle={data.site.siteMetadata.title}
          siteDescription={data.site.siteMetadata.description}
          primaryNav={data.primaryNav}
          secondaryNav={data.secondaryNav}
        />
      </ErrorBoundary>
    )}
  />
);
export default Layout;
