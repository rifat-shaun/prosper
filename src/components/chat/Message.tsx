import React from "react";
import { Message } from "@/types/Chat";

interface MessageProps {
  message: Message;
}

const MessageComponent: React.FC<MessageProps> = ({ message }) => {
  return (
    <div
      className={`flex ${
        message.sender === "bot" ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`px-4 py-2 rounded-lg ${
          message.sender === "bot" ? "bg-gray-300" : "bg-blue-500 text-white"
        }`}
      >
        {message.content}
      </div>
    </div>
  );
};

export default MessageComponent;
