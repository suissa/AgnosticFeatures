import { ChatMessages } from "../organisms/ChatMessages";
import { ChatContacts } from "../organisms/ChatContacts";
export const ChatTemplate = () => {
  return (
  <div className="flex h-screen w-full">
    <aside className="w-1/4 h-screen">
      <ChatContacts />
    </aside>
    <main className="w-3/4 h-screen">
      <ChatMessages />
    </main>
  </div>
  ); 
};