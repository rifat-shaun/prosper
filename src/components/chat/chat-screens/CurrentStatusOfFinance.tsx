import { useEffect } from "react";
import { BotMessageWrapper } from "./BotMessageWrapper";
import { useDispatch } from "react-redux";

import { updateVisibleChatId } from "../../../redux/slices/chatSlice";
import { BotMessageIds } from "../../../constants/chat";

export const CurrentStatusOfFinance = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(
        updateVisibleChatId(BotMessageIds.SET_CURRENT_STATUS_OF_FINANCE)
      );
    }, 500);
  }, []);

  return (
    <BotMessageWrapper>
      Tell me how you feel about the current state of your finances. No wrong
      answers 😌
    </BotMessageWrapper>
  );
};
