import { withPrefix } from "gatsby";
import React, { FC } from "react";
import styled from "styled-components";
import Column from "../Atoms/Column";
import Container from "../Atoms/Container";
import Link from "../Atoms/Link";
import Row from "../Atoms/Row";
import Wrapper from "../Atoms/Wrapper";
import SearchForm from "../Molecules/SearchForm";
import { IPrimaryNavProps } from "../Templates/Layout";
import { borderradius, breakpoint, colors, size } from "../tokens";

export interface IHeaderProps extends IPrimaryNavProps {
  siteTitle: string;
  siteDescription: string;
}

const SiteTitle = styled.h1`
  color: ${colors.base.primary};
  margin: 0;
  padding-top: 4vh;
`;
const SiteDescription = styled.h2`
  color: ${colors.neutral.white};
  margin: 0;
  padding-top: 4vh;
`;

const MainNav = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  overflow-x: auto;
  padding-left: 0;

  li {
    a {
      display: block;
      padding: ${size.single};
      text-decoration: none;
      border-radius: ${borderradius.medium};

      &:hover,
      &:active,
      &:focus {
        background-color: ${colors.neutral.medium};
        color: ${colors.base.primary};
      }
      &.active {
        background-color: ${colors.neutral.medium};
        color: ${colors.base.primary};
      }
    }
  }
`;

const Header: FC<IHeaderProps> = ({
  primaryNav,
  siteTitle,
  siteDescription
}) => (
  <>
    <Wrapper
      backgroundColour={colors.base.secondary}
      textColour={colors.neutral.white}
      style={{ minHeight: "8vh" }}
    >
      <Container>
        <SiteTitle href={withPrefix("/")}>{siteTitle}</SiteTitle>
        <SiteDescription>{siteDescription}</SiteDescription>
      </Container>
    </Wrapper>
    <Wrapper
      backgroundColour={colors.base.secondary}
      textColour={colors.neutral.white}
    >
      <Container>
        <Row size={2}>
          <Column>
            <MainNav>
              <li>
                <Link to="/" activeClassName="active">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" activeClassName="active">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" activeClassName="active">
                  Contact
                </Link>
              </li>
            </MainNav>
          </Column>
          <Column verticalAlign="center">
            <SearchForm />
          </Column>
        </Row>
      </Container>
    </Wrapper>
  </>
);

export default Header;
