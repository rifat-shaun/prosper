import { FC } from "react";
import { CloseIcon } from "../common/icons/CloseIcon";

interface ChatHeaderProps {
  onClose: () => void;
}

const ChatHeader: FC<ChatHeaderProps> = ({ onClose }) => {
  return (
    <>
      <div className="h-9 bg-neutral-500 font-semibold text-white flex justify-between items-center px-3 py-2">
        ProsperBot
        <span onClick={onClose} className="cursor-pointer">
          <CloseIcon />
        </span>
      </div>
    </>
  );
};

export default ChatHeader;
