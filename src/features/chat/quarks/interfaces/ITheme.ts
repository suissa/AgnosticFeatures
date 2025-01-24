import { EmojiStyle } from 'emoji-picker-react';
export interface ITheme {
  senderClass: string;
  receiverClass: string;
  datetimeClass: string;
  chatInputClasses: string;
  emojiStyle: EmojiStyle;
  contacts: {
    asideClass: string;    
    containerClass: string;    
    datetimeClass: string;    
    avatarSize: number;    
    nameClass: string;    
    lastmessageClass: string;    
    active: string;
  }
}

export default EmojiStyle;