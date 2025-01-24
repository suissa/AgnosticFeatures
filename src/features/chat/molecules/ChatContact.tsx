import { IMessage } from "./ChatInputMessage";
import { ChatContactAvatar } from "../atoms/ChatContactAvatar";
import { ChatContactName } from "../atoms/ChatContactName";
import { ChatContactDatetime } from "../atoms/ChatContactDatetime";

interface ChatContactProps {
  contact: {
    id: number;
    name: string;
    avatar: string;
    datetime?: string;
    messages?: IMessage[];
    containerClass?: string;
    nameClass?: string;
    avatarSize?: number;
    datetimeClass?: string;
    lastmessageClass?: string;
  }
}

export const ChatContact = ({ contact }: ChatContactProps) => {

  const {
    id,
    name,
    avatar = "https://i.ibb.co/YjJL4cD/avatar-placeholder.png",
    datetime,
    messages,
    containerClass,
    nameClass,
    avatarSize = 10,
    datetimeClass,
    lastmessageClass,
  } = contact;

  const avatarClass = `w-${avatarSize} h-${avatarSize} rounded-full`;
  const lastmessage = messages ? messages[messages.length - 1].text : "";

  return <div className={containerClass} id={`contact-${id}`}>
    <div className="flex items-center">
      <div className="flex items-center">
        <ChatContactAvatar avatar={avatar} avatarClass={avatarClass} alt={name} />
        <div className="flex flex-col">
          <ChatContactName name={name} nameClass={nameClass} />
          {datetime && <ChatContactDatetime datetime={datetime} datetimeClass={datetimeClass} />}
          {lastmessage !== "" && <span className={lastmessageClass}>{lastmessage}</span>}
        </div>
      </div>
    </div>
  </div>;
};