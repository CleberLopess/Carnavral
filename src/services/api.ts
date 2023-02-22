import axios, { AxiosRequestConfig } from "axios";

const token =
  "c6461556476d2ce23794b38fd200afa3798d6f5fe3acb26090b81b084f0009cc";

export const headers = {
  headers: {
    // "Content-Type": "application/json",
    s_token: `Bearer ${token}`,
  },
};

export const config: AxiosRequestConfig = {
  baseURL: "http://localhost:3000/events",
  //baseURL: "http://localhost:5229/",
  headers: headers.headers,
};

const requestAxios = axios.create(config);

requestAxios.interceptors.response.use(
  (request) => request,
  (error) => Promise.reject(error)
);

requestAxios.interceptors.response.use(
  (response) => response,
  (error) => console.error(error.response)
);

export default requestAxios;
