import { graphql, Link } from "gatsby";
import React, { FC } from "react";
import { Helmet } from "react-helmet";
import Page from "../components/Templates/Page";

export interface ICategoriesPageProps {
  data: {
    allMarkdownRemark: {
      group: Array<{
        fieldValue: number;
        totalCount: number;
      }>;
    };
  };
}

const CategoriesPage: FC<ICategoriesPageProps> = ({
  data: {
    allMarkdownRemark: { group }
  }
}) => (
  <Page pageTitle="All Categories">
    <h1>Categories</h1>
    <ul>
      {group.map(({ fieldValue, totalCount }) => (
        <li key={fieldValue}>
          <Link to={`/categories/${fieldValue.toString().replace(/ /g, "-")}/`}>
            {fieldValue} ({totalCount})
          </Link>
        </li>
      ))}
    </ul>
  </Page>
);

export default CategoriesPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
  }
`;
