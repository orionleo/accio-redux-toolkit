import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment: (state, action) => {
      try {
        // state.counter = action.payload
        state.counter = state.counter + 1;
      } catch (error) {
        console.log(error);
      }
    },
    decrement: (state, action) => {
      try {
        // state.counter = action.payload
        state.counter = state.counter - 1;
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
