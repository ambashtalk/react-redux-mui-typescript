import { createReducer } from "@reduxjs/toolkit";
import CookieManagerService from "src/commons/services/cookieManager";
import {
  setIsAuthenticated,
  checkIsAuthenticated,
} from "../actions/authActions";
import {
  saveAuthenticatedUser,
  saveSignInForm,
  saveSignUpForm,
} from "../actions/authActions";
import { LoginStateInterface, loginState } from "../states/authState";

const authReducer = createReducer<LoginStateInterface>(
  loginState,
  (builder) => {
    builder
      .addCase(saveSignInForm, (state, action) => {
        state.signInForm = action.payload;
      })
      .addCase(saveSignUpForm, (state, action) => {
        state.signUpForm = action.payload;
      })
      .addCase(saveAuthenticatedUser, (state, action) => {
        state.user = action.payload;
      })
      .addCase(setIsAuthenticated, (state, action) => {
        if (action.payload) {
          CookieManagerService.setCookie("token", state.user.token);
        } else {
          CookieManagerService.deleteCookie("token");
        }

        state.isAuthenticated = action.payload;
      })
      .addCase(checkIsAuthenticated, (state) => {
        if (CookieManagerService.getCookie("token")) {
          state.isAuthenticated = true;
        } else {
          state.isAuthenticated = false;
        }
      });
  }
);

export default authReducer;
