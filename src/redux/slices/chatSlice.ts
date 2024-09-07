import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChatState {
  visibleChatId: string;
}

const initialState: ChatState = {
  visibleChatId: "",
};

export const chatSlice = createSlice({
  name: "chat",
  initialState: initialState,
  reducers: {
    updateVisibleChatId: (state, action: PayloadAction<string>) => {
      state.visibleChatId = action.payload;
    },
  },
});

export const { updateVisibleChatId } = chatSlice.actions;
export default chatSlice.reducer;