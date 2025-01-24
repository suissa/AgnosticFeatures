import { useEffect } from "react";
import { IMessage } from "../quarks/interfaces/IMessage";
const useWebSocket = (setMessages: React.Dispatch<React.SetStateAction<IMessage[]>>) => {
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:9515");

    socket.onmessage = (event) => {
      const newMessage = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    return () => {
      socket.close();
    };
  }, [setMessages]);
};

export default useWebSocket;