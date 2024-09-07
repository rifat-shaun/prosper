import { Message } from "@/types/Chat";
import { EnableAccessRequest, WelcomeMessage } from "./chat-screens";
import { BotMessageIds, Sender } from "./../../constants/chat";
import { EnableAccessHelper } from "./chat-screens/EnableAccessHelper";

export const BOT_MESSAGES: Message[] = [
  {
    id: BotMessageIds.WELCOME_MESSAGE,
    content: <WelcomeMessage />,
    sender: Sender.BOT,
    suggestedResponse: "I’m ready! 🤑",
    acceptedResponses: [
      "I’m ready! 🤑",
      "Yes",
      "I'm ready!",
      "Yeap",
      "Yep",
      "Yeah",
      "Sure",
    ],
    timestamp: new Date(),
  },
  {
    id: BotMessageIds.ENABLE_ACCESS_REQUEST,
    content: <EnableAccessRequest />,
    sender: Sender.BOT,
    timestamp: new Date(),
  },
  {
    id: BotMessageIds.ENABLE_ACCESS_HELPER,
    content: <EnableAccessHelper />,
    sender: Sender.BOT,
    renderOnFullScreen: true,
    timestamp: new Date(),
  },
];
