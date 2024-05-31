import { useState } from 'react';
import axios from 'axios';
import {
  FormContainer,
  StyledLabel,
  ButtonContainer,
  ModalWrapper,
} from './styles';
import { Input } from '../Input';
import { PrimaryButton } from '../PrimaryButton';
import { ModalFormProps } from './types';
export const ModalForm: React.FC<ModalFormProps> = ({
  saveButtonFunction,
  closeButtonFunction,
  primaryBtnColor,
  closeBtnColor,
  formType,
  editingContact,
  nameInputValue,
  numberInputValue,
  nameInputOnchange,
  numberInputOnchange

}) => {
  return (
    <ModalWrapper>
      {/* Formulário para POST -------------------*/}
        <FormContainer>
          <StyledLabel>Novo contato</StyledLabel>
          <Input
            placeholder="Informe o Nome..."
            value={nameInputValue}
            onChange={nameInputOnchange}
          />
          <Input
            placeholder="Informe o Número do contato..."
            value={numberInputValue}
            onChange={numberInputOnchange}
          />
          <PrimaryButton
            buttonText="Adicionar"
            onClick={saveButtonFunction}
            color={primaryBtnColor}
            disableHover={true}
          />
          {/* BOTÃO DE FECHAR - CLOSE BUTTON */}
          <PrimaryButton
            buttonText="Fechar"
            onClick={closeButtonFunction}
            color={closeBtnColor}
            disableHover={true}
          />
        </FormContainer>
    </ModalWrapper>
  );
};
