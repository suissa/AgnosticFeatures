export interface IMessage {
  owner: string;
  text: string;
  datetime: string;
  type: string; // sender | receiver
  className?: string;
}