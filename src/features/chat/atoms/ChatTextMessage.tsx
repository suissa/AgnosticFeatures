interface ChatTextMessageProps {
  text: string;
  className?: string;
  id?: string;
  onClick?: () => void;
}

export const ChatTextMessage = ({ text, className, id, onClick }: ChatTextMessageProps) => (
  <span
    className={className}
    id={id}
    onClick={onClick}
  >
    {text}
  </span>
)