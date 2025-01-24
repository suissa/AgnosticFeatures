import { ReactNode, useEffect, useRef, useState } from "react";
import { ChatInputMessage } from "../molecules/ChatInputMessage";
import { ChatMessage } from "../molecules/ChatMessage";
import { IMessage } from "../molecules/ChatInputMessage";
import { FacebookTheme } from "../quarts/FacebookTheme";

const getDatetime = () => {
  const date = new Date();
  const datetime = `${date.getDay()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
  return datetime;
};

export const ChatMessages = (): ReactNode => {
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
    <div className=" fixed top-0 bg-white">
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
                type={message.type}
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