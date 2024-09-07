import React, { FC, useEffect, useRef } from "react";
import { Message } from "@/types/Chat";
import { Sender } from "../../constants/chat";

interface MessageProps {
  message: Message;
  isBotTyping: boolean;
  onSend(message: string): void;
}

const MessageComponent: FC<MessageProps> = ({
  message,
  isBotTyping,
  onSend,
}) => {
  const messageEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message, isBotTyping]);

  return (
    <div className="flex flex-col">
      <div
        className={`flex items-flex-start justify-start gap-2 mb-4 ${
          message?.sender === Sender.BOT ? "" : "flex-row-reverse"
        }`}
      >
        <img
          src="https://example.com/profile-pic.jpg"
          alt="Profile Picture"
          className="w-8 h-8 rounded-full border border-solid"
        />

        {message.sender === Sender.BOT ? (
          <div className="max-w-[calc(100%-85px)]">{message.content}</div>
        ) : (
          <div className="max-w-[calc(100%-120px)] border rounded-lg font-normal text-sm px-4 py-2 bg-[#EAF2F6]">
            {message.content}
          </div>
        )}
      </div>

      {message?.suggestedResponse ? (
        <div className="flex justify-center">
          <div
            className={`px-4 py-2 border rounded-lg font-normal text-sm text-center bg-[#EAF2F6] cursor-pointer w-56`}
            onClick={() => onSend(message?.suggestedResponse || "")}
          >
            {message?.suggestedResponse}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MessageComponent;
