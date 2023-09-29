import axios from 'axios';

import type { AuthTokens } from '../../pages/Register/types';

import { saveTokensLocalStorage } from '../helpers/saveTokens';

import { routePath } from './routePath';
import { BASE_URL } from './url';

export const $api = axios.create({
  baseURL: BASE_URL,
});

$api.interceptors.request.use(
  config => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  error => Promise.reject(error)
);

$api.interceptors.response.use(
  response => response,
  async error => {
    if (error.response?.status === 401) {
      const refreshToken = localStorage.getItem('refreshToken');

      if (refreshToken) {
        try {
          const { data } = await $api.post<AuthTokens>(routePath.REFRESH_TOKEN, {
            refreshToken,
          });

          saveTokensLocalStorage(data);
          const originalRequest = error.config;

          originalRequest.headers.Authorization = `Bearer ${data.access.token}`;

          return await $api(originalRequest);
        } catch (error) {
          console.error('failed refresh access token', error);
          throw error;
        }
      }
    }

    throw error;
  }
);
