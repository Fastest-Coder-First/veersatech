import axios from "axios";

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const baseURL =
  process.env.REACT_APP_BASE_URL || "http://localhost:4000";

export * from "./users";
