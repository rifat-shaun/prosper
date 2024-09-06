import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";
import ChatHeader from "./ChatHeader";
import { FC } from "react";
import { useChat } from "../../hooks/useChat";

interface ChatbotProps {
  onClose: () => void;
}

const Chatbot: FC<ChatbotProps> = ({ onClose }) => {
  const { messages, sendMessage } = useChat();

  return (
    <div className="fixed bottom-24 right-6 h-[606px] w-[350px] bg-white shadow-lg z-50">
      <ChatHeader onClose={onClose} />
      <ChatWindow messages={messages} />
      <hr className="my-0 h-[2px] border-0 bg-neutral-300" />
      <ChatInput onSend={sendMessage} />
    </div>
  );
};

export default Chatbot;
