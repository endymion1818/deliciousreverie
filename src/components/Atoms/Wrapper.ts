import styled from "styled-components";
import { ISemanticColorSpec, ISize } from "../types";

export interface IWrapperProps {
  backgroundColour?: string;
  textColour?: string;
  paddingTop?: string;
  paddingBottom?: string;
}

const Wrapper = styled.div<IWrapperProps>`
  width: 100%;
  background-color: ${({ backgroundColour }) => backgroundColour};
  color: ${({ textColour }) => textColour};
  padding-top: ${({ paddingTop }) => paddingTop};
  padding-bottom: ${({ paddingBottom }) => paddingBottom};

  a {
    color: ${({ textColour }) => textColour};
  }
`;

export default Wrapper;
