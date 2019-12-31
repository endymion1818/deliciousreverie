import { withPrefix } from "gatsby";
import React, { FC } from "react";
import styled from "styled-components";
import NavItem from "../../components/Molecules/NavItem";
import Column from "../Atoms/Column";
import Container from "../Atoms/Container";
import Link from "../Atoms/Link";
import List from "../Atoms/List";
import Row from "../Atoms/Row";
import Wrapper from "../Atoms/Wrapper";
import { IPrimaryNavProps, ISecondaryNavProps } from "../Templates/Layout";
import { borderradius, colors, size } from "../tokens";

export interface IFooterProps extends IPrimaryNavProps, ISecondaryNavProps {
  siteTitle: string;
  siteDescription: string;
}

const SecondaryNav = styled(List)`
  li {
    a {
      display: block;
      padding: ${size.single};
      text-decoration: none;
      border-radius: ${borderradius.medium};
      color: ${colors.base.primary};

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

const Blockquote = styled.blockquote`
  margin: 0;
`;

const Footer: FC<IFooterProps> = ({
  secondaryNav,
  primaryNav,
  siteTitle,
  siteDescription
}) => (
  <>
    <Wrapper
      backgroundColour={colors.base.secondary}
      textColour={colors.neutral.white}
    >
      <Container>
        <Row size={1}>
          <Column>
            <Blockquote>
              “Wisest are they who know they do not know.”
              <footer>&mdash; Jostein Gaarder</footer>
            </Blockquote>
          </Column>
        </Row>
      </Container>
    </Wrapper>
    <Wrapper
      backgroundColour={colors.neutral.medium}
      textColour={colors.neutral.white}
    >
      <Container>
        <Row size={1}>
          <Column>
            <h3>About This Site</h3>
            <p>
              <Link to={withPrefix("/")}>{siteTitle}</Link> is the{" "}
              {siteDescription}. Set in Skybird and your system font. Built with
              Hugo, hosted by Netlify. &copy; Some rights are reserved.
            </p>
            <h3 style={{ marginBottom: size.zero }}>Where you can find me:</h3>
            <List inline={true} style={{ marginTop: size.zero }}>
              <li>
                <a href="https://twitter.com/muzzlehatch_">twitter</a>
              </li>
              <li>
                <a href="http://uk.linkedin.com/pub/benjamin-read/27/563/36a/">
                  linkedin
                </a>
              </li>
              <li>
                <a href="https://codepen.io/endymion1818/">codepen</a>
              </li>
              <li>
                <a href="https://codesandbox.io/u/endymion1818/">codesandbox</a>
              </li>
              <li>
                <a href="https://github.com/endymion1818/">github</a>
              </li>
              <li>
                <Link to="/feed.xml">RSS Feed</Link>
              </li>
            </List>
          </Column>
        </Row>
      </Container>
    </Wrapper>
  </>
);

export default Footer;
