import { Api } from "../apiService";
import { FilesUrl, LogsUrl } from "../../routes/routes-enums";
import { baseConfig } from "../apiConfig";

const authInstance = new Api(baseConfig);

class LogsService {
  static getLogs = async () => {
    return await authInstance.get(LogsUrl.getLogs);
  };
}

export default LogsService;
