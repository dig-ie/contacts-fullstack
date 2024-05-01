import { SearchBar } from "./components/SearchBar";
import { Contact } from "./components/Contact";
import { Button } from "./components/Button";
import { ModalForm } from "./components/ModalForm";
// import { ModalForm } from "./components/ModalForm";
import React, { useState, useEffect } from "react";
import PlusIcon from "./icons/plusIcon.jpg";
import axios from "axios";

function App() {
  const [editingNumero, setEditingNumero] = useState("");
  const [editingNome, setEditingNome] = useState("");
  const [modalAberto, setModalAberto] = useState(false);
  const [editModalAberto, setEditModalAberto] = useState(false);
  const [contacts, setContacts] = useState([]);

  const [editingContact, setEditingContact] = useState(null);

  const handleEditClick = (key) => {
    setEditingContact(key);
    console.log(editingContact);
  };

  // FUNÇÃO PARA ENVIAR A REQUISIÇÃO DE PUT/PATCH PARA O BANCO DE DADOS
  // const handleEditSubmit = async (editedData) => {
  //   try {
  //     // Enviar solicitação de edição para o backend
  //     const response = await axios.put(
  //       `http://localhost:3000/contacts/${editingContact}`,
  //       editedData
  //     );
  //     // Atualizar lista de contatos após a edição
  //     // (atualização depende da estrutura de dados e do método usado)
  //     console.log("Contato editado com sucesso:", response.data);
  //     // Desativar o modo de edição
  //     setEditingContact(null);
  //   } catch (error) {
  //     console.error("Erro ao editar contato:", error);
  //   }
  // };
  const handleUpdateClick = async () => {
    try {
      const response = await axios.put(
        "http://localhost:3000/contacts/update",
        {
          phoneNumber: editingContact,
          contactName: editingNome,
        }
      );
      // Aqui você pode tratar a resposta se necessário
      console.log(response.data);
      // Feche o modal após o sucesso
      fecharModal();
    } catch (error) {
      // Aqui você pode tratar o erro
      console.error("Erro ao atualizar contato:", error);
    }
  };

  useEffect(() => {
    // Função assíncrona para buscar os contatos
    const fetchContacts = async () => {
      try {
        // Faz a requisição para o backend
        const response = await fetch("http://localhost:3000/contacts/");
        if (!response.ok) {
          throw new Error("Falha ao buscar contatos");
        }
        // Converte a resposta para JSON
        const data = await response.json();
        // Atualiza o estado com os contatos recebidos
        setContacts(data);
      } catch (error) {
        console.error("Erro ao buscar contatos:", error);
      }
    };
    // Chama a função para buscar os contatos
    fetchContacts();
  }, []); // Chama apenas uma vez, quando o componente é montado

  return (
    <>
      <SearchBar placeholder="Search" />
      <>
        <Button
          onClick={() => {
            setModalAberto(!modalAberto);
          }}
          buttonText={"abrir"}
        ></Button>
        {modalAberto && (
          <ModalForm
            fecharModal={() => {
              setModalAberto(!modalAberto);
            }}
            closeBtnbackgroundColor="red"
          />
        )}
      </>
      {contacts.map((contact) => (
        <Contact
          key={contact._id}
          name={contact.contactName}
          number={contact.phoneNumber}
          buttonImg={PlusIcon}
          onClick1={() => {
            handleEditClick(contact._id);
            setEditModalAberto(!editModalAberto);
          }}
        />
      ))}
      <Contact />
      {editingContact != null && editModalAberto ? (
        <ModalForm
          fecharModal={() => {
            setEditModalAberto(!editModalAberto);
          }}
          closeBtnbackgroundColor="red"
          submitEditedData={() => {
            handleEditSubmit();
          }}
        />
      ) : null}
    </>
  );
}

export default App;
