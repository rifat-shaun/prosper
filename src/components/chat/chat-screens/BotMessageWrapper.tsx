import { FC, ReactNode } from "react";

interface BotMessageWrapperProps {
  children: ReactNode;
}

export const BotMessageWrapper: FC<BotMessageWrapperProps> = ({ children }) => {
  return (
    <div className="border border-solid rounded-lg font-normal text-sm border-neutral-300 px-4 py-2">
      {children}
    </div>
  );
};
