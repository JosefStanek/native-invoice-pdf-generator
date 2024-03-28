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
  subscriber: {
    companyName: "",
    street: "",
    numberStreet: "",
    zipCode: "",
    city: "",
    ico: "",
    dic: "",
    email: "",
  },
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {},
});

export default headerSlice.reducer;
