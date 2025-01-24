import React, { createContext, useContext, useState } from "react";

interface IMessage {
  owner: string;
  text: string;
  datetime: string;
  type: string; // sender | receiver
}

interface ChatContextProps {
  selectedContact: number;
  messages: IMessage[];
  setSelectedContact: React.Dispatch<React.SetStateAction<number>>;
  setMessages: React.Dispatch<React.SetStateAction<IMessage[]>>;
}

const ChatContext = createContext<ChatContextProps | undefined>(undefined);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedContact, setSelectedContact] = useState<number>(0);
  const [messages, setMessages] = useState<IMessage[]>([]);

  return (
    <ChatContext.Provider value={{ selectedContact, setSelectedContact, messages, setMessages }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) throw new Error("useChatContext must be used within a ChatProvider");
  return context;
};
