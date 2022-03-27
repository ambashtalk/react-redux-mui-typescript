import React, { useContext, createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import authClient from "src/commons/clients/authClient";
import { LoginRequest, LogoutRequest } from "src/commons/clients/requests";
import { LoginResponse } from "src/commons/clients/response";
import { setIsLoading } from "src/redux/actions";
import {
  saveAuthenticatedUser,
  setIsAuthenticated,
} from "src/redux/actions/authActions";
import { getIsLoading } from "src/redux/selectors";
import { getAuthenticatedUser } from "src/redux/selectors/authSelectors";
import { AuthenticatedUserStateInterface as User } from "src/redux/states/authState";

interface AuthContext {
  user: User;
  isLoading: boolean;
  signIn: (data: LoginRequest) => Promise<User>;
  signOut: () => Promise<boolean>;
}

const authContext = createContext<AuthContext>({} as AuthContext);

const useProvideAuth = (): AuthContext => {
  const dispatch = useDispatch();
  const user = useSelector(getAuthenticatedUser);
  const isLoading = useSelector(getIsLoading);

  const setUser = (user: User, isAuthenticated: boolean) => {
    dispatch(saveAuthenticatedUser(user));
    dispatch(setIsAuthenticated(isAuthenticated));
  };

  const setLoading = (to: boolean) => {
    dispatch(setIsLoading(to));
  };

  const handleSignIn = (rawUser: LoginResponse) => {
    const user: User = {
      uuid: rawUser.uuid,
      name: rawUser.name,
      email: rawUser.email,
      token: rawUser.token,
    };
    setUser(user, true);
    setLoading(false);

    return user;
  };
  const handleSignOut = () => {
    setUser({ uuid: "", name: "", email: "", token: "" }, false);
    setLoading(false);

    return true;
  };

  const signIn = async (data: LoginRequest) => {
    setLoading(true);
    return authClient
      .loginUser(data)
      .then((response) => handleSignIn(response));
  };

  const signOut = async () => {
    const data: LogoutRequest = {
      uuid: user.uuid,
    };

    setLoading(true);
    return authClient.logoutUser(data).then(() => handleSignOut());
  };

  return {
    user,
    isLoading,
    signIn,
    signOut,
  };
};

export const useAuth = () => {
  return useContext(authContext);
};

export const AuthProvider: React.FC = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};
