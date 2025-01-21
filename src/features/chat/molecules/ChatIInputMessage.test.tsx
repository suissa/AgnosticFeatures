import { ChatInputMessage } from "./ChatIInputMessage";

export const ChatInputMessageTest = () => {
  const onSubmit = () => {
    console.log("onSubmit");
  }
  const setMessages = () => {
    console.log("setMessages")
  }
  return (
    <ChatInputMessage onSubmit={onSubmit} setMessages={setMessages} />
  )
}