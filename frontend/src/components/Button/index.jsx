import { ButtonStyled, ButtonImg } from "./styles";
export const Button = ({ onClick, editButtonIcon }) => {
  return (
    <>
      <ButtonStyled onClick={onClick}>
        <ButtonImg src={editButtonIcon} />
      </ButtonStyled>
      {/* <ButtonImg src={buttonImg} /> */}
    </>
  );
};
