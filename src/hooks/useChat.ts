import { useEffect, useState } from "react";
import { Message } from "../types/Chat";
import { DUMMY_MESSAGES } from "./../components/chat/DummyMessages";
// import { v4 as uuidv4 } from 'uuid';

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isBotTyping, setIsBotTyping] = useState<boolean>(false);

  const sendMessage = (content: string) => {
    const newMessage: Message = {
      id: "1", //uuidv4(),
      content,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);

    setIsBotTyping(true);
    setTimeout(() => {
      const botResponse: Message = {
        id: "1", //uuidv4(),
        content: `You said: "${content}"`,
        sender: "bot",
        timestamp: new Date(),
      };
      setIsBotTyping(false);
      setMessages((prevMessages) => [...prevMessages, botResponse]);
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
