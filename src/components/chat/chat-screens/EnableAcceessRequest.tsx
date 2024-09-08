import { Button } from "../../common/base/Button";
import { BotMessageWrapper } from "./BotMessageWrapper";
import { useDispatch, useSelector } from "react-redux";
import { BotMessageIds } from "./../../../constants/chat";
import {
  updateIsChildScreenVisibleOnTopOfParent,
  updateVisibleChatId,
} from "./../../../redux/slices/chatSlice";

export const EnableAccessRequest = () => {
  const dispatch = useDispatch();
  const visibleChatId = useSelector((state: any) => state.chat.visibleChatId);
  const disableAction =
    visibleChatId !== BotMessageIds.ENABLE_ACCESS_REQUEST &&
    visibleChatId !== BotMessageIds.ENABLE_ACCESS_HELPER;

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
        <Button
          onClick={showEnableAccessPopup}
          className="w-full bg-secondary-900 text-white px-6 py-3"
          isDisabled={disableAction}
        >
          Enable access
        </Button>
      </div>
    </div>
  );
};
