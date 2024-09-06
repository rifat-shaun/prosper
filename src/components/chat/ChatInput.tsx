import { Button } from "../common/base/Button";
import { ArrowRight } from "../common/icons/ArrowRight";

const ChatInput = () => {
  return (
    <div className="border-t border-gray-900 p-3 flex items-center">
      <input
        type="text"
        placeholder="Write something..."
        className="w-full p-2 outline-none focus:outline-none border-none"
      />
      <Button onClick={() => {}}>
        <ArrowRight />
      </Button>
    </div>
  );
};

export default ChatInput;
