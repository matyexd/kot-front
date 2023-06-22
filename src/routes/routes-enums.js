export const AUTH_URLS = ["/sign_in/", "/sign_up/"];

export const AppPath = Object.freeze({
  authUrl: AUTH_URLS,
  main: "/",
  signIn: "/sign_in/",
  signUp: "/sign_up/",
  files: "/files/",
  accessFiles: "/access_files/",
  logs: "/logs/",
});

export const AuthUrl = Object.freeze({
  postLogin: "/auth/login",
  logout: "/auth/logOut",
  register: "/auth/signUp",
});

export const FilesUrl = Object.freeze({
  getUsersDir: "/directories/getUsersDir",
  postCreateDir: "/directories/create",
  getFilesByParentDir: (id) => `directories/${id}/getContent`,
  getFiles: "/files",
  getFile: "/file",
  getAvailableFiles: "/files/available",
  postSetAccessFile: "/files/setAccess",
  deleteAccessFile: "/files/removeAccess",
  getDownloadFile: "/files/download",
});

export const LogsUrl = Object.freeze({
  getLogs: "/logs",
});

export const UsersUrl = Object.freeze({
  getUsers: "/users",
});
