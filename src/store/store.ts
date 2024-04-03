import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./Slices/itemsSlice";
import subscriberSlice from "./Slices/subscriberSlice";
import senderSlice from "./Slices/senderSlice";
import templateSlice from "./Slices/templateSlice";
export const store = configureStore({
  reducer: {
    items: itemsReducer,
    subscriber: subscriberSlice,
    sender: senderSlice,
    // template: templateSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
