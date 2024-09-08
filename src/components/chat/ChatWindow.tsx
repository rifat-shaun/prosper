import { Message } from "@/types/Chat";
import MessageComponent from "./Message";
import { FC, ReactNode } from "react";
import Loader from "./Loader";
import { useSelector } from "react-redux";
const ladyImgPath = require("./../../assets/images/ladyImg.png");

interface MessageProps {
  messages: Message[];
  isBotTyping: boolean;
  setRenderChildOnParentScreen(value: ReactNode): void;
  onSend(message: string): void;
}

const ChatWindow: FC<MessageProps> = ({
  messages,
  isBotTyping,
  setRenderChildOnParentScreen,
  onSend,
}) => {
  const canRenderOnParent = useSelector(
    (state: any) => state.chat.isChildScreenVisibleOnTopOfParent
  );

  const renderOnParent = (content: ReactNode) => {
    setRenderChildOnParentScreen(content);
  };

  return (
    <div className="h-[calc(100%-190px)] overflow-y-auto p-2 no-scrollbar relative">
      {messages.map((message: Message) => (
        <>
          {message?.renderOnFullScreen && canRenderOnParent ? (
            renderOnParent(message?.content)
          ) : message?.renderOnFullScreen ? null : (
            <MessageComponent
              key={message.id}
              message={message}
              isBotTyping={isBotTyping}
              onSend={onSend}
            />
          )}
        </>
      ))}

      {isBotTyping && (
        <div className={`flex gap-2 justify-start items-flex-start my-2`}>
          <img src={ladyImgPath} alt="pic" className="w-8 h-8 rounded-full" />

          <div className={`max-w-[calc(100%-100px)] px-4 py-2`}>
            <Loader />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
