import { createSlice } from "@reduxjs/toolkit";
import { basicTemplate } from "../../components/templates/BasicTemplate";

interface Item {
  id: string;
  title: string;
  price: string;
  DPHPrice: string;
}

interface Subscriber {
  companyName: string;
  street: string;
  numberStreet: string;
  zipCode: string;
  city: string;
  ico: string;
  dic: string;
  email: string;
}

interface templateState {
  currentTemplatePath: (items: Item[], subscriber: Subscriber) => {};
}

const initialState: templateState = {
  currentTemplatePath: basicTemplate,
};

const templateSlice = createSlice({
  name: "template",
  initialState,
  reducers: {
    setTemplatePath: (state, action) => {
      state.currentTemplatePath = action.payload;
    },
  },
});

export const { setTemplatePath } = templateSlice.actions;

export default templateSlice.reducer;
