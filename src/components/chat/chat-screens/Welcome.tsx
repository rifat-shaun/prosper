import { BotMessageWrapper } from "./BotMessageWrapper";

export const WelcomeMessage = () => {
  const userFirstName = "Dixit";
  const botName = "Prosper";

  return (
    <BotMessageWrapper>
       👋{userFirstName}, this is {botName}. I’m going to help you organize your
      personal finances in Google Sheets. Then we can create a financial plan
      for you, and I will be able to help you manage and improve your success.
      💸📈 Ready to take control of your financial future?!
    </BotMessageWrapper>
  );
};
