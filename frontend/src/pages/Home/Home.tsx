import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { NavBar } from '../../components/NavBar';
import { Contact } from '../../components/Contact';
import { ModalForm } from '../../components/ModalForm';
import { PrimaryButton } from '../../components/PrimaryButton';
import { Tab } from '../../components/Tab';

export const Home: React.FC = () => {
  // STATES
  const [modalAberto, setModalAberto] = useState<boolean>(false);
  const [editModalAberto, setEditModalAberto] = useState<boolean>(false);
  const [contacts, setContacts] = useState<any[]>([]); // Adicionei o tipo any[] para contacts
  const [editingContact, setEditingContact] = useState<string>('');
  const [deletingContact, setDeletingContact] = useState<string>('');

  const handleEditClick = (key: string) => {
    setEditingContact(key);
    setEditModalAberto(true);
  };

  // TODO: DELETE FUNCTION (corrigi o comentário)
  const handleDeleteClick = (key: string) => {
    setDeletingContact(key);
    setEditModalAberto(true);
  };

  const fetchContacts = async () => {
    try {
      const response = await fetch('http://localhost:3000/contacts/');
      if (!response.ok) {
        throw new Error('Falha ao buscar contatos');
      }
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error('Erro ao buscar contatos:', error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []); // Dependência vazia para evitar chamadas de API redundantes

  useEffect(() => {
    if (editModalAberto && editingContact !== '') {
      // Adicionado algum efeito ou lógica se necessário quando o modal de edição é aberto.
    }
  }, [editModalAberto, editingContact]);

  return (
    <S.Body>
      <NavBar />
      <S.HomeContainer>
        <S.SideSectionContainer>
          <PrimaryButton
            color="rgb(82, 129, 206)"
            onClick={() => {
              setModalAberto(true);
            }}
            buttonText={'Novo contato'}
            disableHover={false}
          />
          <Tab tabName="Contatos" />
        </S.SideSectionContainer>
        <S.ContactsSectionContainer>
          <S.SectionTitle>Contatos</S.SectionTitle>
          {modalAberto && (
            <ModalForm
              formType="creating"
              fecharModal={() => {
                setModalAberto(false);
              }}
              closeBtnColor="red"
              primaryBtnColor="rgb(82, 129, 206)"
            />
          )}
          {contacts.map(contact => (
            <Contact
              key={contact._id}
              name={contact.contactName}
              number={contact.phoneNumber}
              onClick1={() => {
                handleEditClick(contact._id);
              }}
              onClick2={() => {
                handleDeleteClick(contact._id); // Provavelmente handleDeleteClick aqui
              }}
            />
          ))}
          {editModalAberto && editingContact !== '' && (
            <ModalForm
              formType="editing"
              fecharModal={() => {
                setEditModalAberto(false);
              }}
              closeBtnColor="red"
              primaryBtnColor="rgb(82, 129, 206)"
            />
          )}
        </S.ContactsSectionContainer>
      </S.HomeContainer>
    </S.Body>
  );
};
