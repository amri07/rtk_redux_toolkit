import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  show: false
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment: (state, action) => {
      state.counter = state.counter + 1
    },
    decrement: (state, action) => {
      state.counter = state.counter - 1
    },
    multiply: (state, action) => {
      state.counter = state.counter + action.payload.amount
    }
  }
})

export const { increment, decrement, multiply } = counterSlice.actions
export const counterAction = counterSlice.reducer