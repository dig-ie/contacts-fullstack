import {
  ContactContainer,
  UserInfoContainer,
  UserImg,
  TextInfoContainer,
  NameText,
  NumberText,
  ButtonContainer,
} from "./styles";
import { ModalForm } from "../ModalForm";
import React, { useState } from "react";

import { Button } from "../Button";

export const Contact = ({ photo, name, number, buttonText, buttonImg }) => {
  const [modalAberto, setModalAberto] = useState(false);

  const abrirModal = () => {
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
  };
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
        <>
          <Button onClick={abrirModal} buttonImg={buttonImg}>
            {buttonText}
          </Button>
          {modalAberto && (
            <ModalForm
              fecharModal={fecharModal}
              closeBtnbackgroundColor="red"
            />
          )}
        </>
        <Button buttonImg={buttonImg}>{buttonText}</Button>
      </ButtonContainer>
    </ContactContainer>
  );
};
