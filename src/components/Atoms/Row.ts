import styled from "styled-components";
import { IBreakpoint } from "../types";

export interface IRowProps {
  size: number;
  breakpoint?: string;
}

const Row = styled.div<IRowProps>`
  @media (min-width: ${({ breakpoint = "36" }) => breakpoint}em) {
    display: grid;
    grid-template-columns: repeat(${({ size }) => (size ? size : 100)}, 1fr);
    grid-gap: 15px;
  }
`;

export default Row;
