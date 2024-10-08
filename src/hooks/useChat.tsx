import { useEffect, useState } from "react";
import _ from "lodash";
import { Message } from "../types/Chat";
import { BOT_MESSAGES } from "../components/chat/BotMessages";
import { useDispatch, useSelector } from "react-redux";
import { BotMessageIds, Sender } from "../constants/chat";
import {
  updateTriggerMessage,
  updateVisibleChatId,
} from "../redux/slices/chatSlice";
import { ResponseNotClear } from "./../components/chat/chat-screens";

export const useChat = () => {
  const dispatch = useDispatch();
  const botVisibleChatId = useSelector(
    (state: any) => state.chat.visibleChatId
  );
  const triggerUserMessageWithText = useSelector(
    (state: any) => state.chat.triggerUserMessageWithText
  );

  const [messages, setMessages] = useState<Message[]>([]);
  const [isBotTyping, setIsBotTyping] = useState<boolean>(false);

  const sendLastMessageAgain = () => {
    const lastMessageDetails = messages[messages.length - 1];

    const notUnderstandMessage: Message = {
      id: BotMessageIds.RESPONSE_NOT_CLEAR,
      content: <ResponseNotClear />,
      sender: Sender.BOT,
      timestamp: new Date(),
    };

    setIsBotTyping(true);
    setMessages((prevMessages) => [...prevMessages, notUnderstandMessage]);

    setTimeout(() => {
      setIsBotTyping(false);
      setMessages((prevMessages) => [...prevMessages, lastMessageDetails]);
    }, 1000);
  };

  const getNextMessage = () => {
    const currentBotMessageIndex = BOT_MESSAGES.findIndex(
      (message) => message.id === botVisibleChatId
    );

    const nextMessage = BOT_MESSAGES[currentBotMessageIndex + 1];
    return nextMessage;
  };

  const generateBotResponse = (userResponse: string): Message | undefined => {
    const botLastResponse = messages?.find(
      (message) => message.id === botVisibleChatId
    );

    let isResponseFound = false;

    if (botLastResponse?.acceptedResponses) {
      botLastResponse.acceptedResponses.forEach((acceptedResponse: string) => {
        if (
          acceptedResponse.toLowerCase().includes(userResponse.toLowerCase()) ||
          userResponse.toLowerCase().includes(acceptedResponse.toLowerCase()) ||
          acceptedResponse?.toLowerCase() === userResponse.toLowerCase()
        ) {
          isResponseFound = true;
        }
      });
    }

    if (!botLastResponse?.acceptedResponses?.length || isResponseFound) {
      return getNextMessage();
    } else {
      return undefined;
    }
  };

  const removeLastSuggestedMessage = () => {
    if (messages[messages.length - 1]?.suggestedResponse) {
      const newMessages = _.cloneDeep(messages);
      delete newMessages[newMessages.length - 1].suggestedResponse;

      setMessages(newMessages);
    }
  };

  const sendBotResponse = (responseId: string) => {
    const botResponse: Message = BOT_MESSAGES?.find(
      (message) => message.id === responseId
    ) as Message;
    setIsBotTyping(false);
    setMessages((prevMessages) => [...prevMessages, botResponse]);
  };

  const sendMessage = (content: string) => {
    const newMessage: Message = {
      id: "user-message",
      content,
      sender: Sender.USER,
      timestamp: new Date(),
    };

    setIsBotTyping(true);
    const botResponse: Message | undefined = generateBotResponse(content);

    removeLastSuggestedMessage();
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    setTimeout(() => {
      if (botResponse) {
        dispatch(updateVisibleChatId(botResponse.id));
      } else {
        setIsBotTyping(false);
        sendLastMessageAgain();
      }
    }, 1000);
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      dispatch(updateVisibleChatId(BOT_MESSAGES[0].id));
    }, 500);

    return () => clearTimeout(interval);
  }, []);

  useEffect(() => {
    if (triggerUserMessageWithText) {
      sendMessage(triggerUserMessageWithText);

      dispatch(updateTriggerMessage(null));
    }
  }, [triggerUserMessageWithText]);

  useEffect(() => {
    if (botVisibleChatId) {
      sendBotResponse(botVisibleChatId);
    }
  }, [botVisibleChatId]);

  return { messages, isBotTyping, sendMessage };
};
