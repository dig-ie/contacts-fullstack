import { useState } from "react";
import axios from "axios";
import { FormContainer, StyledLabel, ButtonContainer } from "./styles";
import { Input } from "../Input";
import { PrimaryButton } from "../PrimaryButton";

export const ModalForm = ({ fecharModal, closeBtnbackgroundColor }) => {
  const [numero, setNumero] = useState("");
  const [nome, setNome] = useState("");

  const handleAdicionarClick = async () => {
    try {
      const response = await axios.post("http://localhost:3000/contacts/post", {
        phoneNumber: numero,
        contactName: nome,
      });
      // Aqui você pode tratar a resposta se necessário
      console.log(response.data);
      // Feche o modal após o sucesso
      fecharModal();
    } catch (error) {
      // Aqui você pode tratar o erro
      console.error("Erro ao adicionar contatoo:", error);
    }
  };

  return (
    <>
      <FormContainer>
        <StyledLabel>Novo contato</StyledLabel>
        <Input
          placeholder="Informe o Nome..."
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <Input
          placeholder="Informe o Número do contato..."
          value={numero}
          onChange={(e) => {
            console.log(e.target.value); // Imprime o novo valor de numero
            setNumero(e.target.value);
          }}
        />
        {/* <ButtonContainer> */}
        <PrimaryButton buttonText="Adicionar" onClick={handleAdicionarClick} />
        {/* BOTÃO DE FECHAR - CLOSE BUTTON */}
        <PrimaryButton
          buttonText="Fechar"
          onClick={fecharModal}
          closeBtnbackgroundColor={closeBtnbackgroundColor}
        />
        {/* </ButtonContainer> */}
      </FormContainer>
      {/* <span className="fechar" onClick={fecharModal}>
        FECHAR
      </span> */}
    </>
  );
};
