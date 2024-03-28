import { createSlice } from "@reduxjs/toolkit";

interface SubscriberState {
  companyName: string;
  street: string;
  numberStreet: string;
  zipCode: string;
  city: string;
  ico: string;
  dic: string;
  email: string;
}

const initialState: SubscriberState = {
  companyName: "",
  street: "",
  numberStreet: "",
  zipCode: "",
  city: "",
  ico: "",
  dic: "",
  email: "",
};

const subscriberSlice = createSlice({
  name: "subscriber",
  initialState,
  reducers: {
    addSubscriber: (state, action) => {
      return action.payload;
    },
  },
});

export const { addSubscriber } = subscriberSlice.actions;
export default subscriberSlice.reducer;
