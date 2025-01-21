import { ChatInputMessage } from "./ChatInputMessage";

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