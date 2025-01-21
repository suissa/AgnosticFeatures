import { ReactNode, useEffect, useRef, useState } from "react";
import { ChatInputMessage } from "../molecules/ChatInputMessage";
import { ChatMessage } from "../molecules/ChatMessage";
import { IMessage } from "../molecules/ChatInputMessage";

const FacebookTheme = {
  senderClass: `flex flex-row-reverse bg-blue-500 text-white  
    justify-self-end mr-6 mb-6 px-6 py-2 rounded rounded-xl`,
  receiverClass: `flex flex-row bg-gray-200 text-gray-800  
    justify-self-start ml-6 mb-6 mr-6 mb-6 px-6 py-2 rounded rounded-xl`,
  datetimeClass: "text-xs text-gray-500 text-center",
};

const getDatetime = () => {
  const date = new Date();
  const datetime = `${date.getDay()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
  return datetime;
};

export const Chat = (): ReactNode => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    setMessages([{
      owner: "Suissa",
      text: "Ola",
      datetime: "10/10/2023, 09:00",
      type: "receiver"
    }]);
  }, []);

  const addAutoReply = (userMessage: IMessage) => {
    setTimeout(() => {
      const autoReply: IMessage = {
        owner: "Bot",
        text: `Resposta automática para: ${userMessage.text}`,
        datetime: getDatetime(),
        type: "receiver"
      };
      
      setMessages(prev => [...prev, autoReply]);
    }, 1000);
  };

  useEffect(() => {
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage.type === "sender") {
        addAutoReply(lastMessage);
      }
    }
  }, [messages]);

  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      const container = messagesContainerRef.current;
      container.scrollTop = container.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="w-full bg-white fixed top-0">
      <div 
        className="flex flex-col-reverse h-[calc(100vh-60px)] overflow-y-auto"
        ref={messagesContainerRef}
      >
        <div className="flex flex-col">
          {messages && messages.map((message, index) => (
            <div key={index}>
              <ChatMessage 
                text={message.text} 
                owner={message.owner} 
                datetime={message.datetime}
                messageClass={message.type === "sender" ? FacebookTheme.senderClass : FacebookTheme.receiverClass}
                datetimeClass={FacebookTheme.datetimeClass}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="fixed bottom-3 left-1/2 -translate-x-1/2 w-[calc(100%-40px)]">
        <ChatInputMessage setMessages={setMessages} />
      </div>
    </div>
  );
};