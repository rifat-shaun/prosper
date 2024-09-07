import { Button } from "../../common/base/Button";
import { BotMessageWrapper } from "./BotMessageWrapper";
import { useDispatch } from "react-redux";
import { BotMessageIds } from "./../../../constants/chat";
import {
  updateIsChildScreenVisibleOnTopOfParent,
  updateVisibleChatId,
} from "./../../../redux/slices/chatSlice";

export const EnableAccessRequest = () => {
  const dispatch = useDispatch();

  const showEnableAccessPopup = () => {
    dispatch(updateIsChildScreenVisibleOnTopOfParent(true));
    dispatch(updateVisibleChatId(BotMessageIds.ENABLE_ACCESS_HELPER));
  };

  return (
    <div className="flex flex-col gap-2">
      <BotMessageWrapper>
        You need to enable access for ProsperBot so I can help you set up your
        financial plan.
      </BotMessageWrapper>

      <div className="flex justify-center mt-2">
        <Button onClick={showEnableAccessPopup} className="w-full">
          Enable access
        </Button>
      </div>
    </div>
  );
};
