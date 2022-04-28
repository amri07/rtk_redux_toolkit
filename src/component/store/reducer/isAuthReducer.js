import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  role: 'admin',
  status: true
}

const isAuthSlice = createSlice({
  name: 'isAuth',
  initialState: initialState,
  reducers: {
    toggleAuth: (state) => {
      state.status = !state.status
    }
  }
})

export const { toggleAuth } = isAuthSlice.actions
export const loggedActions = isAuthSlice.reducer