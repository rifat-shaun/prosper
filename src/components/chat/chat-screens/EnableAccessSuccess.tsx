import { useEffect } from "react";
import { BotMessageWrapper } from "./BotMessageWrapper";
import { useDispatch } from "react-redux";
import { updateVisibleChatId } from "../../../redux/slices/chatSlice";
import { BotMessageIds } from "../../../constants/chat";

export const EnableAccessSuccess = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(updateVisibleChatId(BotMessageIds.CURRENT_STATUS_OF_FINANCE));
    }, 500);
  }, []);

  return <BotMessageWrapper>Thanks for enabling access! ✅</BotMessageWrapper>;
};
