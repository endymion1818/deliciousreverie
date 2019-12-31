import React from "react";
import styled from "styled-components";
import { size } from "../tokens";

export interface IUnorderedListProps {
  inline?: boolean;
}

const UnorderedList = styled.ul<IUnorderedListProps>`
  list-style: none;
  padding-left: 0;

  > li {
    ${({ inline = false }) =>
      inline &&
      `
            display: inline-block;
            
            &:not(:first-child) {
                padding: ${size.single};
            }
            &:not(:last-child) {
                padding: ${size.single};
            }
            &:first-child {
                padding: ${size.single} ${size.single} ${size.single} 0;
            }
            &:last-child {
                padding: ${size.single} 0 ${size.single} ${size.single};
            }
        `}
  }
`;

export default UnorderedList;
