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

const getOwner = () => {
  return "suissa";
};

const chatInputClasses = "mt-1 block w-full px-4 py-2 border border-gray-500 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"

export const ChatInputMessage = ({ setMessages }: ChatInputMessageProps) => {
  const [message, setMessage] = useState<IMessage>();
  return (
    <div>
      <Input
        type="text"
        value=""
        className={chatInputClasses}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setMessage({
            owner: getOwner(),
            text: e.target.value,
            datetime: getDatetime(),
            type: "sender",
          })
        }
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          e.stopPropagation();
          if (e.key === "Enter") {
            if (message) {
              setMessages((prev) => [...prev, message]);
            }
          }
        }}
      ></Input>
    </div>
  );
};
