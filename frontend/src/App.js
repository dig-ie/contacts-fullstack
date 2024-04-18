import { SearchBar } from "./components/SearchBar";
import { Contact } from "./components/Contact";
import { ModalForm } from "./components/ModalForm";
import React, { useState, useEffect } from "react";

function App() {
  const [contacts, setContacts] = useState([]);

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

  // Renderiza os contatos na sua interface
  return (
    <>
      <SearchBar placeholder="Search" />
      {contacts.map((contact) => (
        <Contact
          key={contact._id}
          name={contact.contactName}
          number={contact.phoneNumber}
        />
      ))}
      <Contact/>
      <ModalForm />
    </>
  );
}

export default App;
