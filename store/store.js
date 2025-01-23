import { configureStore } from "@reduxjs/toolkit";
import counterSlice  from "@/slices/storeSlice";
import searchSlice from "@/slices/searchSlice";
import cartSlice from "@/slices/cartSlice";

export const store = configureStore({
  reducer: {
    counterStore: counterSlice,
    searchStore: searchSlice,
    cartStore: cartSlice,
  },
});
