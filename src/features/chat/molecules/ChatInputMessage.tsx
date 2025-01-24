import React, { Dispatch, SetStateAction, useState } from "react";
import { Input } from "../../../shared/atoms/Input";
import { IMessage } from "../quarks/interfaces/IMessage";
import useWebSocket from "../hooks/useWebsocket";

interface ChatInputMessageProps {
  setMessages: Dispatch<SetStateAction<IMessage[]>>;
}

const getDatetime = () => {
  const date = new Date();
  const datetime = `${date.getDay()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
  return datetime;
};

const chatInputClasses = "mt-1 block w-full px-4 py-2 border border-gray-500 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500";

export const ChatInputMessage = ({ setMessages }: ChatInputMessageProps) => {
  const [message, setMessage] = useState<IMessage>({
    owner: "suissa",
    text: "",
    datetime: getDatetime(),
    type: "sender",
  });

  const { sendMessage } = useWebSocket(0, setMessages);


  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.stopPropagation();

    if (e.key === "Enter" && message.text.trim()) {
      const newMessage: IMessage = { ...message, datetime: getDatetime() };
      setMessages(prev => [...prev, newMessage]);
      setMessage(prev => ({
        ...prev,
        text: "",
      }));


      // Enviar mensagem via WebSocket
      sendMessage(newMessage);

    }
  };

  return (
    <div className="w-full">
      <Input
        type="text"
        value={message?.text}
        placeholder="Escreva sua mensagem..."
        className={chatInputClasses}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setMessage(prev => ({
            ...prev,
            text: e.target.value,
          }))
        }
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};