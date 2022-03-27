import { createAction } from "@reduxjs/toolkit";
import {
  AuthenticatedUserStateInterface,
  SignInFormStateInterface,
  SignUpFormStateInterface,
} from "../states/authState";
import {
  CHECK_IS_AUTHENTICATED,
  SAVE_AUTHENTICATED_USER,
  SAVE_SIGNIN_FORM,
  SAVE_SIGNUP_FORM,
  SET_IS_AUTHENTICATED,
} from "../types/authTypes";

export const saveSignInForm =
  createAction<SignInFormStateInterface>(SAVE_SIGNIN_FORM);

export const saveSignUpForm =
  createAction<SignUpFormStateInterface>(SAVE_SIGNUP_FORM);

export const saveAuthenticatedUser =
  createAction<AuthenticatedUserStateInterface>(SAVE_AUTHENTICATED_USER);

export const setIsAuthenticated = createAction<boolean>(SET_IS_AUTHENTICATED);

export const checkIsAuthenticated = createAction(CHECK_IS_AUTHENTICATED);
