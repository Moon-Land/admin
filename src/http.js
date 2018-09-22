import axios from "axios";
import config from "./config";

const http = axios.create({
  baseURL: config.host,
  withCredentials: false
});

http.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    console.log(err);
  }
);

http.interceptors.response.use(
  resp => {
    if (resp.headers.hasOwnProperty("x-total-count")) {
      resp.data.total = Number.parseInt(resp.headers["x-total-count"]);
    }
    return resp;
  },
  err => {
    console.log(err);
  }
);

export default http;
