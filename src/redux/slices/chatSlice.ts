import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChatState {
  visibleChatId: string;
  isChildScreenVisibleOnTopOfParent: boolean;
}

const initialState: ChatState = {
  visibleChatId: "",
  isChildScreenVisibleOnTopOfParent: false,
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
  },
});

export const { updateVisibleChatId, updateIsChildScreenVisibleOnTopOfParent } =
  chatSlice.actions;
export default chatSlice.reducer;
