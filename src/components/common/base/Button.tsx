import { ReactNode } from "react";

type TProps = {
  onClick: () => void;
  children: ReactNode;
  className?: string;
  isDisabled?: boolean;
};

export const Button = ({
  onClick,
  children,
  className,
  isDisabled = false,
}: TProps) => {
  return (
    <button
      className={`border-none outline-none focus:outline-none rounded-full flex items-center justify-center ${
        isDisabled ? " opacity-75 cursor-not-allowed" : "cursor-pointer"
      } ${className}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
