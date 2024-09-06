import { Message } from "@/types/Chat";

export const DUMMY_MESSAGES: Message[] = [
  {
    id: "1",
    content: ` 👋{First Name}, this is {Prosper}. I’m going to help you organize your personal finances in Google Sheets. Then we can create a financial plan for you, and I will be able to help you manage and improve your success. 💸📈 Ready to take control of your financial future?!`,
    sender: "bot",
    suggestedResponse: "I’m ready! 🤑",
    requiedResponse: true,
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
    id: "2",
    content: `You need to enable access for ProsperBot so I can help you set up your financial plan. `,
    sender: "bot",
    timestamp: new Date(),
  },
];
