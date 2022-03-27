import { createReducer } from "@reduxjs/toolkit";
import { setIsLoading, toggleDarkMode } from "../actions";
import { appState, AppStateInterface } from "../states/state";

const appReducer = createReducer<AppStateInterface>(appState, (builder) => {
  builder
    .addCase(toggleDarkMode, (state, action) => {
      state.darkMode = action.payload;
    })

    .addCase(setIsLoading, (state, action) => {
      state.isLoading = action.payload;
    });
});

export default appReducer;
