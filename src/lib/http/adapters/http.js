import axios from "axios";

export const instance = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  //timeout: 1000,
  baseURL: process.env.REACT_APP_API_ROOT || "http//localhost:8000"
});

instance.interceptors.response.use(
  res => {
    /* eslint-disable no-console */
    if (process.env.NODE_ENV !== "production") {
      console.log(
        "%c Request Success:",
        "color: #4CAF50; font-weight: bold",
        res
      );
    }
    return res;
  },
  err => {
    /* eslint-disable no-console */
    if (process.env.NODE_ENV !== "production") {
      console.log(
        "%c Request Error:",
        "color: #EC6060; font-weight: bold",
        err
      );
    }
    let newError = err;
    if (!err.response) {
      const message = "Network not available";
      newError = Object.assign(err, { response: { data: { message } } });
    }
    if (err.response.status === 408 || err.response.status === "ECONNABORTED") {
      const message = `A time happend on url ${err.config.url}`;
      newError = Object.assign(err, { response: { data: { message } } });
    }
    if (err.response.status === 500) {
      const message = "The execution of the service failed in some way.";
      newError = Object.assign(err, { response: { data: { message } } });
    }
    return Promise.reject(newError);
  }
);

export default instance;
