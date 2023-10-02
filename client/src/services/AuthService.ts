import { toast } from 'react-toastify';

import type { LoginResponseType, LoginType, User } from '../app/store/slice/auth/authTypes';
import type { RegisterResponseType, RegisterType } from '../pages/Register/types';

import { $api } from '../shared/config/api';
import { routePath } from '../shared/config/routePath';
import { removeTokensLocalStorage } from '../shared/helpers/removeTokens';
import { saveTokensLocalStorage } from '../shared/helpers/saveTokens';

const notifyError = (text: string) =>
  toast.error(text, {
    autoClose: 5000,
    closeOnClick: true,
    draggable: true,
    hideProgressBar: false,
    pauseOnHover: true,
    position: 'top-right',
    progress: undefined,
    theme: 'light',
  });
const notifySuccess = (text: string) =>
  toast.success(text, {
    autoClose: 5000,
    closeOnClick: true,
    draggable: true,
    hideProgressBar: false,
    pauseOnHover: true,
    position: 'top-right',
    progress: undefined,
    theme: 'light',
  });

const AuthService = {
  async checkAuth() {
    try {
      const { data } = await $api.get<User>(routePath.ME);

      return data;
    } catch (error) {
      removeTokensLocalStorage();
      notifyError('Токен клиента недействителен');
      throw error;
    }
  },
  async login(userData: LoginType) {
    const response = await $api.post<LoginResponseType>(routePath.AUTH, userData);
    const { data } = response;

    saveTokensLocalStorage(data.tokens);

    return data;
  },
  async logout() {
    const refreshToken = localStorage.getItem('refreshToken');

    await $api.post(routePath.LOGOUT, {
      refreshToken,
    });
  },
  async registration(userData: RegisterType) {
    const response = await $api.post<RegisterResponseType>(routePath.REGISTRATION, userData);

    notifySuccess('Вы успешно зарегистрированы!');
    const { data } = response;

    return data;
  },
  async verifyEmail(token: string) {
    try {
      await $api.post(`${routePath.VERIFY_EMAIL}?token=${token}`);
    } catch (error) {
      console.log('Failed verify Email', error);
      notifyError('Ошибка верификации');
      throw error;
    }
  },
};

export default AuthService;
