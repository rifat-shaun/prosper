import { useEffect } from "react";
import { BotMessageWrapper } from "./BotMessageWrapper";
import { useDispatch } from "react-redux";
import { updateVisibleChatId } from "../../../redux/slices/chatSlice";
import { BotMessageIds } from "../../../constants/chat";

export const VeryNice = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(updateVisibleChatId(BotMessageIds.ADD_INCOME_REQUEST));
    }, 500);
  }, []);

  return <BotMessageWrapper>Very nice!</BotMessageWrapper>;
};
