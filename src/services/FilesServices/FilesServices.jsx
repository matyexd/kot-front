import { Api } from "../apiService";
import { FilesUrl } from "../../routes/routes-enums";
import { baseConfig } from "../apiConfig";

const authInstance = new Api(baseConfig);

class FileServices {
  static getUsersDir = async () => {
    return await authInstance.get(FilesUrl.getUsersDir);
  };

  static getFilesByParentDir = async (dirId) => {
    return await authInstance.get(FilesUrl.getFilesByParentDir(dirId));
  };

  static postCreateDir = async (dirId, query) => {
    return await authInstance.post(FilesUrl.getFilesByParentDir(dirId), query);
  };
}

export default FileServices;
