import axios from "axios";
import { AuthTokens } from "../../pages/Register/types";
import { BASE_URL } from "./url";
import { routePath } from "./routePath";
import { saveTokensLocalStoare } from "./saveTokens";

export const $api = axios.create({
  baseURL: BASE_URL,
});

$api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

$api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response?.status === 401) {
      const refreshToken = localStorage.getItem("refreshToken");
      if (refreshToken) {
        try {
          const { data } = await $api.post<AuthTokens>(routePath.REFRESH_TOKEN, {
            refreshToken,
          });
          saveTokensLocalStoare(data);
          const originalRequest = error.config;
          originalRequest.headers.Authorization = `Bearer ${data.access.token}`;
          return $api(originalRequest);
        } catch (error) {
          console.error("failed refresh access token", error);
          throw error;
        }
      }
    }
    return Promise.reject(error);
  }
);
