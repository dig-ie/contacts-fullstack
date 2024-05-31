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
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button } from '../Button';
import { ContactProps } from './types';
export const Contact: React.FC<ContactProps> = ({
  photo,
  name,
  number,
  buttonText,
  onClick1,
  onClick2,
  key,
  onCheckboxChange,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheckboxChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setIsChecked(event.target.checked); // Atualiza o estado isChecked
    console.log('Checkbox está marcada:', event.target.checked);
    //selectedContacts array push
    onCheckboxChange(key, event.target.checked);
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
            <CheckBox type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
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
            <Button editButtonIcon={'null'} color="red" onClick={onClick2}>
              {buttonText}
            </Button>
          </>
        ) : null}
      </ButtonContainer>
    </ContactContainer>
  );
};
