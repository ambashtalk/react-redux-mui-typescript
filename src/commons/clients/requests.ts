import { AxiosRequestHeaders } from "axios";

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LogoutRequest {
  uuid: string;
}
