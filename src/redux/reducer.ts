import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { decrement, getPostData, increment, toggleDarkMode } from "./actions";
import {
  appState,
  AppStateInterface,
  CounterInterface,
  counterState,
  ThunkInterface,
  thunkState,
} from "./state";

const appReducer = createReducer<AppStateInterface>(appState, (builder) => {
  builder.addCase(toggleDarkMode, (state, action) => {
    state.darkMode = action.payload;
  });
});

const countReducer = createReducer<CounterInterface>(
  counterState,
  (builder) => {
    builder
      .addCase(increment, (state, action) => {
        state.count++;
      })
      .addCase(decrement, (state, action) => {
        state.count--;
      })
      .addDefaultCase((state) => state);
  }
);

export const thunkReducer = createReducer<ThunkInterface>(
  thunkState,
  (builder) => {
    builder.addCase(getPostData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  }
);

export const rootReducer = combineReducers({
  appReducer,
  countReducer,
  thunkReducer,
});
