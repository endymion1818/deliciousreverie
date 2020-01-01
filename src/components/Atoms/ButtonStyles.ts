import { css } from "styled-components";
import { borderradius, colors, size } from "../tokens";

const ButtonStyles = css`
  display: inline-block;
  border: none;
  padding: 0.2rem 0.4rem;
  margin: 0;
  text-decoration: none;
  background: ${colors.neutral.medium};
  color: ${colors.neutral.nearWhite};
  font-size: ${size.single};
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  border-radius: ${borderradius.small};

  &:hover,
  &:focus {
    background: ${colors.neutral.nearWhite};
    color: ${colors.neutral.dark};
  }

  &:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
  }

  &:active {
    transform: scale(0.99);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
export default ButtonStyles;
