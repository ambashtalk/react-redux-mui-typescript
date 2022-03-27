import Cookies, { CookieAttributes } from "js-cookie";
import { Response } from "express";

class CookieManagerService {
  public static setCookie(
    key: string,
    value: string | object,
    options?: CookieAttributes
  ): void {
    Cookies.set(key, value, options);
  }

  public static getCookie(key: string): string | undefined {
    return Cookies.get(key);
  }

  public static deleteCookie(
    key: string,
    options?: CookieAttributes
  ): Response | void {
    return Cookies.remove(key, options);
  }
}

export default CookieManagerService;
