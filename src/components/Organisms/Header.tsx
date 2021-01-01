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
import { borderradius, breakpoint, colors, effects, size } from "../tokens";

export interface IHeaderProps extends IPrimaryNavProps {
  siteTitle: string;
  siteDescription: string;
}

const SiteTitle = styled.h1`
  margin: 0;
  padding-top: 6vh;

  a {
    color: ${colors.base.primary};
    text-decoration: none;
    transition: ${effects.transition};

    &:hover,
    &:active,
    &:focus {
      opacity: 0.8;
    }
  }
`;
const SiteDescription = styled.h2`
  color: ${colors.neutral.white};
  margin: 0;

  @media (min-width: ${breakpoint.small}) {
    font-size: 1.3rem;
  }
`;

const MainNav = styled.ul`
  display: flex;
  flex-direction: row;
  align-content: space-between;
  list-style: none;
  overflow-x: auto;
  margin: 0;
  padding: 1rem 0;

  li {
    a {
      display: block;
      padding: ${size.single};
      text-decoration: none;
      border-radius: ${borderradius.medium};
      transition: ${effects.transition};

      &:hover,
      &:focus {
        background-color: ${colors.neutral.nearWhite};
        color: ${colors.neutral.nearDark};
        opacity: 0.8;
      }
      &.active,
      &:active {
        background-color: ${colors.neutral.medium};
        color: ${colors.neutral.white}!important;
      }
    }
  }
`;

const SearchColumn = styled(Column)`
  form {
    padding-bottom: ${size.single};
  }
  @media (min-width: ${breakpoint.small}) {
    form {
      padding-bottom: 0;
      justify-content: flex-end;
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
        <SiteTitle>
          <Link to="/">{siteTitle}</Link>
        </SiteTitle>
        <SiteDescription>{siteDescription}</SiteDescription>
      </Container>
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
                <Link to="/links" activeClassName="active">
                  Links
                </Link>
              </li>
              <li>
                <Link to="/contact" activeClassName="active">
                  Contact
                </Link>
              </li>
            </MainNav>
          </Column>
          {typeof window !== 'undefined' && (
            <SearchColumn verticalAlign="center"><SearchForm /></SearchColumn>
          )}
        </Row>
      </Container>
    </Wrapper>
  </>
);

export default Header;
