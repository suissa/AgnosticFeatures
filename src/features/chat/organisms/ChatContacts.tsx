import { ChatContact } from "../molecules/ChatContact";

const contacts = [
  {
    id: 1,
    name: "Suissa",
    messages: [
      {
        owner: "Suissa",
        text: "Ola",
        datetime: "10/10/2023, 09:00",
        type: "receiver"
      }
    ]
  }
]
export const ChatContacts = () => {
  return <div>
    {contacts.map((contact) => {
      return <ChatContact key={contact.id} contact={contact} />
    })}
  </div>;
};