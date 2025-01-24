import { useEffect, useRef } from "react";
import { IMessage } from "../quarks/interfaces/IMessage";

const useWebSocket = (
  selectedContact: number,
  setMessages: React.Dispatch<React.SetStateAction<IMessage[]>>
) => {
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:9515");
    socketRef.current = socket;

    socket.onmessage = (event) => {
      const newMessage: IMessage = JSON.parse(event.data);
      setMessages((prev) => [...prev, newMessage]);
    };

    socket.onclose = () => {
      console.log("WebSocket disconnected");
    };

    return () => {
      socket.close();
    };
  }, [setMessages]);

  const sendMessage = (message: IMessage) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify({ ...message, contactId: selectedContact }));
    } else {
      console.error("WebSocket is not connected.");
    }
  };

  return { sendMessage };
};

export default useWebSocket;
