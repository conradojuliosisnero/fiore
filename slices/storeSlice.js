import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    counterProducts: 0,
    incrementCount: 0,
    decrementCount: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    counterProducts: (state, action) => {
      state.counterProducts = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, counterProducts } =
  counterSlice.actions;

export default counterSlice.reducer;
