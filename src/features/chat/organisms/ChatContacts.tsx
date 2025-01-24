import { ChatContact } from "../molecules/ChatContact";
import { FacebookTheme } from "../quarts/FacebookTheme";
import { useState } from "react";
const contacts = [
  {
    id: 0,
    name: "Suissa",
    messages: [
      {
        owner: "Suissa",
        text: "Ola",
        datetime: "10/10/2023, 09:00",
        type: "receiver"
      }
    ]
  },
  {
    id: 1,
    name: "Suissa1",
    messages: [
      {
        owner: "Suissa1",
        text: "Que Pasa?",
        datetime: "10/10/2023, 09:00",
        type: "receiver"
      }
    ]
  },
  {
    id: 2,
    name: "Suissa2",
    messages: [
      {
        owner: "Suissa2",
        text: "Como estas?",
        datetime: "10/10/2023, 09:00",
        type: "receiver"
      }
    ]
  },
  {
    id: 3,
    name: "Suissa3",
    messages: [
      {
        owner: "Suissa3",
        text: "Te quiero!",
        datetime: "10/10/2023, 09:00",
        type: "receiver"
      }
    ]
  },
  {
    id: 4,
    name: "Suissa4",
    messages: [
      {
        owner: "Suissa4",
        text: "Muchas gracias!",
        datetime: "10/10/2023, 09:00",
        type: "receiver"
      }
    ]
  }
]
export const ChatContacts = () => {
  const [selectedContact, setSelectedContact] = useState<number>(0);
  const selectContact = (id: number) => {
    setSelectedContact(id);
  }
  return <div className="h-screen border-r border-gray-200">
    {contacts.map((contact, i) => {
      const contactWithStyles = {
        ...contact,
        containerClass: FacebookTheme.contacts.containerClass,
        datetimeClass: FacebookTheme.contacts.datetimeClass,
        nameClass: FacebookTheme.contacts.nameClass,
        avatarSize: FacebookTheme.contacts.avatarSize,
        lastmessageClass: FacebookTheme.contacts.lastmessageClass,
        isActive: (i === selectedContact),
        isActiveClass: FacebookTheme.contacts.active
      }
      return <ChatContact 
        key={contact.id} 
        contact={contactWithStyles} 
        onClick={() => selectContact(contact.id)} 
      />
    })}
  </div>;
};