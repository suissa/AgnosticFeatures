import React, { Dispatch, SetStateAction, useState } from "react";
import { Input } from "../../../shared/atoms/Input";
import { IMessage } from "../quarks/interfaces/IMessage";
import useWebSocket from "../hooks/useWebsocket";
import { FacebookTheme } from "../quarks/themes/FacebookTheme";
import EmojiPicker, { EmojiClickData, EmojiStyle } from 'emoji-picker-react';

interface ChatInputMessageProps {
  setMessages: Dispatch<SetStateAction<IMessage[]>>;
}

const chatInputClasses = FacebookTheme.chatInputClasses;

const iconSVG = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16" id="emoji">
<path fill="#ccc" d="M8,2 C11.3137,2 14,4.68629 14,8 C14,11.3137 11.3137,14 8,14 C4.68629,14 2,11.3137 2,8 C2,4.68629 4.68629,2 8,2 Z M8,3 C5.23858,3 3,5.23858 3,8 C3,10.7614 5.23858,13 8,13 C10.7614,13 13,10.7614 13,8 C13,5.23858 10.7614,3 8,3 Z M9.86353,9.66654 C10.0477,9.46078 10.3638,9.44327 10.5696,9.62743 C10.7753,9.8116 10.7928,10.1277 10.6087,10.3335 C9.96851,11.0487 9.03663,11.4999949 8,11.4999949 C6.96337,11.4999949 6.03148,11.0487 5.39132,10.3335 C5.20716,10.1277 5.22467,9.8116 5.43043,9.62743 C5.6362,9.44327 5.95229,9.46078 6.13646,9.66654 C6.59494,10.1788 7.25963,10.4999949 8,10.4999949 C8.74037,10.4999949 9.40505,10.1788 9.86353,9.66654 Z M6.25,6.25 C6.66421,6.25 7,6.58579 7,7 C7,7.41421 6.66421,7.75 6.25,7.75 C5.83579,7.75 5.5,7.41421 5.5,7 C5.5,6.58579 5.83579,6.25 6.25,6.25 Z M9.75,6.25 C10.1642,6.25 10.5,6.58579 10.5,7 C10.5,7.41421 10.1642,7.75 9.75,7.75 C9.33579,7.75 9,7.41421 9,7 C9,6.58579 9.33579,6.25 9.75,6.25 Z"></path>
</svg>

const getDatetime = () => {
  const date = new Date();
  const datetime = `${date.getDay()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
  return datetime;
};

export const ChatInputMessage = ({ setMessages }: ChatInputMessageProps) => {
  const [showPicker, setShowPicker] = useState(false);
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

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    setMessage((prev) => ({ ...prev, text: prev.text + emojiData.emoji})); // Adiciona o emoji ao texto
    setShowPicker(false); // Fecha o picker após selecionar
  };

  return (
    <>
      <div className="w-full relative">
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
        <button
          type="button"
          onClick={() => setShowPicker((prev) => !prev)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2"
        >

          {iconSVG}
        </button>
      </div>
      {showPicker && (
        <div className="absolute bottom-12 right-0">
          <EmojiPicker onEmojiClick={handleEmojiClick} emojiStyle={EmojiStyle.FACEBOOK} />
        </div>
      )}
    </>
  );
};