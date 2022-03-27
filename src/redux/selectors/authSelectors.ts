import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const _getInitialAuthState = (state: RootState) => state.authReducer;

export const getSignInForm = createSelector(
  [_getInitialAuthState],
  (state) => state.signInForm
);

export const getSignUpForm = createSelector(
  [_getInitialAuthState],
  (state) => state.signUpForm
);

export const getIsAuthenticated = createSelector(
  [_getInitialAuthState],
  (state) => state.isAuthenticated
);

export const getAuthenticatedUser = createSelector(
  [_getInitialAuthState],
  (state) => state.user
);
