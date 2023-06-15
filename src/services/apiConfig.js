export const url = "http://localhost:8080";

const baseURL = `${url}/api/v1`;

const baseConfig = {
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
};

export { baseConfig, baseURL };
