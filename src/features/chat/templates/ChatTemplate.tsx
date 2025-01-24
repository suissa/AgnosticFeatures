import { ChatMessages } from "../organisms/ChatMessages";
import { ChatContacts } from "../organisms/ChatContacts";
export const ChatTemplate = () => {
  return (
  <div className="flex h-screen w-full">
    <aside className="w-1/4 bg-gray-200">
      <ChatContacts />
    </aside>
    <main className="w-3/4 bg-white">
      <ChatMessages />
    </main>
  </div>
  ); 
};