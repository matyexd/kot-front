import { action, makeObservable, observable } from "mobx";
import LogsService from "../../../services/LogsService/LogsService";

class LogsStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {});
  }

  // getAvailableFiles = async () => {
  //   try {
  //     const { data } = await FileServices.getAvailableFiles();
  //     console.log(data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  getLogs = async () => {
    try {
      const { data } = await LogsService.getLogs();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
}

export default LogsStore;
