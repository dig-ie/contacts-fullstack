import { useState } from 'react';
import axios from 'axios';
import {
  FormContainer,
  StyledLabel,
  ButtonContainer,
  ModalWrapper,
} from './styles';
import { Input } from '../Input';
import { PrimaryButton } from '../PrimaryButton';
import { ModalFormProps } from './types';
export const ModalForm: React.FC<ModalFormProps> = ({
  fecharModal,
  primaryBtnColor,
  closeBtnColor,
  formType,
  editingContact,
}) => {
  //STATES
  const [numero, setNumero] = useState<string>('');
  const [nome, setNome] = useState<string>('');
  const [editingNome, setEditingNome] = useState<string>('');
  const [editingNumero, setEditingNumero] = useState<string>('');
  //POST FUNCTION
  const handleAdicionarClick = async () => {
    try {
      const response = await axios.post('http://localhost:3000/contacts/post', {
        phoneNumber: numero,
        contactName: nome,
      });
      // Aqui você pode tratar a resposta se necessário
      console.log(response.data);
      // Feche o modal após o sucesso
      fecharModal();
    } catch (error) {
      // Aqui você pode tratar o erro
      console.error('Erro ao adicionar contato:', error);
    }
  };
  //FUNÇÃO PARA ENVIAR O PUT (EDIÇÃO) DO CONTATO PARA O BANCO
  const handleEditSubmit = async (editingContact: string | undefined) => {
    try {
      // Enviar solicitação de edição para o backend
      const response = await axios.put(
        `http://localhost:3000/contacts/${editingContact}`,
        // editedData
        {
          phoneNumber: editingNumero,
          contactName: editingNome,
        },
      );
      // Atualizar lista de contatos após a edição
      // (atualização depende da estrutura de dados e do método usado)
      console.log('EDITING CONTACT MODAL', editingContact);
      console.log('Contato editado com sucesso:', response.data);
      // Desativar o modo de edição
      // setEditingContact(null);  ---------------------------------------------------
    } catch (error) {
      console.error('Erro ao editar contato:', error);
    }
  };

  return (
    <ModalWrapper>
      {/* Formulário para POST -------------------*/}
      {formType === 'creating' && (
        <FormContainer>
          <StyledLabel>Novo contato</StyledLabel>
          <Input
            placeholder="Informe o Nome..."
            value={nome}
            onChange={e => setNome(e.target.value)}
          />
          <Input
            placeholder="Informe o Número do contato..."
            value={numero}
            onChange={e => {
              console.log(e.target.value); // Imprime o novo valor de numero
              setNumero(e.target.value);
            }}
          />
          <PrimaryButton
            buttonText="Adicionar"
            onClick={handleAdicionarClick}
            color={primaryBtnColor}
            disableHover={true}
          />
          {/* BOTÃO DE FECHAR - CLOSE BUTTON */}
          <PrimaryButton
            buttonText="Fechar"
            onClick={fecharModal}
            color={closeBtnColor}
            disableHover={true}
          />
        </FormContainer>
      )}
      {/* Formulário para EDITAR CONTATO ---------------------------*/}
      {formType === 'editing' && (
        <FormContainer>
          <StyledLabel>Novo contato</StyledLabel>
          <Input
            placeholder="Informe o Nome..."
            value={editingNome}
            onChange={e => {
              console.log(e.target.value); // Imprime o novo valor de numero
              setEditingNome(e.target.value);
            }}
          />
          <Input
            placeholder="Informe o Número do contato..."
            value={editingNumero}
            onChange={e => {
              console.log(e.target.value); // Imprime o novo valor de numero
              setEditingNumero(e.target.value);
            }}
          />
          <PrimaryButton
            color={primaryBtnColor}
            buttonText="Salvar"
            onClick={() => {
              handleEditSubmit(editingContact);
            }}
            disableHover={true}
          />
          {/* BOTÃO DE FECHAR - CLOSE BUTTON */}
          <PrimaryButton
            buttonText="Fechar"
            onClick={fecharModal}
            color={closeBtnColor}
            disableHover={true}
          />
        </FormContainer>
      )}
    </ModalWrapper>
  );
};
