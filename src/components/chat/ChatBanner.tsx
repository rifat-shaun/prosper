import { useState } from "react";
import { CircleIcon } from "../common/icons/CircleIcon";
import { ChatStep } from "@/types/Chat";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const greenTickPath = require("./../../assets/images/greenTick.png");
const bankPath = require("./../../assets/images/bank.png");
const bankCardPath = require("./../../assets/images/bankCard.png");
const currencyPath = require("./../../assets/images/currency.png");
const financeGraphPath = require("./../../assets/images/financeGraph.png");

const Steps: ChatStep[] = [
  {
    id: 1,
    title: "Welcome",
    icon: <img src={greenTickPath} />,
  },
  {
    id: 2,
    title: "Income",
    icon: <img src={currencyPath} />,
  },
  {
    id: 3,
    title: "Expenses",
    icon: <img src={bankCardPath} />,
  },
  {
    id: 4,
    title: "Accounts",
    icon: <img src={bankPath} />,
  },
  {
    id: 5,
    title: "Financial Plan",
    icon: <img src={financeGraphPath} />,
  },
];

export const ChatBanner = () => {
  const [showAllSteps, setShowAllSteps] = useState<boolean>(false);
  const [activeStep, setActiveStep] = useState<number>(1);

  const toggleSteps = (): void => {
    setShowAllSteps(!showAllSteps);
  };

  const handleOnActiveItemChange = (id: number): void => {
    // toggleSteps();
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
        <div className="absolute top-12 z-50 bg-primary-900 flex flex-col w-full pb-2">
          {Steps?.map((step: ChatStep, index: number) => (
            <div
              key={index}
              className={`cursor-pointer px-3 py-2 flex items-center gap-2 ${
                activeStep === step.id
                  ? "font-semibold text-white"
                  : "font-medium text-gray-300"
              }`}
              onClick={() => handleOnActiveItemChange(step.id)}
            >
              {activeStep === step.id && <ArrowRightAltIcon />} {step.icon}{" "}
              {step.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
