import { Api } from "../apiService";
import { AuthUrl } from "../../routes/routes-enums";
import { baseConfig } from "../apiConfig";

const authInstance = new Api(baseConfig);

class AuthService {
  static postLogin = async (payload) => {
    return await authInstance.post(AuthUrl.postLogin, payload);
  };

  static getLogout = async () => {
    return await authInstance.post(AuthUrl.logout);
  };
}

export default AuthService;
