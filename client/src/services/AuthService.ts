import axios from "axios";
import { LoginResponseType, LoginType, User } from "../app/store/slice/auth/authTypes";
import { routePath } from "../shared/config/routePath";
import { BASE_URL } from "./../shared/config/url";
import { RegisterResponseType, RegisterType } from "../pages/Register/types";

class AuthService {
  static async chechAuth() {
    const token = sessionStorage.getItem("accessToken");

    if (token) {
      try {
        const { data } = await axios.get<User>(BASE_URL + routePath.ME, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return data;
      } catch (error) {}
    }
  }
  static async login(userData: LoginType) {
    const response = await axios.post<LoginResponseType>(
      BASE_URL + routePath.AUTH,
      userData
    );
    const { data, status } = response;
    if (status === 200) {
      sessionStorage.setItem("accessToken", data.tokens.access.token);
      return data;
    }
  }
  static async registration(userData: RegisterType) {
    const response = await axios.post<RegisterResponseType>(
      BASE_URL + routePath.REGISTRATION,
      userData
    );
    const { status, data } = response;

    if (status === 201) {
      return data;
    }
  }
  static async logout() {
    return axios.post(BASE_URL + routePath.LOGOUT);
  }
}
export default AuthService;
