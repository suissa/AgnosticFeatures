import React, { createContext, useState, useEffect } from "react";

interface IMessage {
  owner: string;
  text: string;
  datetime: string;
  type: string; // sender | receiver
}

interface IContact {
  id: number;
  name: string;
  messages: IMessage[];
}

export interface IContactMessages {
  [contactId: number]: IMessage[];
}

interface ChatContextProps {
  contacts: IContact[];
  selectedContact: number;
  messages: IMessage[];
  setSelectedContact: (id: number) => void;
  setMessages: React.Dispatch<React.SetStateAction<IMessage[]>>;
}

export const ChatContext = createContext<ChatContextProps | undefined>(undefined);

const contacts: IContact[] = [
  {
    id: 0,
    name: "Suissa",
    messages: [{ owner: "Suissa", text: "Ola", datetime: "10/10/2023, 09:00", type: "receiver" }],
  },
  {
    id: 1,
    name: "Suissa1",
    messages: [{ owner: "Suissa1", text: "Que Pasa?", datetime: "10/10/2023, 09:00", type: "receiver" }],
  },
  {
    id: 2,
    name: "Suissa2",
    messages: [{ owner: "Suissa2", text: "Como estas?", datetime: "10/10/2023, 09:00", type: "receiver" }],
  },
  {
    id: 3,
    name: "Suissa3",
    messages: [{ owner: "Suissa3", text: "Te quiero!", datetime: "10/10/2023, 09:00", type: "receiver" }],
  },
  {
    id: 4,
    name: "Suissa4",
    messages: [{ owner: "Suissa4", text: "Muchas gracias!", datetime: "10/10/2023, 09:00", type: "receiver" }],
  },
];

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedContact, setSelectedContact] = useState<number>(0);
  const [messages, setMessages] = useState<IMessage[]>(contacts[0].messages);

  useEffect(() => {
    // Atualiza as mensagens sempre que o contato selecionado mudar
    const currentContact = contacts.find((contact) => contact.id === selectedContact);
    setMessages(currentContact ? currentContact.messages : []);
  }, [selectedContact]);

  // Integrando o WebSocket
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:9515");

    socket.onmessage = (event) => {
      const newMessage: IMessage = JSON.parse(event.data);

      // Adiciona a nova mensagem ao contato atualmente selecionado
      setMessages((prev) => [...prev, newMessage]);
    };

    return () => {
      socket.close(); // Fecha o WebSocket ao desmontar o componente
    };
  }, [selectedContact]);

  return (
    <ChatContext.Provider
      value={{
        contacts,
        selectedContact,
        messages,
        setSelectedContact,
        setMessages,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
