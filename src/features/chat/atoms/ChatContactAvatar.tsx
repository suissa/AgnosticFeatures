interface ChatContactAvatarProps {
  avatar: string;
  avatarClass?: string
  alt?: string
}

export const ChatContactAvatar = ({ avatar, avatarClass = "w-10 h-10 rounded-full", alt }: ChatContactAvatarProps) => 
  (<img src={avatar} alt={alt} className={avatarClass} />)