import axios, { AxiosInstance } from "axios";

const API_URL = "https://feedback-app-backend-wzfj.onrender.com/v1";

export const $api: AxiosInstance = axios.create({
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`;
  return config;
});
