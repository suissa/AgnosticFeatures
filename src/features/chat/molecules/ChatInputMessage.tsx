import React, { Dispatch, SetStateAction, useState } from "react";
import { Input } from "../../../shared/atoms/Input";
export interface IMessage {
  owner: string;
  text: string;
  datetime: string;
  type: string; // sender | receiver
  className?: string;
}
interface ChatInputMessageProps {
  onSubmit?: () => void;
  setMessages: Dispatch<SetStateAction<IMessage[]>>;
}

const getDatetime = () => {
  const date = new Date();
  const datetime = `${date.getDay()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
  return datetime;
};
const chatInputClasses = "mt-1 block w-full px-4 py-2 border border-gray-500 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"

export const ChatInputMessage = ({ setMessages }: ChatInputMessageProps) => {
  const [message, setMessage] = useState<IMessage>({
    owner: "suissa",
    text: "",
    datetime: getDatetime(),
    type: "sender",
  });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.stopPropagation();

    if (e.key === "Enter") {
      setMessages((prev) => [...prev, message]);
      setMessage((prev) => ({
        ...prev,
        text: "",
      }));
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
          setMessage({
            ...message,
            text: e.target.value,
          })
        }
        onKeyDown={handleKeyDown}
        
      ></Input>
    </div>
  );
};
