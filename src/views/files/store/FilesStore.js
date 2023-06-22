import { action, makeObservable, observable } from "mobx";
import FileServices from "../../../services/FilesServices/FilesServices";

class FilesStore {
  items = [];
  parentDir = {
    id: -1,
    name: "",
  };
  dirHistory = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      items: observable,
      parentDir: observable,
      dirHistory: observable,

      setParentDir: action,
      setItems: action,
    });
  }

  setItems = (value = {}) => {
    this.items = value;
  };

  addInDirHistory = (value) => {
    this.dirHistory.push(value);
  };

  chooseInHistory = (id) => {
    let history = [];
    try {
      this.dirHistory.forEach((value) => {
        if (value.id !== id) {
          history.push(value);
        } else {
          throw "Все";
        }
      });
    } catch (e) {}
    this.dirHistory = history;
  };

  setParentDir = async (
    value = {
      id: -1,
      name: "",
    }
  ) => {
    this.parentDir = value;
  };

  getUsersDir = async () => {
    try {
      const { data } = await FileServices.getUsersDir();

      await this.setParentDir({ id: data.dirId, name: data.dirName });
      await this.addInDirHistory({ id: data.dirId, name: data.dirName });
      await this.setItems(data.items);
    } catch (e) {
      console.log(e);
    }
  };

  getUsersDirById = async (dirId) => {
    try {
      const { data } = await FileServices.getFilesByParentDir(dirId);
      await this.setParentDir({ id: data.dirId, name: data.dirName });
      await this.addInDirHistory({ id: data.dirId, name: data.dirName });
      await this.setItems(data.items);
    } catch (e) {
      console.log(e);
    }
  };

  getAvailableFiles = async () => {
    try {
      const { data } = await FileServices.getAvailableFiles();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  postCreateDir = async (dirName) => {
    let payload = {
      dirName,
      parentDirId: this.parentDir.id,
    };

    try {
      const { data } = FileServices.postCreateDir(payload);
    } catch (e) {
      console.log(e);
    }
  };
}

export default FilesStore;
