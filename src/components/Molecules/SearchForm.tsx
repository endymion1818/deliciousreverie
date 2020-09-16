import { navigate } from "gatsby";
import React, { FC, SyntheticEvent } from "react";
import styled from "styled-components";
import ButtonStyles from "../Atoms/ButtonStyles";
import { borderradius } from "../tokens";

export interface ISearchFormProps {
  query?: string;
}

export interface IInputProps {
  onEnter?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Input = styled.input<IInputProps>`
  border-radius: ${borderradius.small};
  padding: 0.2rem 0.4rem;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
`;

const Button = styled.button`
  ${ButtonStyles}
`;

const SearchForm: FC<ISearchFormProps> = ({ query }) => {
  if (process.env.JS_DISABLED === 'true') { return <></> }
  return (
    <Form role="search" method="GET" action="/search">
      <Label htmlFor="search">Search sites</Label>
      <Input
        tabIndex={0}
        type="search"
        className="search-input"
        name="keywords"
        id="search"
        onEnter={(e: SyntheticEvent) =>
          navigate(
            `/search?keywords=${encodeURIComponent(
              (e.target as HTMLTextAreaElement).value
            )}`
          )
        }
        value={query}
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};
export default SearchForm;
