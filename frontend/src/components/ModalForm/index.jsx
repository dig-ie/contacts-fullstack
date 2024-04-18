import { FormContainer, StyledLabel } from "./styles";
import { Input } from "../Input";
import { PrimaryButton } from "../PrimaryButton";
export const ModalForm = () => {
  return (
    <FormContainer>
      <StyledLabel>Novo contato</StyledLabel>
      <Input placeholder="Informe o Nome..." />
      <Input placeholder="Informe o Número do contato..." />
      <PrimaryButton buttonText="Adicionar" />
    </FormContainer>
  );
};
