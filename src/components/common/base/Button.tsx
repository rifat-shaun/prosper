import { ReactNode } from "react";

type TProps = {
  onClick: () => void;
  children: ReactNode;
  className?: string;
};

export const Button = ({ onClick, children, className }: TProps) => {
  return (
    <button
      className={`border-none outline-none focus:outline-none rounded-full flex items-center justify-center cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
