import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TemplateState {
  currentTemplate: string;
}

const initialState: TemplateState = {
  currentTemplate: "basicTemplate",
};

const templateSlice = createSlice({
  name: "template",
  initialState,
  reducers: {
    setTemplate: (state, action: PayloadAction<string>) => {
      state.currentTemplate = action.payload;
    },
  },
});

export const { setTemplate } = templateSlice.actions;

export default templateSlice.reducer;
