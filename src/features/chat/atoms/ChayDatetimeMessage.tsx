interface ChatDatetimeMessageProps {
  datetime: string;
  className?: string;
  id?: string;
  onClick?: () => void;
}

export const ChatDatetimeMessage = ({ datetime, className, id, onClick }: ChatDatetimeMessageProps) => (
  <span
    className={className}
    id={id}
    onClick={onClick}
  >
    {datetime}
  </span>
)