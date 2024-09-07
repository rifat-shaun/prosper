import React, { FC, useEffect, useRef } from "react";
import { Message } from "@/types/Chat";
import { Sender } from "../../constants/chat";
const ladyImgPath = require("./../../assets/images/ladyImg.png");

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
  const isMessageFromBot = message.sender === Sender.BOT;

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message, isBotTyping]);

  return (
    <div className="flex flex-col">
      <div
        className={`flex items-flex-start justify-start gap-2 mb-4 ${
          isMessageFromBot ? "" : "flex-row-reverse"
        }`}
      >
        {isMessageFromBot ? (
          <img src={ladyImgPath} alt="pic" className="w-8 h-8 rounded-full" />
        ) : (
          <div className="w-8 h-8 rounded-full bg-[#FB42B0]" />
        )}

        {isMessageFromBot ? (
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

      <div ref={messageEndRef} />
    </div>
  );
};

export default MessageComponent;
