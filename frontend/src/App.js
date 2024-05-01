import { SearchBar } from "./components/SearchBar";
import { Contact } from "./components/Contact";
import { Button } from "./components/Button";
import { ModalForm } from "./components/ModalForm";
// import { ModalForm } from "./components/ModalForm";
import React, { useState, useEffect } from "react";
import PlusIcon from "./icons/plusIcon.jpg";
import axios from "axios";

function App() {
  //STATES
  const [modalAberto, setModalAberto] = useState(false);
  const [editModalAberto, setEditModalAberto] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  const handleEditClick = (key) => {
    setEditingContact(key);
    // console.log(editingContact);
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
        // Atualiza o estado com os contatos recebidos **
        setContacts(data);
      } catch (error) {
        console.error("Erro ao buscar contatos:", error);
      }
    };
    // Chama a função para buscar os contatos
    fetchContacts();
  }); // Chama apenas uma vez, quando o componente é montado

  // useEffect(() => {
  //   if (editModalAberto && editingContact !== null) {
  //     // Definir editingContact como null após ModalForm receber o valor atual
  //     setEditingContact(null);
  //   }
  // }, [editModalAberto, editingContact]);

  return (
    <>
      <SearchBar placeholder="Search" />
      <>
        {/* BOTÃO ADICIONAR CONTATO - "abrir" */}
        <Button
          onClick={() => {
            setModalAberto(!modalAberto);
          }}
          buttonText={"abrir"}
        ></Button>
        {modalAberto && (
          <ModalForm
            formType="creating"
            fecharModal={() => {
              setModalAberto(!modalAberto);
            }}
            closeBtnbackgroundColor="red"
          />
        )}
      </>
      {/* LISTA CONTATOS - mapeando array do STATE*/}
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

      {/* MODAL DE EDIÇÃO DE CONTATO */}
      {editingContact !== null && editModalAberto ? (
        <ModalForm
          formType="editing"
          fecharModal={() => {
            setEditModalAberto(!editModalAberto);
          }}
          closeBtnbackgroundColor="red"
          editingContact={editingContact}
        />
      ) : null}
    </>
  );
}

export default App;
