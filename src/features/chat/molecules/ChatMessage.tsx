interface ChatMessageProps {
  text: string;
  owner: string;
  datetime: string;
  textClass?: string;
  ownerClass?: string;
  datetimeClass?: string;
  messageClass?: string;
}
export const ChatMessage = ({ text, datetime, textClass, datetimeClass, messageClass }: ChatMessageProps) => (
  <>
    <p className={datetimeClass}>{datetime}</p>
    <p className={messageClass}>
      <span className={textClass}>{text}</span>
    </p>
  </>
)