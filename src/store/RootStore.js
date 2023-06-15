import UserStore from "./UserStore";
import AuthStore from "../views/auth/store/AuthStore";

class KotCloudStore {
  constructor() {
    this.userStore = new UserStore(this);
    this.authStore = new AuthStore(this);
  }
}

export default KotCloudStore;
