import axios, { AxiosInstance } from "axios";

export const instanceResponse: AxiosInstance = axios.create({
  baseURL: "https://feedback-app-backend-wzfj.onrender.com/v1",
  timeout: 1000,
});
