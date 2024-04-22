import { ButtonStyled, ButtonImg } from "./styles";

export const Button = ({ onClick, buttonText, buttonImg }) => {
  return (
    <>
      <ButtonStyled onClick={onClick}>{buttonText}</ButtonStyled>
      <ButtonImg src={buttonImg} />
    </>
  );
};
