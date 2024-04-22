import { FormContainer, StyledLabel, ButtonContainer } from "./styles";
import { Input } from "../Input";
import { PrimaryButton } from "../PrimaryButton";
export const ModalForm = ({ fecharModal, closeBtnbackgroundColor }) => {
  return (
    <>
      <FormContainer>
        <StyledLabel>Novo contato</StyledLabel>
        <Input placeholder="Informe o Nome..." />
        <Input placeholder="Informe o Número do contato..." />
        <ButtonContainer>
          <PrimaryButton buttonText="Adicionar" />
          <PrimaryButton
            buttonText="Fechar"
            onClick={fecharModal}
            closeBtnbackgroundColor={closeBtnbackgroundColor}
          />
        </ButtonContainer>
      </FormContainer>
      {/* <span className="fechar" onClick={fecharModal}>
        FECHAR
      </span> */}
    </>
  );
};
