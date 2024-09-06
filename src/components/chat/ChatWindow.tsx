import { Message } from "@/types/Chat";
import MessageComponent from "./Message";
import { FC } from "react";
import Loader from "./Loader";

interface MessageProps {
  messages: Message[];
  isBotTyping: boolean;
}

const ChatWindow: FC<MessageProps> = ({ messages, isBotTyping }) => {
  return (
    <div className="h-[calc(100%-190px)] overflow-y-auto p-2 no-scrollbar">
      {messages.map((message: Message) => (
        <MessageComponent
          key={message.id}
          message={message}
          isBotTyping={isBotTyping}
        />
      ))}

      {isBotTyping && (
        <div className={`flex gap-2 justify-start items-flex-start my-2`}>
          <div
            className={`w-8 h-8 border border-solid border-neutral-300 rounded-full bg-[#2cb5fa]`}
          ></div>

          <div
            className={`max-w-[calc(100%-100px)] px-4 py-2`}
          >
            <Loader />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
