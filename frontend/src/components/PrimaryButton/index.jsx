import { StyledPrimaryButton } from "./styles";

export const PrimaryButton = ({
  buttonText = "aa",
  onClick,
  closeBtnbackgroundColor,
}) => {
  return (
    <StyledPrimaryButton
      style={{ backgroundColor: closeBtnbackgroundColor }}
      onClick={onClick}
    >
      {buttonText}
    </StyledPrimaryButton>
  );
};
