import { IMessage } from "./ChatInputMessage";
import { ChatContactAvatar } from "../atoms/ChatContactAvatar";
import { ChatContactName } from "../atoms/ChatContactName";
import { ChatContactDatetime } from "../atoms/ChatContactDatetime";

interface ChatContactProps {
  contact: {
    id: number;
    name: string;
    avatar?: string;
    messages?: IMessage[];
    containerClass?: string;
    nameClass?: string;
    avatarSize?: number;
    datetimeClass?: string;
    lastmessageClass?: string;
    isActive: boolean;
    isActiveClass?: string
  }
}

export const ChatContact = ({ contact }: ChatContactProps) => {

  const {
    id,
    name,
    avatar = "https://i.ibb.co/YjJL4cD/avatar-placeholder.png",
    messages,
    containerClass,
    nameClass,
    avatarSize = 16,
    datetimeClass,
    lastmessageClass,
    isActive,
    isActiveClass
  } = contact;

  const avatarClass = `size-${avatarSize} rounded-full`;
  const lastmessage = messages ? messages[messages.length - 1].text : "";
  const datetime = messages ? messages[messages.length - 1].datetime : "";
  return (
    <div className={`${containerClass} ${isActive ? isActiveClass : ""}`} id={`contact-${id}` }>
      <div className="w-full flex items-center border-b-2 border-gray-200">
        <div className="w-full relative flex items-center">
          <ChatContactAvatar avatar={avatar} avatarClass={avatarClass} alt={name} />
          <div className="w-full flex flex-col">
            <ChatContactName name={name} nameClass={nameClass} />
            {datetime !== "" && <ChatContactDatetime datetime={datetime} datetimeClass={datetimeClass} />}
            {lastmessage !== "" && <span className={lastmessageClass}>{lastmessage}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};