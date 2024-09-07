import { useEffect, useState } from "react";
import _ from "lodash";
import { Message } from "../types/Chat";
import { DUMMY_MESSAGES } from "../components/chat/BotMessages";

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isBotTyping, setIsBotTyping] = useState<boolean>(false);

  const sendLastMessageAgain = () => {
    const lastMessageDetails = messages[messages.length - 1];

    const notUnderstandMessage: Message = {
      id: "1",
      content: "I didn't get that. Can you please rephrase?",
      sender: "bot",
      timestamp: new Date(),
    };

    setIsBotTyping(true);
    setMessages((prevMessages) => [...prevMessages, notUnderstandMessage]);

    setTimeout(() => {
      setIsBotTyping(false);
      setMessages((prevMessages) => [...prevMessages, lastMessageDetails]);
    }, 1000);
  };

  const sendNextMessage = () => {
    const newMessage: Message = DUMMY_MESSAGES[messages.length];
    return newMessage;
  };

  const generateBotResponse = (userResponse: string): Message | undefined => {
    const lastMessageDetails = messages[messages.length - 1];
    let isResponseFound = false;

    if (lastMessageDetails?.acceptedResponses) {
      lastMessageDetails.acceptedResponses.forEach(
        (acceptedResponse: string) => {
          if (
            acceptedResponse
              .toLowerCase()
              .includes(userResponse.toLowerCase()) ||
            userResponse
              .toLowerCase()
              .includes(acceptedResponse.toLowerCase()) ||
            acceptedResponse?.toLowerCase() === userResponse.toLowerCase()
          ) {
            isResponseFound = true;
          }
        }
      );
    }

    if (!lastMessageDetails?.suggestedResponse?.length || isResponseFound) {
      return sendNextMessage();
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

  const sendMessage = (content: string) => {
    const newMessage: Message = {
      id: "1", //uuidv4(),
      content,
      sender: "user",
      timestamp: new Date(),
    };

    setIsBotTyping(true);
    const botResponse: Message | undefined = generateBotResponse(content);

    if (botResponse) removeLastSuggestedMessage();
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    setTimeout(() => {
      if (botResponse) {
        setIsBotTyping(false);
        setMessages((prevMessages) => [...prevMessages, botResponse]);
      } else {
        setIsBotTyping(false);
        sendLastMessageAgain();
      }
    }, 1000);
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      setMessages([DUMMY_MESSAGES[0]]);
    }, 500);

    return () => clearTimeout(interval);
  }, []);

  return { messages, isBotTyping, sendMessage };
};
