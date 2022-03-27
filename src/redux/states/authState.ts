export interface SignInFormStateInterface {
  username: string;
  password: string;
}

export interface SignUpFormStateInterface {
  username: string;
  password: string;
  cnfpassowrd: string;
  email: string;
}

export interface AuthenticatedUserStateInterface {
  uuid: string;
  name: string;
  email: string;
  token: string;
}

export interface LoginStateInterface {
  signInForm: SignInFormStateInterface;
  signUpForm: SignUpFormStateInterface;
  user: AuthenticatedUserStateInterface;
  isAuthenticated: boolean;
}

export const loginState: LoginStateInterface = {
  signInForm: {
    username: "",
    password: "",
  },
  signUpForm: {
    username: "",
    password: "",
    cnfpassowrd: "",
    email: "",
  },
  user: {
    name: "",
    email: "",
    uuid: "",
    token: "",
  },
  isAuthenticated: false,
};
