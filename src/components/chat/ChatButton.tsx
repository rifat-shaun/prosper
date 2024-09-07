import { useEffect, useState } from "react";
import Chatbot from "./Chatbot";
import { useDispatch } from "react-redux";
import { updateVisibleChatId } from "./../../redux/slices/chatSlice";

const ChatButton = () => {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleChatButtonClick = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  useEffect(() => {
    dispatch(updateVisibleChatId(""));
  }, [isChatOpen]);

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

      {isChatOpen && <Chatbot onClose={handleCloseChat} />}
    </div>
  );
};

export default ChatButton;
