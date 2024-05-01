import { SearchBar } from "./components/SearchBar";
import { Contact } from "./components/Contact";
import { Button } from "./components/Button";
import { ModalForm } from "./components/ModalForm";
// import { ModalForm } from "./components/ModalForm";
import React, { useState, useEffect } from "react";
import PlusIcon from "./icons/plusIcon.jpg";
import axios from "axios";

function App() {
  const [modalAberto, setModalAberto] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({
    contactName: "",
    phoneNumber: "",
  });
  const [editingContact, setEditingContact] = useState(null);

  const abrirModal = () => {
    setModalAberto(true);
    console.log(modalAberto);
  };

  const fecharModal = () => {
    setModalAberto(false);
  };

  const handleEditClick = (key) => {
    setEditingContact(key);
    console.log(editingContact);
  };

  // ENVIANDO A REQUISIÇÃO DE PUT/PATCH PARA O BANCO DE DADOS
  const handleEditSubmit = async (editedData) => {
    try {
      // Enviar solicitação de edição para o backend
      const response = await axios.put(
        `http://localhost:3000/contacts/${editingContact}`,
        editedData
      );
      // Atualizar lista de contatos após a edição
      // (atualização depende da estrutura de dados e do método usado)
      console.log("Contato editado com sucesso:", response.data);
      // Desativar o modo de edição
      setEditingContact(null);
    } catch (error) {
      console.error("Erro ao editar contato:", error);
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
        console.log(data);
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
        <Button onClick={abrirModal} buttonText={"abrir"}></Button>
        {modalAberto && (
          <ModalForm fecharModal={fecharModal} closeBtnbackgroundColor="red" />
        )}
      </>
      {contacts.map((contact) => (
        <Contact
          key={contact._id}
          name={contact.contactName}
          number={contact.phoneNumber}
          buttonImg={PlusIcon}
          onClick1={handleEditClick}
        />
      ))}
      <Contact />
      {editingContact != null && <ModalForm></ModalForm>}
      {/* <ModalForm /> */}
    </>
  );
}

export default App;
