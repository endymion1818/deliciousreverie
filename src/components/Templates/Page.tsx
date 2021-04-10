import React, { FC } from "react";
import Container from "../Atoms/Container";
import Wrapper from "../Atoms/Wrapper";
import Layout from "./Layout";

interface IPageTemplateProps {
  pageTitle?: string;
  pageDescription?: string;
  date?: string;
}

const PageTemplate: FC<IPageTemplateProps> = ({
  pageTitle = "",
  pageDescription = "",
  date,
  children
}) => {
  return (
    <Layout pageTitle={pageTitle} pageDescription={pageDescription} datePublished={date}>
      <Wrapper>
        <Container>{children}</Container>
      </Wrapper>
    </Layout>
  );
};

export default PageTemplate;
