import { ChatMessages } from "../organisms/ChatMessages";
import { ChatContacts } from "../organisms/ChatContacts";
import { ChatProvider } from "../context/ChatContext";
export const ChatTemplate = () => {
  return (
    <ChatProvider>
      <div className="flex h-screen w-full">
        <aside className="w-1/4 h-screen">
          <ChatContacts />
        </aside>
        <main className="w-3/4 h-screen">
          <ChatMessages />
        </main>
      </div>
    </ChatProvider>
  ); 
};