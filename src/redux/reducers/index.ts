import { combineReducers } from "@reduxjs/toolkit";
import appReducer from "./reducer";
import authReducer from "./authReducers";

export const rootReducer = combineReducers({
  appReducer,
  authReducer,
});
