interface ChatContactDatetimeProps {
  datetime: string;
  datetimeClass?: string
}

export const ChatContactDatetime = ({ datetime, datetimeClass }: ChatContactDatetimeProps) => (
  <span className={datetimeClass}>{datetime}</span>
)