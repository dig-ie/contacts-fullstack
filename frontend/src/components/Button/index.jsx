import { ButtonStyled, ButtonImg } from "./styles";
import EditIcon from "../../icons/pencilIcon.png";
export const Button = ({ onClick, buttonText, buttonImg }) => {
  return (
    <>
      <ButtonStyled onClick={onClick}>
        <ButtonImg src={EditIcon} />
      </ButtonStyled>
      {/* <ButtonImg src={buttonImg} /> */}
    </>
  );
};
