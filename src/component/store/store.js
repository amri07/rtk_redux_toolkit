import { configureStore } from "@reduxjs/toolkit";
import { counterAction } from "./reducer/counterReducer";
import { loggedActions } from "./reducer/isAuthReducer";

export const store = configureStore({
  reducer: {
    counter: counterAction,
    isAuth: loggedActions
  }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())