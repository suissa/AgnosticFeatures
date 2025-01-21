import { ReactNode, useEffect, useState } from "react"
import { ChatInputMessage } from "../molecules/ChatInputMessage"
import { ChatMessage } from "../molecules/ChatMessage";
import { IMessage } from "../molecules/ChatInputMessage";
export const Chat = (): ReactNode => {
  const [ messages, setMessages ] = useState<IMessage[]>([]);

  useEffect(() => {
    setMessages([
      {
        owner: "Suissa",
        text: "Ola",
        datetime: "10/10/2023"
      }
    ])
  }, [])
  // const onSubmit = (message: Message) => {
  //   setMessages((prev) => [ ...prev, message ]);
  // }

  useEffect(() => {
    console.log("messages: ", messages)
  }, [messages])

  return (
    <div className="w-full bg-white">
      <div>
        <ul>
          {messages && messages.map((message) => (
            <ChatMessage text={message.text} owner={message.owner} datetime={message.datetime} />
          ))}
        </ul>
      </div>
      <div>
        <ChatInputMessage setMessages={setMessages}></ChatInputMessage>
      </div>
    </div>
  )
} 