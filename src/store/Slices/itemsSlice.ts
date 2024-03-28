import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface Item {
  id: string;
  title: string;
  price: string;
  DPHPrice: string;
}

interface ItemsState {
  items: Item[];
}

const calculateDPHPrice = (price: string): string => {
  return (+price * 1.21).toFixed(2).toString();
};

const initialState: ItemsState = {
  items: [],
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem: {
      reducer: (state, action: PayloadAction<Item>) => {
        state.items.push(action.payload);
      },
      prepare: (title: string, price: string) => {
        const id = nanoid();
        const DPHPrice = calculateDPHPrice(price);
        return { payload: { id, title, price, DPHPrice } };
      },
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, deleteItem } = itemsSlice.actions;

export default itemsSlice.reducer;
