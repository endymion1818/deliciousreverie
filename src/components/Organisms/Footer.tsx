import { withPrefix } from "gatsby";
import React, { FC } from "react";
import styled from "styled-components";
import Alert from "../Atoms/Alert";
import Column from "../Atoms/Column";
import Container from "../Atoms/Container";
import Link from "../Atoms/Link";
import List from "../Atoms/List";
import Row from "../Atoms/Row";
import Wrapper from "../Atoms/Wrapper";
import { IPrimaryNavProps, ISecondaryNavProps } from "../Templates/Layout";
import { colors, effects, size } from "../tokens";

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
          <Alert>
            {typeof window === 'undefined' ? (
              <p>You're currently on the <i>javascript disabled</i> version of the site. To enable the site search and some pretty animations, <a href="https://jsenabled.deliciousreverie.co.uk">view the javascript enabled react app</a>.</p>
            ) : (
              <p>You're currently on the <i>javascript enabled</i> version of the site. if you need to conserve your battery or CPU, <a href="https://deliciousreverie.co.uk">view the HTML & CSS only site</a>.</p>
            ) }
          </Alert>
        </Row>
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
                <Anchor href="https://www.linkedin.com/in/benjaminread1980/">
                  linkedin
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
