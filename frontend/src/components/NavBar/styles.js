import styled from "styled-components";
export const NavBarContainer = styled.div`
  width: 100%;
  height: 64px;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
`;
export const LeftSideContainer = styled.div`
  width: 16%;
  height: 100%;
  display: flex;
  gap: 8px;
  padding-right: 10px;
  align-items: center;
`;
export const HamburguerButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  &:hover {
    cursor: pointer;
  }
  background-color: transparent;
`;
export const HamburguerMenuImage = styled.img`
  width: 100%;
  height: 100%;
  display: inline-block;
`;
export const NavBarIcon = styled.img`
  width: 48px;
  height: 48px;
  align-self: center;
`;
export const NavBarTitle = styled.span`
  font-size: 32px;
  align-self: center;
`;
export const SearchBarContainer = styled.div`
  width: 65%;
  height: 100%;
`;
export const ProfileContainer = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
`;
export const ProfileImage = styled.img`
  width: 40px;
  height: 50%;
`;
