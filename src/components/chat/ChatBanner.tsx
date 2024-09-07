import { useState } from "react";
import { CircleIcon } from "../common/icons/CircleIcon";
import { ChatStep } from "@/types/Chat";

const Steps: ChatStep[] = [
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

export const ChatBanner = () => {
  const [showAllSteps, setShowAllSteps] = useState<boolean>(false);
  const [activeStep, setActiveStep] = useState<number>(1);

  const toggleSteps = (): void => {
    setShowAllSteps(!showAllSteps);
  };

  const handleOnActiveItemChange = (id: number): void => {
    toggleSteps();
    setActiveStep(id);
  };

  return (
    <div className="relative w-full">
      <div className="h-9 bg-primary-900 font-semibold text-white flex justify-between items-center px-3 py-2">
        {Steps[activeStep - 1]?.title} ({activeStep}/{Steps.length})
        <span onClick={toggleSteps} className="cursor-pointer">
          <CircleIcon />
        </span>
      </div>

      {showAllSteps && (
        <div className="absolute top-12 z-50 bg-primary-900 flex flex-col w-full">
          {Steps?.map((step: ChatStep, index: number) => (
            <div
              key={index}
              className={`cursor-pointer px-3 py-2 ${
                activeStep === step.id
                  ? "font-semibold text-white"
                  : "font-medium text-gray-300"
              }`}
              onClick={() => handleOnActiveItemChange(step.id)}
            >
              {step.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
