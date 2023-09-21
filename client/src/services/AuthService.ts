import { LoginResponseType, LoginType, User } from "../app/store/slice/auth/authTypes";
import { RegisterResponseType, RegisterType } from "../pages/Register/types";
import { $api } from "../shared/config/api";
import { routePath } from "../shared/config/routePath";
import { saveTokensLocalStoare } from "../shared/helpers/saveTokens";

class AuthService {
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
  static async checkAuth() {
    try {
      const { data } = await $api.get<User>(routePath.ME);
      return data;
    } catch (error) {
      console.log("Failed check Auth", error);
      return null;
    }
  }
}
export default AuthService;
