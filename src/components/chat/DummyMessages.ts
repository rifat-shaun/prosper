import { Message } from "@/types/Chat";

export const DUMMY_MESSAGES: Message[] = [
  {
    id: "1",
    content: ` 👋{First Name}, this is {Prosper}. I’m going to help you organize your personal finances in Google Sheets. Then we can create a financial plan for you, and I will be able to help you manage and improve your success. 💸📈 Ready to take control of your financial future?!`,
    sender: "bot",
    timestamp: new Date(),
  },
  {
    id: "2",
    content: ` 👋{First Name}, this is {Prosper}. I’m going to help you organize your personal finances in Google Sheets. Then we can create a financial plan for you, and I will be able to help you manage and improve your success. 💸📈 Ready to take control of your financial future?!`,
    sender: "user",
    timestamp: new Date(),
  },
];
