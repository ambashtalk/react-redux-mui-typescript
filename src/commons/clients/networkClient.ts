import api from "src/commons/services/api";
import { LoginRequest } from "./requests";
import { LoginResponse } from "./response";

export class NetworkClient {
  API;

  constructor() {
    this.API = api;
  }

  getMockData() {
    return this.API.get("/");
  }
}

export default new NetworkClient();
