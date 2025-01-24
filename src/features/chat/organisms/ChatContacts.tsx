import useChatContext from "../hooks/useChatContext";
import { ChatContact } from "../molecules/ChatContact";
import { FacebookTheme } from "../quarks/themes/FacebookTheme";
export const ChatContacts = () => {
  // const [selectedContact, setSelectedContact] = useState<number>(0);

  const { contacts, selectedContact, setSelectedContact } = useChatContext();

  return <div className="h-screen border-r border-gray-200">
    {contacts.map((contact) => {
      const contactWithStyles = {
        ...contact,
        containerClass: FacebookTheme.contacts.containerClass,
        datetimeClass: FacebookTheme.contacts.datetimeClass,
        nameClass: FacebookTheme.contacts.nameClass,
        avatarSize: FacebookTheme.contacts.avatarSize,
        lastmessageClass: FacebookTheme.contacts.lastmessageClass,
        isActive: (contact.id === selectedContact),
        isActiveClass: FacebookTheme.contacts.active
      }
      return <ChatContact 
        key={contact.id} 
        contact={contactWithStyles} 
        onClick={() => setSelectedContact(contact.id)}
        />
    })}
  </div>;
};