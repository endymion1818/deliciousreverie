import { graphql, withPrefix } from "gatsby";
import React, { FC } from "react";
import styled from "styled-components";
import Link from "../Atoms/Link";
import Page from "../Templates/Page";
import { colors, size } from "../tokens";

export interface IArchiveProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
    posts: {
      edges: Array<{
        node: {
          frontmatter: {
            title: string;
            date: string;
            description: string;
          };
          fields: {
            slug: string;
          };
        };
      }>;
    };
  };
  pageContext: {
    previousPagePath?: string;
    nextPagePath?: string;
    pageNumber: number;
  };
}

const Article = styled.article`
  margin-bottom: ${size.triple};
  padding-left: 1rem;
  border-left: 1px dashed ${colors.neutral.dark};
`;

const Archive: FC<IArchiveProps> = ({ data, pageContext }) => {
  const { previousPagePath, nextPagePath, pageNumber } = pageContext;
  const { posts } = data;
  const { site } = data;
  const isHomePage = pageNumber === 0 ? true : false;

  return (
    <Page
      pageTitle={pageNumber === 0 ? "Home" : "All posts"}
      pageDescription={isHomePage ? "Welcome" : "Every post on this website"}
    >
      {isHomePage && (
        <>
          <h1>Thanks for popping round!</h1>
          <p>
            {site.siteMetadata.title} is a blog mostly about web development and
            JavaScript engineering. But it's unashamedly my personal blog too,
            so you might find a few other things such as{" "}
            <Link to="/tags/food/">recipes</Link>, my{" "}
            <Link to="/tags/music/">musical interests</Link> and{" "}
            <Link to="/tags/poetry/">poetry reviews</Link>.
          </p>
          <p>
            I like to try to help my peers.{" "}
            <Link to="/contact">Drop me a message</Link> if you'd like to say
            hi!
          </p>
          <hr />
          <h2>Recent posts:</h2>
        </>
      )}
      {posts &&
        posts.edges.map((edge, index) => (
          <Article key={index}>
            <h3>
              <Link to={withPrefix(edge.node.fields.slug)}>
                {edge.node.frontmatter.title}
              </Link>
            </h3>
            <p
              dangerouslySetInnerHTML={{
                __html: edge.node.frontmatter.description
              }}
            />
            <p>
              <small>
                This was posted on: <time>{edge.node.frontmatter.date}</time>
              </small>
            </p>
            <Link to={withPrefix(edge.node.fields.slug)}>
              &rsaquo; Read more of "{edge.node.frontmatter.title}"
            </Link>
          </Article>
        ))}
      <nav>
        <ul style={{ listStyle: "none", paddingLeft: "0" }}>
          {previousPagePath && (
            <li>
              <Link to={previousPagePath}>&laquo; More Recent posts</Link>
            </li>
          )}
          {nextPagePath && (
            <>
              <li>
                <Link to={nextPagePath}>&raquo; Older posts</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </Page>
  );
};

export default Archive;

export const archiveQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { ne: "page" } } }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          excerpt(pruneLength: 280)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
