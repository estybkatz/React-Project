import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add1(state) {
      state.counter = state.counter + 1;
    },
    sub1(state) {
      state.counter = state.counter - 1;
    },
    addNumber(state, action) {
      /*
       * action.payload = txt
       * state.counter = state.counter + +action.payload
       * +action.payload => convert from string to number
       */

      state.counter += +action.payload;
    },
  },
});



export const counterActions = counterSlice.actions;
/*
    const counterActions = counterSlice.actions
    export counterActions
*/

export default counterSlice.reducer;
/*
    reducer has state and actions
    this export needed to connect it with the big pie
*/
