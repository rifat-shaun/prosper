import { Message } from "@/types/Chat";
import MessageComponent from "./Message";
import { FC } from "react";

interface MessageProps {
  messages: Message[];
}

const ChatWindow: FC<MessageProps> = ({ messages }) => {
  return (
    <div className="h-[calc(100%-190px)] overflow-y-auto p-2 no-scrollbar">
      {messages.map((message: Message) => (
        <MessageComponent key={message.id} message={message} />
      ))}
    </div>
  );
};

export default ChatWindow;
