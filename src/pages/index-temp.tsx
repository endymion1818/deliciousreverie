import { graphql } from "gatsby";
import React, { FC } from "react";
import Helmet from "react-helmet";

import Container from "../components/Atoms/Container";
import Row from "../components/Atoms/Row";
import Wrapper from "../components/Atoms/Wrapper";
import PostList from "../components/Organisms/PostList";
import Layout from "../components/Templates/Layout";

export interface IIndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

export const frontmatter = {
  title: "Home",
  path: "/",
  description: "Blog of web developer and bookwork Benjamin Read",
  MainNavOrder: 1,
  secondaryNavMenu: "About",
  secondaryNavOrder: 1
};

const IndexPage: FC<IIndexPageProps> = ({ data }) => (
  <Layout>
    <Helmet>
      <title>
        {frontmatter.title} &ndash; {data.site.siteMetadata.title}
      </title>
      <meta name="description" content={frontmatter.description} />
    </Helmet>
    <Wrapper>
      <Container>
        <PostList />
      </Container>
    </Wrapper>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
