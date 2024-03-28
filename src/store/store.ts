import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./Slices/itemsSlice";
import subscriberSlice from "./Slices/subscriberSlice";
import senderSlice from "./Slices/senderSlice";
export const store = configureStore({
  reducer: {
    items: itemsReducer,
    subscriber: subscriberSlice,
    sender: senderSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
