import { configureStore } from "@reduxjs/toolkit";
import counterSlice  from "@/slices/storeSlice";
import searchSlice from "@/slices/searchSlice";

export const store = configureStore({
  reducer: {
    counterStore: counterSlice,
    searchStore: searchSlice,
  },
});
