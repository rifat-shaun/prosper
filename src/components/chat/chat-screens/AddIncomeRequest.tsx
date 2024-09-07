import { Button } from "../../common/base/Button";
import { BotMessageWrapper } from "./BotMessageWrapper";

export const AddIncomeRequest = () => {
  return (
    <div className="flex flex-col gap-2">
      <BotMessageWrapper>
        <p>
          This section will help you forecast your annual income and tax
          liability.💡
        </p>
        <p>
          To get started we need to add your financial information using Plaid.
        </p>
      </BotMessageWrapper>

      <div className="flex justify-center mt-2">
        <Button
          onClick={() => {}}
          className="w-full bg-black text-white px-6 py-3 "
        >
          Import with Plaid
        </Button>
      </div>

      <div className="flex justify-center mt-2">
        <Button
          onClick={() => {}}
          className="w-full bg-white text-black px-6 py-2.5 !border-1 !border-solid !border-black"
        >
          Input manually
        </Button>
      </div>
    </div>
  );
};
