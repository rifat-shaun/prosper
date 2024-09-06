import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";
import ChatHeader from "./ChatHeader";

type TProps = {
  onClose: () => void;
};

const Chatbot = ({ onClose }: TProps) => {
  return (
    <div className="fixed bottom-24 right-6 h-[606px] w-[350px] bg-white shadow-lg z-50">
      <ChatHeader onClose={onClose} />
      <div className="h-[calc(100%-190px)] overflow-y-auto p-2">
        <ChatWindow />
      </div>
      <hr className="my-0 h-[2px] border-0 bg-neutral-300" />
      <ChatInput />
    </div>
  );
};

export default Chatbot;
