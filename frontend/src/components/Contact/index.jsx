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
} from "./styles";
import React, { useState } from "react";
import { Button } from "../Button";

export const Contact = ({
  photo,
  name,
  number,
  buttonText,
  editButtonImg,
  onClick1,
  onClick2,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked); // Atualiza o estado isChecked
    console.log("Checkbox está marcada:", event.target.checked);
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
            <ProfileImage alt="Profile" />
          )}
        </ImageContainer>
        <ContactDetails>
          <ContactName>{name}</ContactName>
          <ContactNumber>{number}</ContactNumber>
        </ContactDetails>
      </LeftContainer>
      <ButtonContainer>
        <Button onClick={onClick1} />
        <Button onClick={onClick2}>{buttonText}</Button>
      </ButtonContainer>
    </ContactContainer>
  );
};
