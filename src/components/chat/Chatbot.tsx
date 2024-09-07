import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";
import ChatHeader from "./ChatHeader";
import { FC, ReactNode, useState } from "react";
import { useChat } from "../../hooks/useChat";
import { ChatBanner } from "./ChatBanner";

interface ChatbotProps {
  onClose: () => void;
}

const Chatbot: FC<ChatbotProps> = ({ onClose }) => {
  const { messages, isBotTyping, sendMessage } = useChat();
  const [renderChildOnParentScreen, setRenderChildOnParentScreen] =
    useState<ReactNode>(null);

  return (
    <div className="fixed bottom-24 right-6 h-[606px] w-[350px] bg-white shadow-lg z-50">
      <ChatHeader onClose={onClose} />
      <ChatBanner />
      <ChatWindow
        messages={messages}
        isBotTyping={isBotTyping}
        setRenderChildOnParentScreen={setRenderChildOnParentScreen}
        onSend={sendMessage}
      />
      <hr className="my-0 h-[2px] border-0 bg-neutral-300" />
      <ChatInput onSend={sendMessage} />
    </div>
  );
};

export default Chatbot;
