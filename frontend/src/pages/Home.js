import { SearchBar } from "../components/SearchBar";
import { Contact } from "../components/Contact";
import { Button } from "../components/Button";
import { ModalForm } from "../components/ModalForm";
import React, { useState, useEffect } from "react";
import EditIcon from "../icons/editIcon.png";

export const Home = () => {
  // STATES
  const [modalAberto, setModalAberto] = useState(false);
  const [editModalAberto, setEditModalAberto] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  const handleEditClick = (key) => {
    setEditingContact(key);
    setEditModalAberto(true);
  };

  const fetchContacts = async () => {
    try {
      const response = await fetch("http://localhost:3000/contacts/"); // Corrigido o URL
      if (!response.ok) {
        throw new Error("Falha ao buscar contatos");
      }
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error("Erro ao buscar contatos:", error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []); // Dependência vazia para evitar chamadas de API redundantes

  useEffect(() => {
    if (editModalAberto && editingContact !== null) {
      // Aqui, poderia ser adicionado algum efeito ou lógica se necessário quando o modal de edição é aberto.
    }
  }, [editModalAberto, editingContact]);

  return (
    <>
      <SearchBar placeholder="Search" />
      <Button
        onClick={() => {
          setModalAberto(true);
        }}
        buttonText={"abrir"}
      />
      {modalAberto && (
        <ModalForm
          formType="creating"
          fecharModal={() => {
            setModalAberto(false);
          }}
          closeBtnbackgroundColor="red"
        />
      )}
      {contacts.map((contact) => (
        <Contact
          key={contact._id}
          name={contact.contactName}
          number={contact.phoneNumber}
          editButtonImg={EditIcon}
          onClick1={() => {
            handleEditClick(contact._id);
          }}
        />
      ))}
      {editModalAberto && editingContact !== null && (
        <ModalForm
          formType="editing"
          fecharModal={() => {
            setEditModalAberto(false);
          }}
          closeBtnbackgroundColor="red"
          editingContact={editingContact}
        />
      )}
    </>
  );
};
