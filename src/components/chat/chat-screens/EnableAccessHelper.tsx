import { Button } from "./../../common/base/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useDispatch, useSelector } from "react-redux";
import { BotMessageIds } from "./../../../constants/chat";
import {
  updateIsChildScreenVisibleOnTopOfParent,
  updateVisibleChatId,
} from "./../../../redux/slices/chatSlice";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const ImgPath = require("./../../../assets/images/emailSettings.png");
const globeImgPath = require("./../../../assets/images/globe.png");

export const EnableAccessHelper = () => {
  const dispatch = useDispatch();
  const visibleChatId = useSelector((state: any) => state.chat.visibleChatId);
  const disableAction = visibleChatId !== BotMessageIds.ENABLE_ACCESS_HELPER;

  const showEnableAccessSuccess = () => {
    dispatch(updateIsChildScreenVisibleOnTopOfParent(false));
    dispatch(updateVisibleChatId(BotMessageIds.ENABLE_ACCESS_SUCCESS));
  };

  const goBack = () => {
    dispatch(updateIsChildScreenVisibleOnTopOfParent(false));
  };

  return (
    <>
      <div className="relative w-full">
        <div className="h-9 bg-primary-900 font-semibold text-white flex gap-2 items-center px-3 py-2">
          <div onClick={goBack} className="cursor-pointer mr-2">
            <KeyboardBackspaceIcon />
          </div>
          Enable access for ProsperBot
        </div>
      </div>
      <div className="px-6 py-2">
        <div className="font-normal text-xs text-center">
          To get started, you need to enable access so I can help set up your
          financial plan.
        </div>

        <div className="flex flex-col justify-center gap-2 mt-2">
          <div className="bg-[#cccccc33] px-4 py-3 rounded-md">
            <div className="flex flex-col gap-2">
              <div className="flex gap-3 items-flex-start">
                <div className="w-6 h-6 border rounded-full bg-[#E17A3A] flex items-center justify-center font-bold text-sm text-white">
                  1
                </div>

                <div className="w-56">
                  <div className="font-bold text-sm">
                    Locate the ‘Share’ button
                  </div>

                  <div className="font-light text-xs mt-0.5">
                    It should be on the top right side of your screen.
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-px">
                <button className="flex gap-2 items-center bg-[#c7e5fc] border-none outline-none focus:outline-none rounded-l-full font-semibold pl-3 pr-1.5 py-2 font-sans">
                  <img src={globeImgPath} className="w-3" />
                  Share
                </button>
                <div className="flex items-center bg-[#c7e5fc] pl-1 pr-2.5 rounded-r-full">
                    <ArrowDropDownIcon sx={{ fontSize: 16 }} />
                  </div>
              </div>
            </div>
          </div>

          <div className="bg-[#cccccc33] px-4 py-3 rounded-md">
            <div className="flex flex-col gap-2">
              <div className="flex gap-3 items-flex-start">
                <div className="w-6 h-6 border rounded-full bg-[#E17A3A] flex items-center justify-center font-bold text-sm text-white">
                  2
                </div>

                <div className="w-56">
                  <div className="font-bold text-sm">
                    Add ProsperBot as editor
                  </div>

                  <div className="font-light text-xs mt-0.5">
                    Make sure you add the email{" "}
                    <span className="font-semibold italic">
                      prosperbot@prosperbot.ai
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <img src={ImgPath} alt="share email" className="w-48" />
              </div>
            </div>
          </div>

          <div className="bg-[#cccccc33] px-4 py-3 rounded-md">
            <div className="flex flex-col gap-2">
              <div className="flex gap-3 items-center">
                <div className="w-6 h-6 border rounded-full bg-[#E17A3A] flex items-center justify-center font-bold text-sm text-white">
                  3
                </div>

                <div className="w-56 font-bold text-sm">
                  Click on ‘Send’ to confirm
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2">
          <Button
            onClick={showEnableAccessSuccess}
            className="w-full bg-secondary-900 text-white px-6 py-3"
            isDisabled={disableAction}
          >
            I've enabled access
          </Button>
        </div>
      </div>
    </>
  );
};
