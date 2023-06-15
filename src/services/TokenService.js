export class TokenService {
  /* Save a token in Local Storage
   *
   * @param {string} token
   */

  static storage = localStorage;

  static setStorage() {
    TokenService.storage = localStorage;
  }

  static setToken(token) {
    TokenService.storage.setItem("token", token);
  }

  static isTokenExists() {
    return TokenService.storage.getItem("token") !== null;
  }
  static isTokenExistsSessionStorage() {
    return sessionStorage.getItem("token") !== null;
  }

  /* Remove a token from Local Storage.
   *
   */
  static removeToken() {
    TokenService.storage.removeItem("token");
  }

  /**
   * Get a token value.
   *
   * @returns {string}
   */

  static getToken() {
    console.log(TokenService.storage.getItem("token"));
    return TokenService.storage.getItem("token") || "";
  }
}
