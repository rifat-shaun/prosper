import { Button } from "../../common/base/Button";
import { BotMessageWrapper } from "./BotMessageWrapper";
import { useDispatch } from "react-redux";
import { BotMessageIds } from "./../../../constants/chat";
import { updateVisibleChatId } from "./../../../redux/slices/chatSlice";

export const SetCurrentStatusFinance = () => {
  const dispatch = useDispatch();

  const showEnableAccessPopup = () => {
    dispatch(updateVisibleChatId(BotMessageIds.VERY_NICE));
  };

  return (
    <div className="flex flex-col gap-2">
      <BotMessageWrapper>
        <div>
          You need to enable access for ProsperBot so I can help you set up your
          financial plan.
        </div>
        <div className="flex justify-center mt-2">
          <Button
            onClick={showEnableAccessPopup}
            className="w-full bg-secondary-900 text-white px-6 py-3 "
          >
            Submit
          </Button>
        </div>
      </BotMessageWrapper>
    </div>
  );
};
