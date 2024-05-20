import {
  ContactContainer,
  LeftContainer,
  ImageContainer,
  ProfileImage,
  CheckBox,
  ContactDetails,
  ContactName,
  ContactNumber,
  ButtonContainer,
} from './styles';
import axios from 'axios';
import React, { ChangeEvent, useState } from 'react';
import { Button } from '../Button';
import { ContactProps } from './types';
export const Contact: React.FC<ContactProps> = ({
  photo,
  name,
  number,
  buttonText,
  onClick1,
  onClick2,
  deletingContact,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked); // Atualiza o estado isChecked
    console.log('Checkbox está marcada:', event.target.checked);
  };

  const deleteContact = async (contactId: string | undefined) => {
    try {
      // Fazendo a requisição DELETE para a rota /contacts/:id
      const response = await axios.delete(
        `http://localhost:3000/contacts/${contactId}`,
      );

      // Verificando se a requisição foi bem-sucedida (status 200)
      if (response.status === 200) {
        console.log('Contato deletado com sucesso!');
        // Se necessário, você pode retornar algum dado da resposta
        return response.data;
      }
    } catch (error) {
      // Se houver algum erro na requisição, tratamos ele aqui
      console.error('Erro ao deletar contato:', error);
      // Você pode lançar o erro novamente ou tratá-lo de outra forma
      throw error;
    }
  };

  return (
    <ContactContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      isChecked={isChecked}
    >
      <LeftContainer>
        <ImageContainer>
          {isHovered || isChecked ? (
            <CheckBox
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
          ) : (
            <ProfileImage
              alt="Profile"
              src="https://cdn.icon-icons.com/icons2/3708/PNG/512/man_person_face_people_beard_avatar_icon_230021.png"
            />
          )}
        </ImageContainer>
        <ContactDetails>
          <ContactName>{name}</ContactName>
          <ContactNumber>{number}</ContactNumber>
        </ContactDetails>
      </LeftContainer>
      <ButtonContainer>
        {isHovered ? (
          <>
            <Button onClick={onClick1} editButtonIcon={'null'} color="yellow" />
            <Button
              onClick={() => deleteContact(deletingContact)}
              editButtonIcon={'null'}
              color="red"
            >
              {buttonText}
            </Button>
          </>
        ) : null}
      </ButtonContainer>
    </ContactContainer>
  );
};
