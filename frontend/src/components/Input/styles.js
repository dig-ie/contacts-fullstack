import styled from "styled-components";

export const StyledInput = styled.input`
  width: 85%;
  height: 32px;

  color: black;
  border: none;
  border-radius: 8px;

  background-color: #b0b4c6;
  opacity: 0.6;

  padding-left: 0.75rem;

  font-family: "Open Sans", sans-serif;

  &::placeholder {
    color: rgba(
      0,
      0,
      0,
      1
    ); /* Cor do texto do placeholder (preto com 50% de opacidade) */
  }
`;
