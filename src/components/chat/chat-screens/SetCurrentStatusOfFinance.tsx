import { Button } from "../../common/base/Button";
import { BotMessageWrapper } from "./BotMessageWrapper";
import { useDispatch } from "react-redux";
import { BotMessageIds } from "./../../../constants/chat";
import {
  updateTriggerMessage,
  updateVisibleChatId,
} from "./../../../redux/slices/chatSlice";

export const SetCurrentStatusFinance = () => {
  const dispatch = useDispatch();

  const showEnableAccessPopup = () => {
    dispatch(updateTriggerMessage("I feel in control 😌"));
    setTimeout(() => {
      dispatch(updateVisibleChatId(BotMessageIds.VERY_NICE));
    }, 500);
  };

  return (
    <div className="flex flex-col gap-2">
      <BotMessageWrapper>
        <div className="flex flex-col items-center gap-1 w-56">
          😌
          <div>In control</div>
          <img
            src={require("./../../../assets/images/slider.png")}
            className="w-52 ml-[-10px]"
          />
        </div>
        <div className="flex justify-center mt-2">
          <Button
            onClick={showEnableAccessPopup}
            className="w-full bg-secondary-900 text-white px-6 py-3"
          >
            Submit
          </Button>
        </div>
      </BotMessageWrapper>
    </div>
  );
};
