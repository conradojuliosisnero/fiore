import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  countProductsCart: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.searchValue = action.payload;
    },
    setCountProductsCart: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});

export const { setCart, setCountProductsCart } = cartSlice.actions;

export default cartSlice.reducer;
