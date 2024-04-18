import styled from "styled-components";

export const UserImg = styled.img`
  height: 100%;
  width: auto;
`;

export const ContactContainer = styled.div`
  min-height: 800px;
  min-height: 50px;
  /* color: transparent; */
  background-color: RGB(53, 70, 209);

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 0.75rem;
  margin-bottom: 0.75rem;

  border-radius: 8px;
`;

export const UserInfoContainer = styled.div`
  width: 55%;
  height: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
  display: flex;
  flex-direction: row;
`;

export const TextInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const NameText = styled.h1`
  color: black;
  font-size: 16px;
`;

export const NumberText = styled.h2`
  color: RGB(193, 193, 206);
  font-size: 14px;
`;

export const ButtonContainer = styled.div`
  box-sizing: border-box;
  width: 45%;
  height: 35px;
  /* align-self: center; */
  padding: 0.25rem;
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  justify-content: flex-end;
  gap: 8px;
`;
