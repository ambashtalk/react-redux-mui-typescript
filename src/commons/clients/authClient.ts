import { NetworkClient } from "./networkClient";
import { LoginRequest, LogoutRequest } from "./requests";
import { LoginResponse } from "./response";

class AuthClient extends NetworkClient {
  async loginUser(data: LoginRequest) {
    this.API.post<LoginResponse>("/user/login", data)
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
      });

    return new Promise<LoginResponse>((resolve) => {
      resolve({
        uuid: "uuid",
        name: "test_name",
        email: "test@email.com",
        token: "some_token",
      });
    });
  }

  async logoutUser(data: LogoutRequest) {
    this.API.post("/user/logout", data)
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
      });

    return new Promise((resolve) => {
      resolve({});
    });
  }
}

export default new AuthClient();
