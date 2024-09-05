import { useState } from "react";
import { Button } from "../base/Button";
import { ArrowRight } from "../icons/ArrowRight";
import { CircleIcon } from "../icons/CircleIcon";
import { CloseIcon } from "../icons/CloseIcon";

const Steps = [
  {
    id: 1,
    title: "Welcome",
  },
  {
    id: 2,
    title: "Income",
  },
  {
    id: 3,
    title: "Expenses",
  },
  {
    id: 4,
    title: "Accounts",
  },
  {
    id: 5,
    title: "Financial Plan",
  },
];

type TProps = {
  onClose: () => void;
};

const ChatWindow = ({ onClose }: TProps) => {
  const [showAllSteps, setShowAllSteps] = useState<boolean>(false);
  const [activeStep, setActiveStep] = useState<number>(1);

  const toggleSteps = (): void => {
    setShowAllSteps(!showAllSteps);
  };

  return (
    <div className="fixed bottom-24 right-6 h-[606px] w-[350px] bg-white shadow-lg z-50">
      <div className="h-9 bg-neutral-500 font-semibold text-white flex justify-between items-center px-3 py-2">
        ProsperBot
        <span onClick={onClose} className="cursor-pointer">
          <CloseIcon />
        </span>
      </div>
      <div className="relative w-full">
        <div className="h-9 bg-primary-900 font-semibold text-white flex justify-between items-center px-3 py-2">
          {Steps[activeStep - 1]?.title} ({activeStep}/5)
          <span onClick={toggleSteps} className="cursor-pointer">
            <CircleIcon />
          </span>
        </div>

        {showAllSteps && (
          <div className="absolute top-12 z-50 bg-primary-900 flex flex-col w-full">
            {Steps?.map((step, index) => (
              <div
                key={index}
                className={`cursor-pointer px-3 py-2 ${
                  activeStep === step.id
                    ? "font-semibold text-white"
                    : "font-medium text-gray-300"
                }`}
                onClick={() => setActiveStep(step.id)}
              >
                {step.title}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="h-[calc(100%-190px)] overflow-y-auto p-2">Hello</div>

      <hr className="my-0 h-[2px] border-0 bg-neutral-300" />

      <div className="border-t border-gray-900 p-3 flex items-center">
        <input
          type="text"
          placeholder="Write something..."
          className="w-full p-2 outline-none focus:outline-none border-none"
        />
        <Button onClick={onClose}>
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default ChatWindow;
