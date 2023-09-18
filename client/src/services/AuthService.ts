import { AxiosError } from "axios";
import { LoginResponseType, LoginType, User } from "../app/store/slice/auth/authTypes";
import { AuthTokens, RegisterResponseType, RegisterType } from "../pages/Register/types";
import { $api } from "../shared/config/instance";
import { routePath } from "../shared/config/routePath";

const saveTokensLocalStoare = (data: AuthTokens): void => {
  localStorage.setItem("accessToken", data.access.token);
  localStorage.setItem("refreshToken", data.refresh.token);
};

class AuthService {
  static async checkAuth() {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    if (accessToken && refreshToken) {
      try {
        const { data } = await $api.get<User>(routePath.ME, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        return data;
      } catch (error: unknown) {
        if (error instanceof AxiosError && error.response?.status === 401) {
          // Токен доступа истек, попробуем обновить его
          return await this.refreshAccessToken(refreshToken);
        } else {
          console.log("Failed check Auth", error);
          return null;
        }
      }
    }
  }
  static async refreshAccessToken(
    refreshToken: string
  ): Promise<User | null | undefined> {
    try {
      const { data } = await $api.post<AuthTokens>(routePath.REFRESH_TOKEN, {
        refreshToken,
      });
      saveTokensLocalStoare(data);
      return await this.checkAuth(); // Вернуть результат checkAuth
    } catch (error) {
      console.error("failed refresh access token", error);
      throw error;
    }
  }
  static async login(userData: LoginType) {
    const response = await $api.post<LoginResponseType>(routePath.AUTH, userData);
    const { data } = response;
    saveTokensLocalStoare(data.tokens);
    return data;
  }
  static async registration(userData: RegisterType) {
    const response = await $api.post<RegisterResponseType>(
      routePath.REGISTRATION,
      userData
    );
    const { data } = response;
    return data;
  }
  static async logout() {
    const refreshToken = localStorage.getItem("refreshToken");
    await $api.post(routePath.LOGOUT, {
      refreshToken: refreshToken,
    });
  }
}
export default AuthService;
