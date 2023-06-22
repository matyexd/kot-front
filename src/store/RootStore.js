import UserStore from "./UserStore";
import AuthStore from "../views/auth/store/AuthStore";
import FilesStore from "../views/files/store/FilesStore";
import LogsStore from "../views/logs/store/LogsStore";

class KotCloudStore {
  constructor() {
    this.userStore = new UserStore(this);
    this.authStore = new AuthStore(this);
    this.filesStore = new FilesStore(this);
    this.logsStore = new LogsStore(this);
  }
}

export default KotCloudStore;
