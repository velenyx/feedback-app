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

// Флаг, указывающий на то, происходит ли в данный момент обновление токена
let isRefreshing = false;
// Массив функций-подписчиков, которые будут вызваны после успешного обновления токена
let refreshSubscribers: ((token: string) => void)[] = [];

// Интерцептор для обработки ошибок при запросах к API
$api.interceptors.response.use(
  response => response,
  error => {
    // Получаем оригинальный запрос, который вызвал ошибку
    const originalRequest = error.config;

    // Если ошибка связана с тем, что токен истек или недействителен (код 401),
    // и этот запрос еще не был повторен (чтобы избежать бесконечной рекурсии)
    if (error.response?.status === 401 && !originalRequest.retry) {
      // Если уже происходит обновление токена, то добавляем текущий запрос в очередь
      if (isRefreshing) {
        return new Promise<AuthTokens>(resolve => {
          refreshSubscribers.push(token => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            resolve($api(originalRequest));
          });
        });
      }
      // Помечаем оригинальный запрос как повторный, чтобы избежать бесконечной рекурсии
      originalRequest.retry = true;
      // Устанавливаем флаг, что происходит обновление токена
      isRefreshing = true;
      // Получаем refreshToken из локального хранилища
      const refreshToken = localStorage.getItem('refreshToken');

      // Если refreshToken есть, то отправляем запрос на обновление токена
      if (refreshToken) {
        return $api
          .post<AuthTokens>(routePath.REFRESH_TOKEN, {
            refreshToken,
          })
          .then(({ data }) => {
            // Сохраняем новые токены в локальное хранилище
            saveTokensLocalStorage(data);

            // Обновляем заголовок Authorization для оригинального запроса
            originalRequest.headers.Authorization = `Bearer ${data.access.token}`;

            // Вызываем все функции-подписчики с новым токеном
            // eslint-disable-next-line
            for (const callback of refreshSubscribers) {
              callback(data.access.token);
            }

            // Очищаем массив функций-подписчиков
            refreshSubscribers = [];

            // Отправляем повторный запрос с новым токеном
            return $api(originalRequest);
          })
          .catch(error_ => {
            console.error('failed refresh access token', error_);

            throw error_;
          })
          .finally(() => {
            // Снимаем флаг обновления токена
            isRefreshing = false;
          });
      }
    }

    // Если ошибка не связана с токеном, то просто возвращаем ее
    return Promise.reject(error);
  }
);
