import {
  ContactContainer,
  UserInfoContainer,
  UserImg,
  TextInfoContainer,
  NameText,
  NumberText,
  ButtonContainer,
} from "./styles";
import React, { useState } from "react";
import { Button } from "../Button";

export const Contact = ({
  photo,
  name,
  number,
  buttonText,
  buttonImg,
  key,
  onClick1,
  onClick2,
}) => {
  //States

  // Defina o contato que está sendo editado

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
        <Button
          onClick={onClick1}
          buttonImg={buttonImg}
          buttonText={"editar"}
        />
        <Button onClick={onClick2} buttonImg={buttonImg}>
          {buttonText}
        </Button>
      </ButtonContainer>
    </ContactContainer>
  );
};
