import { graphql, Link } from "gatsby";
import React, { FC } from "react";
import Page from "../Templates/Page";

export interface ITagsProps {
  pageContext: {
    tag: string;
  };
  data: {
    allMarkdownRemark: {
      edges: Array<{
        node: {
          fields: {
            slug: string;
          };
          frontmatter: {
            title: string;
          };
        };
      }>;
      totalCount: number;
    };
  };
}

const Tags: FC<ITagsProps> = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`;

  return (
    <Page pageTitle={tagHeader}>
      <h1>{tagHeader}</h1>
      <ul>
        {edges.map(({ node }) => {
          const { slug } = node.fields;
          const { title } = node.frontmatter;
          return (
            <li key={slug}>
              <Link to={slug}>{title}</Link>
            </li>
          );
        })}
      </ul>
      <Link to="/tags">All Tags</Link>
    </Page>
  );
};

export default Tags;

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            tags
          }
        }
      }
    }
  }
`;
