import styled from "styled-components";
import { ContactContainerProps } from "./types"

export const ContactContainer = styled.div<ContactContainerProps>`
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: ${(props) => (props.isChecked ? "0" : "8px")};
  cursor: pointer;
  background-color: ${(props) =>
    props.isChecked ? "lightgreen" : "white"}; // Uso da prop isChecked;
  &:hover {
    background-color: rgb(236, 242, 252);
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ImageContainer = styled.div`
  width: 50px;
  height: 50px;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  margin-right: 10px;
`;

export const CheckBox = styled.input`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactName = styled.span`
  font-weight: bold;
`;

export const ContactNumber = styled.span`
  color: gray;
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

// export export const UserImg = styled.img`
//   height: 100%;
//   width: auto;
// `;

// export export const ContactContainer = styled.div`
//   /* min-height: 800px; */
//   min-height: 50px;
//   /* color: transparent; */
//   width: 100%;
//   background-color: white;

//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;

//   padding: 0;
//   margin-bottom: 0.75rem;

//   border-bottom: solid 1px gray;
//   transition: background-color 0.1s ease; /* Adicionando a transição */
//   &:hover {
//     background-color: lightgray;
//     transition: 0;
//     cursor: pointer;
//   }
// `;

// export export const UserInfoContainer = styled.div`
//   width: 55%;
//   height: 100%;
//   padding-top: 5px;
//   padding-bottom: 5px;
//   padding-left: 5px;
//   display: flex;
//   flex-direction: row;
// `;

// export export const TextInfoContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
// `;

// export export const NameText = styled.h1`
//   color: black;
//   font-size: 16px;
// `;

// export export const NumberText = styled.h2`
//   color: RGB(193, 193, 206);
//   font-size: 14px;
// `;

// ;
