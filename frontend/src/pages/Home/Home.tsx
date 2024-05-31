import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { NavBar } from '../../components/NavBar';
import axios from 'axios';
import { Contact } from '../../components/Contact';
import { ModalForm } from '../../components/ModalForm';
import { PrimaryButton } from '../../components/PrimaryButton';
import { Tab } from '../../components/Tab';

export const Home: React.FC = () => {
  // STATES
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [contacts, setContacts] = useState<any[]>([]); // Adicionei o tipo any[] para contacts
  const [selectedContacts, setSelectedContacts] = useState<any[]>([]);
  const [editingContact, setEditingContact] = useState<string>('');
  const [deletingContact, setDeletingContact] = useState<string>('');
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [number, setNumber] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [editingName, setEditingName] = useState<string>('');
  const [editingNumber, setEditingNumber] = useState<string>('');

  //Função para ao clicar no botão de editar no contato, abrir o modal de edição e definir o valor do state editingContact
  const handleEditClick = (key: string) => {
    setEditingContact(key);
    setEditModalOpen(true);
  };
  const handleDeleteClick = (key: string) => {
    setDeletingContact(key);
  };
  //
  const handleCheckboxChange = (id: string, isChecked: boolean) => {
    if (isChecked) {
      setSelectedContacts([...selectedContacts, id]);
    } else {
      setSelectedContacts(
        selectedContacts.filter(contactId => contactId !== id),
      );
    }
  };

  //POST FUNCTION
  const handleAddSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3000/contacts/post', {
        phoneNumber: number,
        contactName: name,
      });
      // Aqui você pode tratar a resposta se necessário
      console.log(response.data);
      // Feche o modal após o sucesso
      setName('');
      setNumber('');
      setModalOpen(false);
      fetchContacts();
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
          phoneNumber: editingNumber,
          contactName: editingName,
        },
      );
      // Atualizar lista de contatos após a edição
      // (atualização depende da estrutura de dados e do método usado)
      console.log('EDITING CONTACT MODAL', editingContact);
      console.log('Contato editado com sucesso:', response.data);
      // Desativar o modo de edição
      setEditingContact('');
      setEditingName('');
      setEditingNumber('');
      setEditModalOpen(false);
      fetchContacts();
    } catch (error) {
      console.error('Erro ao editar contato:', error);
    }
  };
  // Função para deletar contato
  const HandleDeleteContact = async (contactId: string) => {
    if (!contactId) {
      console.error('contactId is undefined or invalid');
      return;
    }

    console.log('CONTACTID HANDLEDELETE', contactId);

    try {
      // Fazendo a requisição DELETE para a rota /contacts/:id
      const response = await axios.delete(
        `http://localhost:3000/contacts/${contactId}`,
      );

      // Verificando se a requisição foi bem-sucedida (status 204 ou 200)
      if (response.status === 204 || response.status === 200) {
        console.log('Contato deletado com sucesso!');
        // Se necessário, você pode retornar algum dado da resposta
        return response.data;
      } else {
        console.error(`Erro inesperado: ${response.status}`);
      }
    } catch (error) {
      // Se houver algum erro na requisição, tratamos ele aqui
      console.error('Erro ao deletar contato:', error);
      // Você pode lançar o erro novamente ou tratá-lo de outra forma
      throw error;
    }
  };
  //FUNÇÃO PARA TRAZER OS CONTATOS DO BANCO DE DADOS
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
    HandleDeleteContact(deletingContact);
  }, [deletingContact]);

  useEffect(() => {
    console.log(selectedContacts);
  }, [selectedContacts]);

  return (
    <S.Body>
      <NavBar />
      <S.HomeContainer>
        <S.SideSectionContainer>
          <PrimaryButton
            color="rgb(82, 129, 206)"
            onClick={() => {
              setModalOpen(true);
            }}
            buttonText={'Novo contato'}
            disableHover={false}
          />
          <Tab tabName="Contatos" />
        </S.SideSectionContainer>
        <S.ContactsSectionContainer>
          <S.SectionTitle>Contatos</S.SectionTitle>
          {modalOpen && (
            <ModalForm
              formType="creating"
              saveButtonFunction={handleAddSubmit}
              closeButtonFunction={() => {
                setModalOpen(false);
              }}
              closeBtnColor="red"
              primaryBtnColor="rgb(82, 129, 206)"
              nameInputValue={name}
              nameInputOnchange={e => setName(e.target.value)}
              numberInputValue={number}
              numberInputOnchange={e => setNumber(e.target.value)}
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
                handleDeleteClick(contact._id);
              }}
              onCheckboxChange={handleCheckboxChange}
            />
          ))}
          {editModalOpen && editingContact !== '' && (
            <ModalForm
              formType="editing"
              saveButtonFunction={() => handleEditSubmit(editingContact)}
              closeButtonFunction={() => {
                setEditModalOpen(false);
              }}
              closeBtnColor="red"
              primaryBtnColor="rgb(82, 129, 206)"
              nameInputValue={editingName}
              nameInputOnchange={e => {
                console.log(e.target.value);
                setEditingName(e.target.value);
              }}
              numberInputValue={editingNumber}
              numberInputOnchange={e => setEditingNumber(e.target.value)}
            />
          )}
        </S.ContactsSectionContainer>
      </S.HomeContainer>
    </S.Body>
  );
};
