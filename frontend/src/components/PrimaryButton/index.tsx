import { StyledPrimaryButton } from "./styles";
import { PrimaryButtonProps, StyledPrimaryButtonProps } from "./types";
export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  buttonText = "aa",
  onClick,
  closeBtnbackgroundColor="red",
  color="blue",
  disableHover = false,
}) => {
  return (
    <StyledPrimaryButton
      onClick={onClick}
      color={color}
      disableHover={disableHover}
    >
      {buttonText}
    </StyledPrimaryButton>
  );
};
