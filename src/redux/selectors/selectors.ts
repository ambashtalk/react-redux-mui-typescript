import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const _getInitialAppState = (state: RootState) => state.appReducer;

export const getDarkMode = createSelector(
  [_getInitialAppState],
  (state) => state.darkMode
);

export const getIsLoading = createSelector(
  [_getInitialAppState],
  (state) => state.isLoading
);
