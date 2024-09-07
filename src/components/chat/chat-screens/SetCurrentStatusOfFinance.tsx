import { Button } from "../../common/base/Button";
import { BotMessageWrapper } from "./BotMessageWrapper";
import { useDispatch } from "react-redux";
import { BotMessageIds } from "./../../../constants/chat";
import {
  updateTriggerMessage,
  updateVisibleChatId,
} from "./../../../redux/slices/chatSlice";
import { RangeSlider } from "./../../common/RangeSlider";
import { useState } from "react";

export const SetCurrentStatusFinance = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState([5]);

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
          <div className="ml-[-10px] my-2">
          <RangeSlider values={values} setValues={setValues} />
          </div>
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
