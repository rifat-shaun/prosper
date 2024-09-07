import { FC, useState } from "react";
import { Button } from "../common/base/Button";
import { ArrowRight } from "../common/icons/ArrowRight";

interface ChatInputProps {
  onSend(message: string): void;
}

const ChatInput: FC<ChatInputProps> = ({ onSend }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput("");
    }
  };

  return (
    <div className="border-t border-gray-900 p-3 flex items-center">
      <input
        type="text"
        placeholder="Write something..."
        className="w-full p-2 outline-none focus:outline-none border-none text-base"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyUp={(e) => e.key === "Enter" && handleSend()}
      />
      <Button
        onClick={handleSend}
        className="bg-secondary-900 text-white px-6 py-3"
      >
        <ArrowRight />
      </Button>
    </div>
  );
};

export default ChatInput;
