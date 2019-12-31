import { graphql, useStaticQuery } from "gatsby";
import React, { FC } from "react";

import { get } from "../../helpers";
import ButtonStyles from "../Atoms/ButtonStyles";
import Link from "../Atoms/Link";

export interface IPost {
  node: {
    id: string;
    title: {
      rendered: string;
    };
    author: string;
    date_gmt: string;
    link: string;
    fields: {
      shorterexcerpt: string;
      renderedtitle: string;
    };
  };
}

export interface IPost {
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
  };
}

export interface IPostListProps {
  posts?: { edges: Array<{ node: IPost }> };
  limit?: number;
  data?: {
    allPost?: IPost[];
  };
}

const PostList: FC<IPostListProps> = props => {
  const { limit = 6 } = props;
  const defaultPostdata = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        limit: 6
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        totalCount
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              description
              date(formatString: "DD MMMM YYYY")
            }
          }
        }
      }
    }
  `);

  const posts = (props.posts || []).length
    ? props.posts
    : get(["allMarkdownRemark", "edges"], defaultPostdata) || [];

  return (
    <div style={{ alignItems: "stretch" }}>
      {posts.slice(0, limit).map((post, index) => (
        <div style={{ display: "flex" }} key={index}>
          <a
            href={post.node.fields.slug}
            aria-label={post.node.frontmatter.title}
            key={post.node.id}
          >
            <article>
              <h3>{post.node.frontmatter.title}</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: post.node.frontmatter.description
                }}
              />
              <div>
                Written on{" "}
                <time dateTime="YYYY-MM-DDThh:mm:ssTZD">
                  {post.node.frontmatter.date}
                </time>
              </div>
              <br />
              <Link to={post.node.fields.slug}>
                Read "{post.node.frontmatter.title}"
              </Link>
            </article>
          </a>
        </div>
      ))}
    </div>
  );
};
export default PostList;
