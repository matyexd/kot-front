import { action, makeObservable, observable } from "mobx";

class UserStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      userData: observable,
      userEmail: observable,
      setUserData: action,
      setUserEmail: action,
    });
  }

  userData = {};
  userEmail = "";

  setUserData = (userData = {}) => {
    this.userData = userData;
  };
  setUserEmail = (email = "") => {
    this.userEmail = email;
  };

  reset = () => {
    this.setUserData();
    this.setUserEmail();
  };

  mergeUserData = (userData) => {
    this.setUserEmail(userData.email);
  };
}

export default UserStore;
