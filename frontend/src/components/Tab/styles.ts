import styled from "styled-components";
export const TabButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: none;
  width: 137px;
  height: 40px;
  border-radius: 40px;
  &:hover {
    cursor: pointer;
    background-color: rgb(230, 237, 250);
  }
  background-color: ${(props) =>
    props.color != null ? props.color : "transparent"};
`;
export const LeftSideContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ButtonIconContainer = styled.div`
  width: 16px;
  height: 16px;
`;
export const ButtonIcon = styled.img`
  height: auto;
`;
export const TabName = styled.span`
  font-size: 16px;
  color: black;
`;
export const OpicionalRightButton = styled.button`
  height: 60%;
  width: 20px;
  font-size: 16px;
  background-color: transparent;
  border: 1px solid gray;
  border-radius: 8px;
  &:hover {
    background-color: red;
    cursor: pointer;
  }
`;
