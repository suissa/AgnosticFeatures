export interface ITheme {
  senderClass: string;
  receiverClass: string;
  datetimeClass: string;
  chatInputClasses: string;
  
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