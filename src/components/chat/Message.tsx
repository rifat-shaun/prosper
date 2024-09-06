import React from "react";
import { Message } from "@/types/Chat";

interface MessageProps {
  message: Message;
}

const MessageComponent: React.FC<MessageProps> = ({ message }) => {
  return (
    <div
      className={`flex gap-2 justify-start items-flex-start my-2 ${
        message.sender === "bot" ? "" : "flex-row-reverse"
      }`}
    >
      <div
        className={`w-8 h-8 border border-solid border-neutral-300 rounded-full ${
          message.sender === "bot" ? "bg-[#2cb5fa]" : "bg-[#fa2c5f]"
        }`}
      ></div>
      <div
        className={`max-w-[calc(100%-100px)] px-4 py-2 border rounded-lg ${
          message.sender === "bot"
            ? "border-solid border-neutral-300"
            : "bg-[#EAF2F6]"
        }`}
      >
        {message.content}
      </div>
    </div>
  );
};

export default MessageComponent;
