import axios, { AxiosInstance } from "axios";

const API_URL = "https://feedback-app-backend-wzfj.onrender.com/v1"
export const $api: AxiosInstance = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  timeout: 1000,
});
