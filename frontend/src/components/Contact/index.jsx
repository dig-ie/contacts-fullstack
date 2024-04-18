import {
  ContactContainer,
  UserInfoContainer,
  UserImg,
  TextInfoContainer,
  NameText,
  NumberText,
  ButtonContainer,
} from "./styles";

import { Button } from "../Button";

export const Contact = ({ photo, name, number, buttonText }) => {
  return (
    <ContactContainer>
      <UserInfoContainer>
        <UserImg src={photo} alt="user photo" />
        <TextInfoContainer>
          <NameText>{name}</NameText>
          <NumberText>{number}</NumberText>
        </TextInfoContainer>
      </UserInfoContainer>
      <ButtonContainer>
        <Button>{buttonText}</Button>
        <Button>{buttonText}</Button>
        <Button>{buttonText}</Button>
      </ButtonContainer>
    </ContactContainer>
  );
};
