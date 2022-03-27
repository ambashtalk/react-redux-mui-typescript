export interface ErrorResponse {
  errCode: number;
  errMsg: string;
}

export interface LoginResponse {
  uuid: string;
  name: string;
  email: string;
  token: string;
}
