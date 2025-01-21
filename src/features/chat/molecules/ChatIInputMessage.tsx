import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "../../../shared/atoms/Button";
import { Input } from "../../../shared/atoms/Input";
export interface Message {
  owner: string;
  text: string;
  datetime: string;
}
interface ChatInputMessageProps {
  onSubmit?: () => void;
  setMessages: Dispatch<SetStateAction<Message[]>>;
}

export const ChatInputMessage = ({ setMessages }: ChatInputMessageProps) => {
  const [message, setMessage] = useState<Message>()
  const onSubmit = (e) => {
    e.preventDefault();
    setMessages((prev) => [...prev, message])
  }
  return (  
    <form onSubmit={onSubmit}>
      <div>
        <Input 
          type="text"  
          value="" 
          onChange={(e) => setMessage({owner: "eu", text: e.target.value, datetime: "33333"})}></Input>
      </div>
      <Button type="submit">Enviar</Button> 
    </form>
  )
}