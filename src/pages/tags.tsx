import { graphql, Link } from "gatsby";
import React, { FC } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Templates/Layout";

export interface ITagsPageProps {
  data: {
    allMarkdownRemark: {
      group: Array<{
        fieldValue: number;
        totalCount: number;
      }>;
    };
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

const TagsPage: FC<ITagsPageProps> = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title }
    }
  }
}) => (
  <Layout>
    <Helmet title={title} />
    <>
      <h1>Tags</h1>
      <ul>
        {group.map(({ fieldValue, totalCount }) => (
          <li key={fieldValue}>
            <Link to={`/tags/${fieldValue.toString().replace(/ /g, "-")}/`}>
              {fieldValue} ({totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </>
  </Layout>
);

export default TagsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
