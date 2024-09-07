import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChatState {
  visibleChatId: string;
  isChildScreenVisibleOnTopOfParent: boolean;
  triggerUserMessageWithText: string | null;
}

const initialState: ChatState = {
  visibleChatId: "",
  isChildScreenVisibleOnTopOfParent: false,
  triggerUserMessageWithText: null,
};

export const chatSlice = createSlice({
  name: "chat",
  initialState: initialState,
  reducers: {
    updateVisibleChatId: (state, action: PayloadAction<string>) => {
      state.visibleChatId = action.payload;
    },
    updateIsChildScreenVisibleOnTopOfParent: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.isChildScreenVisibleOnTopOfParent = action.payload;
    },
    updateTriggerMessage: (state, action: PayloadAction<string | null>) => {
      state.triggerUserMessageWithText = action.payload;
    },
  },
});

export const {
  updateVisibleChatId,
  updateTriggerMessage,
  updateIsChildScreenVisibleOnTopOfParent,
} = chatSlice.actions;
export default chatSlice.reducer;
