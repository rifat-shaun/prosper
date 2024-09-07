import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";
import ChatHeader from "./ChatHeader";
import { FC, ReactNode, useEffect, useState } from "react";
import { useChat } from "../../hooks/useChat";
import { ChatBanner } from "./ChatBanner";
import { useSelector } from "react-redux";

interface ChatbotProps {
  onClose: () => void;
}

const Chatbot: FC<ChatbotProps> = ({ onClose }) => {
  const isChildVisibleOnParent = useSelector(
    (state: any) => state.chat.isChildScreenVisibleOnTopOfParent
  );
  const { messages, isBotTyping, sendMessage } = useChat();
  const [renderChildOnParentScreen, setRenderChildOnParentScreen] =
    useState<ReactNode>(null);

  useEffect(() => {
    if (!isChildVisibleOnParent) {
      setRenderChildOnParentScreen(null);
    }
  }, [isChildVisibleOnParent]);

  return (
    <div className="fixed bottom-24 right-6 h-[606px] w-[350px] bg-white shadow-lg z-50">
      <ChatHeader onClose={onClose} />
      {renderChildOnParentScreen ? (
        renderChildOnParentScreen
      ) : (
        <>
          <ChatBanner />
          <ChatWindow
            messages={messages}
            isBotTyping={isBotTyping}
            setRenderChildOnParentScreen={setRenderChildOnParentScreen}
            onSend={sendMessage}
          />
          <hr className="my-0 h-[2px] border-0 bg-neutral-300" />
          <ChatInput onSend={sendMessage} />
        </>
      )}
    </div>
  );
};

export default Chatbot;
