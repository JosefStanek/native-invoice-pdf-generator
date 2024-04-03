import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type SenderState = {
  senderCompanyName: string;
  senderStreet: string;
  senderNumberStreet: string;
  senderZipCode: string;
  senderCity: string;
  senderIco: string;
  senderDic: string;
  senderEmail: string;
  senderAccountNumber: string;
};

const initialState: SenderState = {
  senderCompanyName: "",
  senderStreet: "",
  senderNumberStreet: "",
  senderZipCode: "",
  senderCity: "",
  senderIco: "",
  senderDic: "",
  senderEmail: "",
  senderAccountNumber: "",
};

const senderSlice = createSlice({
  name: "sender",
  initialState,
  reducers: {
    setSender: (state, action: PayloadAction<SenderState>) => {
      return { ...state, ...action.payload };
    },
    resetSender: () => {
      return initialState;
    },
  },
});

export const { setSender, resetSender } = senderSlice.actions;
export default senderSlice.reducer;
