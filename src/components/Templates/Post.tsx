import { graphql, PageProps } from "gatsby";
import Img, { FluidObject } from "gatsby-image";
import React, { FC, useState } from "react";
import Container from "../Atoms/Container";
import Link from "../Atoms/Link";
import Wrapper from "../Atoms/Wrapper";
import Layout from "./Layout";
import { useForm, usePlugin } from 'tinacms'
interface IPostTemplateProps {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: {
          name: string;
          url: string;
        };
      };
    };
    markdownRemark: {
      id: string
      html: string;
      excerpt: string;
      frontmatter: {
        type: string;
        description: string;
        featuredImageAlt: string;
        featuredImage: {
          childImageSharp: {
            fluid: FluidObject;
          };
        };
        title: string;
        date: string;
        categories: string[];
        tags: string[];
      };
    };
    nextPost?: {
      frontmatter: {
        title: string;
      };
      fields: {
        slug: string;
      };
    };
    prevPost?: {
      frontmatter: {
        title: string;
      };
      fields: {
        slug: string;
      };
    };
  };

const PostTemplate: FC<PageProps<IPostTemplateProps>> = ({ data, pageContext, location }) => {
  const { html } = data.markdownRemark;
  const { title, description, type, date, featuredImage, featuredImageAlt, categories, tags } = data.markdownRemark.frontmatter;

  const formConfig = {
    id: data.markdownRemark.id,
    label: "Blog Post",
    initialValues: data.markdownRemark,
    onSubmit: values => {
      alert(`Submitting ${values.frontmatter.title}`)
    },
    fields: [
      {
        name: "frontmatter.title",
        label: "Title",
        component: "text",
      },
      {
        name: "frontmatter.description",
        label: "Description",
        component: "textarea",
      },
    ],
  }
  // Create the form
  const [post, form] = useForm(formConfig)
  usePlugin(form)

  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout pageTitle={title} pageDescription={description}>
      <Wrapper>
        <Container>
          <article className="h-entry">
            <header>
              <h1>{title}</h1>
              {featuredImage && (
                <Img
                  fluid={featuredImage.childImageSharp.fluid}
                  alt={featuredImageAlt}
                />
              )}
            </header>
            <section dangerouslySetInnerHTML={{ __html: html }} />
            <hr />
            {type !== "page" && (
              <footer>
                <time>Published on: {date}</time>
                {categories ? (
                  <>
                    <h4>Categories:</h4>
                    <ul>
                      {categories.map(category => (
                        <li key={category}>
                          <Link
                            href={`/categories/${category.replace(/ /g, "-")}`}
                          >
                            {category}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : null}
                {tags ? (
                  <>
                    <h4>Tags:</h4>
                    <ul>
                      {tags.map(tag => (
                        <li key={tag}>
                          <Link href={`/tags/${tag.replace(/ /g, "-")}`}>
                            {tag}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : null}
              </footer>
            )}
          </article>
        </Container>
      </Wrapper>
    </Layout>
  );
};

const BlogPostForm = {
  fields: [
    {
      label: "Title",
      name: "frontmatter.title",
      description: "Enter the title of the post here",
      component: "text",
    },
    {
      label: "Description",
      name: "frontmatter.description",
      description: "Enter the post description",
      component: "textarea",
    },
    {
      label: "Description",
      name: "frontmatter.description",
      description: "Enter the post description",
      component: "textarea",
    },
  ],
}

export default PostTemplate

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      ...TinaRemark
      frontmatter {
        title
        categories
        tags
        type
        description
        date(formatString: "DD MMMM, YYYY")
        featuredImage {
          publicURL
          childImageSharp {
            fluid(maxWidth: 1240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
