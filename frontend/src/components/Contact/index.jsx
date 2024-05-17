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
            <Button onClick={onClick1} />
            <Button
              onClick={onClick2}
              editButtonIcon="https://cdn.icon-icons.com/icons2/2778/PNG/512/create_edit_modify_icon_176960.png"
            >
              {buttonText}
            </Button>
          </>
        ) : null}
      </ButtonContainer>
    </ContactContainer>
  );
};
