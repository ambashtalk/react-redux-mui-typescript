import { createAction } from "@reduxjs/toolkit";
import { SET_IS_LOADING, TOOGLE_DARK_MODE } from "../types";

export const toggleDarkMode = createAction<boolean>(TOOGLE_DARK_MODE);
export const setIsLoading = createAction<boolean>(SET_IS_LOADING);
