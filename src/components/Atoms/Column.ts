import React from "react";
import styled from "styled-components";
import { breakpoint, flexalign, size, textalign } from "../tokens";

export interface IColumnProps {
  verticalAlign?: string;
  bufferTop?: string;
  bufferBottom?: string;
  textAlign?: string;
}

const Column = styled.div<IColumnProps>`
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}

  > h1,
    > h2,
    > h3,
    > h4,
    > h5,
    > h6 {
    flex: 1;
  }
  > p {
    flex: 2;

    & ~ div[class*="Button"] {
      flex: 0;
    }
  }
  > img {
    width: 100%;
  }
  @media (min-width: ${breakpoint.small}) {
    display: flex;
    flex-direction: column;

    align-self: ${({ verticalAlign = flexalign.start }) => verticalAlign};
    ${({ bufferTop = size.single }) => bufferTop && `margin-top: ${bufferTop};`}
    ${({ bufferBottom = size.single }) =>
      bufferBottom && `margin-bottom: ${bufferBottom};`}
  }
`;

export default Column;
