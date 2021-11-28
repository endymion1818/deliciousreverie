import { graphql, Link } from "gatsby";
import React, { FC } from "react";
import { Helmet } from "react-helmet";
import Page from "../components/Templates/Page";

export interface ITagsPageProps {
  data: {
    allMarkdownRemark: {
      group: {
        fieldValue: number;
        totalCount: number;
      }[];
    };
  };
}

const TagsPage: FC<ITagsPageProps> = ({
  data: {
    allMarkdownRemark: { group }
  }
}) => (
  <Page pageTitle="All tags">
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
  </Page>
);

export default TagsPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
