import { LoginResponseType, LoginType, User } from "../app/store/slice/auth/authTypes";
import { RegisterResponseType, RegisterType } from "../pages/Register/types";
import { $api } from "../shared/config/instance";
import { routePath } from "../shared/config/routePath";


class AuthService {
  static async checkAuth() {
    const token = sessionStorage.getItem("accessToken");

    if (token) {
      const { data } = await $api.get<User>(routePath.ME, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    }
  }
  static async login(userData: LoginType) {
    const response = await $api.post<LoginResponseType>(routePath.AUTH, userData);
    const { data } = response;
    sessionStorage.setItem("accessToken", data.tokens.access.token);
    sessionStorage.setItem("refreshToken", data.tokens.refresh.token);
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
    const refreshToken = sessionStorage.getItem("refreshToken");
    await $api.post(routePath.LOGOUT, {
      refreshToken: refreshToken,
    });
  }
}
export default AuthService;
