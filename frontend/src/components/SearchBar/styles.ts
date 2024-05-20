import styled from "styled-components";

export const SearchBarContainer = styled.div`
  border-radius: 8px 8px 0 0;
  min-height: 60px;
  min-width: 400px;
  /* box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); */
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
  background-color: rgb(241, 243, 244);
`;

export const SearchBarInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  padding-left: 0.75rem;
  background-color: transparent;
  font-size: 24px;
`;
