import { IMessage } from "./ChatInputMessage";
interface ChatMessageProps extends IMessage {
  textClass?: string;
  ownerClass?: string;
  datetimeClass?: string;
  messageClass?: string;
}
export const ChatMessage = ({ text, datetime, textClass, datetimeClass, messageClass }: ChatMessageProps) => (
  <div className="flex-1 overflow-y-auto flex flex-col">
    <div className="">
      <p className={datetimeClass}>{datetime}</p>
      <p className={messageClass}>
        <span className={textClass}>{text}</span>
      </p>
    </div>
  </div>
)