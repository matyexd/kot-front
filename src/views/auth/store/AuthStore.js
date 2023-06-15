import { makeObservable, observable, action } from "mobx";
import { TokenService } from "../../../services/TokenService";
import AuthService from "../../../services/AuthService/AuthService";
import jwtDecode from "jwt-decode";
import { AppPath } from "../../../routes/routes-enums";

class AuthStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      inProcess: observable,
      errors: observable,
      history: observable,

      setHistory: action,
      setErrors: action,
      setInProcess: action,
    });
  }

  history = {};
  inProcess = false;
  errors = "";

  setHistory = (history) => {
    this.history = history;
  };

  setErrors = (message = "") => {
    this.errors = message;
  };

  setInProcess = (value = false) => {
    this.inProcess = value;
  };

  setTokens = ({ accessToken }) => {
    TokenService.setToken(accessToken);
    this.rootStore.userStore.mergeUserData(jwtDecode(accessToken));
  };

  login = async () => {
    this.history.push(AppPath.main);
  };

  appendToken = async (data) => {
    try {
      TokenService.setStorage();
      this.setTokens({
        accessToken: data.token,
      });

      await this.login();

      //await this.checkForAdminPlan(data.accessToken)
    } catch (e) {}
  };

  postLogin = async ({ email, password }) => {
    const payload = {
      email: email,
      password: password,
    };

    try {
      this.setErrors();
      this.setInProcess(true);
      const { data } = await AuthService.postLogin(payload);

      await this.appendToken(data);
      //gtmAuthCompleted(this.rootStore.userStore);
    } catch (e) {
      this.setErrors("Неправильный логин или пароль");

      // this.addErrors(
      //   "message",
      //   "Что-то пошло не так... Попробуйте снова или обратитесь в поддержку"
      // );
    } finally {
      this.setInProcess();
    }
  };

  logout = async (isReload = true) => {
    await this.getLogout();
    await TokenService.removeToken();
    await this.history.push(AppPath.signIn);
    if (isReload) {
      Object.values(this.rootStore).forEach((store) => {
        store.reset && store.reset();
      });
    }
  };

  getLogout = async () => {
    try {
      const { data } = await AuthService.getLogout();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
}

export default AuthStore;
