import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "../../../shared/atoms/Button";
import { Input } from "../../../shared/atoms/Input";
export interface IMessage {
  owner: string;
  text: string;
  datetime: string;
}
interface ChatInputMessageProps {
  onSubmit?: () => void;
  setMessages: Dispatch<SetStateAction<Message[]>>;
}

const getDatetime = () => {
  const date = new Date()
  const time = `${date.getHours()}:${date.getMinutes()}`;
  return time;
}

const getOwner = () => {
  return "suissa";
}

export const ChatInputMessage = ({ setMessages }: ChatInputMessageProps) => {
  const [message, setMessage] = useState<IMessage>()
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
          onChange={(e) => setMessage({owner: getOwner(), text: e.target.value, datetime: getDatetime()})}></Input>
      </div>
      <Button type="submit">Enviar</Button> 
    </form>
  )
}