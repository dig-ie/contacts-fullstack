import styled from "styled-components";
export const StyledPrimaryButton = styled.button`
  color: black;
  width: 80%;
  height: 52px;
  border: none;
  border-radius: 32px;
  background-color: ${(props) =>
    props.color != null ? props.color : "transparent"};
  &:hover {
    background-color: ${(props) =>
      props.disableHover ? null : "rgb(230, 237, 250)"};
    cursor: pointer;
  }
`;
