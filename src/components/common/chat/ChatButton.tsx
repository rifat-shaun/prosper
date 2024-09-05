import { useState } from "react";
import ChatWindow from "./ChatWindow";

const ChatButton = () => {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

  const handleChatButtonClick = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  return (
    <div>
      <div className="fixed bottom-4 right-4">
        <button
          className="bg-primary-900 text-white p-3 rounded-full h-16 w-16 cursor-pointer"
          onClick={handleChatButtonClick}
        >
          Chat
        </button>
      </div>

      {isChatOpen && <ChatWindow onClose={handleCloseChat} />}
    </div>
  );
};

export default ChatButton;
