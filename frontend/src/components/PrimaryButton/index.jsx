import { StyledPrimaryButton } from "./styles";

export const PrimaryButton = ({
  buttonText = "aa",
  onClick,
  closeBtnbackgroundColor,
  color = null,
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
