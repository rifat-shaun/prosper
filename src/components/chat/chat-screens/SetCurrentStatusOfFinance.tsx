import { Button } from "../../common/base/Button";
import { BotMessageWrapper } from "./BotMessageWrapper";
import { useDispatch, useSelector } from "react-redux";
import { BotMessageIds } from "./../../../constants/chat";
import {
  updateTriggerMessage,
  updateVisibleChatId,
} from "./../../../redux/slices/chatSlice";
import { RangeSlider } from "./../../common/RangeSlider";
import { useState } from "react";

export const SetCurrentStatusFinance = () => {
  const dispatch = useDispatch();
  const visibleChatId = useSelector((state: any) => state.chat.visibleChatId);
  const disableAction =
    visibleChatId !== BotMessageIds.SET_CURRENT_STATUS_OF_FINANCE;
  const [values, setValues] = useState([5]);

  const showEnableAccessPopup = () => {
    setTimeout(() => {
      dispatch(updateTriggerMessage("I feel in control 😌"));
      dispatch(updateVisibleChatId(BotMessageIds.VERY_NICE));
    }, 500);
  };

  return (
    <div className="flex flex-col gap-2">
      <BotMessageWrapper>
        <div className="flex flex-col items-center gap-1 w-56">
          😌
          <div>In control</div>
          <div className="ml-[-10px] my-2">
            <RangeSlider
              values={values}
              setValues={setValues}
              isDisabled={disableAction}
            />
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <Button
            onClick={showEnableAccessPopup}
            className="w-full bg-secondary-900 text-white px-6 py-3"
            isDisabled={disableAction}
          >
            Submit
          </Button>
        </div>
      </BotMessageWrapper>
    </div>
  );
};
