import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sender: {
    companyName: "",
    street: "",
    numberStreet: "",
    zipCode: "",
    city: "",
    ico: "",
    dic: "",
    email: "",
    accountNumber: "",
  },
};

const senderSlice = createSlice({
  name: "subscriber",
  initialState,
  reducers: {},
});

export default senderSlice.reducer;
