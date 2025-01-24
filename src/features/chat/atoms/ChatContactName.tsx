interface ChatContactNameProps {
  name: string;
  nameClass?: string
}

export const ChatContactName = ({ name, nameClass }: ChatContactNameProps) => (
  <span className={nameClass}>{name}</span>
)