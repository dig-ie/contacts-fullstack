import { StyledInput } from "./styles";

export const Input = ({ placeholder, value, onChange }) => {
  return (
    <StyledInput placeholder={placeholder} value={value} onChange={onChange} />
  );
};
