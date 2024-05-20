import { StyledInput } from "./styles";
import { InputProps } from "./types";
export const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  return (
    <StyledInput placeholder={placeholder} value={value} onChange={onChange} />
  );
};
