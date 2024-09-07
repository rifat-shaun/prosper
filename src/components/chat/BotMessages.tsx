import { Message } from "@/types/Chat";
import {
  AddIncomeRequest,
  CurrentStatusOfFinance,
  EnableAccessHelper,
  EnableAccessRequest,
  EnableAccessSuccess,
  SetCurrentStatusFinance,
  VeryNice,
  WelcomeMessage,
} from "./chat-screens";
import { BotMessageIds, Sender } from "./../../constants/chat";

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
  {
    id: BotMessageIds.ENABLE_ACCESS_SUCCESS,
    content: <EnableAccessSuccess />,
    sender: Sender.BOT,
    timestamp: new Date(),
  },
  {
    id: BotMessageIds.CURRENT_STATUS_OF_FINANCE,
    content: <CurrentStatusOfFinance />,
    sender: Sender.BOT,
    timestamp: new Date(),
  },
  {
    id: BotMessageIds.SET_CURRENT_STATUS_OF_FINANCE,
    content: <SetCurrentStatusFinance />,
    sender: Sender.BOT,
    timestamp: new Date(),
  },
  {
    id: BotMessageIds.VERY_NICE,
    content: <VeryNice />,
    sender: Sender.BOT,
    timestamp: new Date(),
  },
  {
    id: BotMessageIds.ADD_INCOME_REQUEST,
    content: <AddIncomeRequest />,
    sender: Sender.BOT,
    timestamp: new Date(),
  },
];
