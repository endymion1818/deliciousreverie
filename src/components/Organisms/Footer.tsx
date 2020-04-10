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
import { borderradius, colors, effects, size } from "../tokens";

export interface IFooterProps extends IPrimaryNavProps, ISecondaryNavProps {
  siteTitle: string;
  siteDescription: string;
}

const Anchor = styled(Link)`
  transition: ${effects.transition};

  &:hover,
  &:active,
  &:focus {
    color: ${colors.neutral.nearWhite};
    opacity: 0.8;
  }
  &.active {
    color: ${colors.base.primary};
    opacity: 0.4;
  }
`;

const Blockquote = styled.blockquote`
  margin: 0;

  span {
    font-size: ${size.double};
    font-family: Skybird;
  }
`;

const Footer: FC<IFooterProps> = ({ siteTitle, siteDescription }) => (
  <>
    <Wrapper
      backgroundColour={colors.base.secondary}
      textColour={colors.neutral.white}
      paddingBottom={size.double}
      paddingTop={size.quad}
    >
      <Container>
        <Row size={1}>
          <Column>
            <Blockquote>
              <span>“Wisest are they who know they do not know.”</span>
              <footer>&mdash; Jostein Gaarder</footer>
            </Blockquote>
          </Column>
        </Row>
      </Container>
    </Wrapper>
    <Wrapper
      backgroundColour={colors.neutral.dark}
      textColour={colors.neutral.white}
      paddingBottom={size.quad}
      paddingTop={size.double}
    >
      <Container>
        <Row size={1}>
          <Column>
            <h3>About This Site</h3>
            <p>
              <Link to={withPrefix("/")}>{siteTitle}</Link> is the{" "}
              {siteDescription}. Set in{" "}
              <Anchor href="https://shapedfonts.com/project/skybird/">
                Skybird
              </Anchor>{" "}
              and your system font. Built with Gatsby, hosted by Netlify. &copy;
              Some rights are reserved. This site doesn't use any cookies or
              other session storage and has no tracking scripts.
            </p>
            <h3 style={{ marginBottom: size.zero }}>Where you can find me:</h3>
            <List inline={true} style={{ marginTop: size.zero }}>
              <li>
                <Anchor href="https://twitter.com/muzzlehatch_">twitter</Anchor>
              </li>
              <li>
                <Anchor href="http://uk.linkedin.com/pub/benjamin-read/27/563/36a/">
                  linkedin
                </Anchor>
              </li>
              <li>
                <Anchor href="https://codepen.io/endymion1818/">codepen</Anchor>
              </li>
              <li>
                <Anchor href="https://codesandbox.io/u/endymion1818/">
                  codesandbox
                </Anchor>
              </li>
              <li>
                <Anchor href="https://github.com/endymion1818/">github</Anchor>
              </li>
              <li>
                <Anchor to="/feed.xml">RSS Feed</Anchor>
              </li>
            </List>
          </Column>
        </Row>
      </Container>
    </Wrapper>
  </>
);

export default Footer;
