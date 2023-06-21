import UserStore from "./UserStore";
import AuthStore from "../views/auth/store/AuthStore";
import FilesStore from "../views/files/store/FilesStore";

class KotCloudStore {
  constructor() {
    this.userStore = new UserStore(this);
    this.authStore = new AuthStore(this);
    this.filesStore = new FilesStore(this);
  }
}

export default KotCloudStore;
