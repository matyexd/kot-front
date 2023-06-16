import { Api } from "../apiService";
import { AuthUrl, FilesUrl } from "../../routes/routes-enums";
import { baseConfig } from "../apiConfig";

const authInstance = new Api(baseConfig);

class FileServices {
  static getUsersDir = async () => {
    return await authInstance.get(FilesUrl.getUsersDir);
  };
}

export default FileServices;
