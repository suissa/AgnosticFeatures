import { ReactNode, useEffect, useState } from "react"
import { ChatInputMessage } from "../molecules/ChatInputMessage"
import { ChatMessage } from "../molecules/ChatMessage";
import { IMessage } from "../molecules/ChatInputMessage";

const roundAndPad = "px-6  py-2 rounded rounded-xl"
const senderClass = `flex flex-row-reverse bg-blue-500 text-white  
justify-self-end mr-6 mb-6 ${roundAndPad}`;
const receiverClass = `flex flex-row bg-gray-200 text-gray-800  
justify-self-start ml-6 mb-6 mr-6 mb-6 ${roundAndPad}`;
console.log(senderClass)
export const Chat = (): ReactNode => {
  const [ messages, setMessages ] = useState<IMessage[]>([]);

  useEffect(() => {
    setMessages([
      {
        owner: "Suissa",
        text: "Ola",
        datetime: "10/10/2023, 09:00",
        type: "receiver"
      }
    ])
  }, [])

  return (
    <div className="w-full bg-white">
      <div>
        <ul>
          {messages && messages.map((message) => (
            <div>
              <ChatMessage 
                text={message.text} 
                owner={message.owner} 
                datetime={message.datetime}
                messageClass={message.type === "sender" ? senderClass : receiverClass}
                datetimeClass="text-xs text-gray-500 text-center"
              />
            </div>
          ))}
        </ul>
      </div>
      <div>
        <ChatInputMessage setMessages={setMessages}></ChatInputMessage>
      </div>
    </div>
  )
} 