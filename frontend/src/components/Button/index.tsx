import { ButtonStyled, ButtonImg } from "./styles";
import {ButtonProps} from "./types"
export const Button:React.FC<ButtonProps> = ({ onClick, editButtonIcon, color }) => {
  return (
    <>
      <ButtonStyled color={color} onClick={onClick}>
        <ButtonImg src={editButtonIcon} />
      </ButtonStyled>
      {/* <ButtonImg src={buttonImg} /> */}
    </>
  );
};
