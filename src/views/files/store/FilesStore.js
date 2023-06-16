import { action, makeObservable, observable } from "mobx";
import FileServices from "../../../services/FilesServices/FilesServices";

class FilesStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      items: observable,
      setItems: action,
    });
  }

  items = {};

  setItems = (value = {}) => {
    this.items = value;
  };

  postGetUsersDir = async () => {
    try {
      const { data } = FileServices.getUsersDir();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
}

export default FilesStore;
