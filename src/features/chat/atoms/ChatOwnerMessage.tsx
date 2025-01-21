interface ChatOwnerMessageProps {
  owner: string;
  className?: string;
  id?: string;
  onClick?: () => void;
}

export const ChatOwnerMessage = ({ owner, className, id, onClick }: ChatOwnerMessageProps) => (
  <span
    className={className}
    id={id}
    onClick={onClick}
  >
    {owner}
  </span>
)