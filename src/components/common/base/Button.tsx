import { ReactNode } from "react";

type TProps = {
  onClick: () => void;
  children: ReactNode;
  className?: string;
};

export const Button = ({ onClick, children, className }: TProps) => {
  return (
    <button
      className={`bg-secondary-900 text-white px-6 py-3 border-none outline-none focus:outline-none rounded-full flex items-center justify-center cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
