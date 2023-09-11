import axios from "axios";
import { LoginResponseType, LoginType, User } from "../app/store/slice/auth/authTypes";
import { RegisterResponseType, RegisterType } from "../pages/Register/types";
import { routePath } from "../shared/config/routePath";
import { BASE_URL } from "./../shared/config/url";

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
    try {
      const response = await axios.post<LoginResponseType>(
        BASE_URL + routePath.AUTH,
        userData
      );
      const { data, status } = response;
      if (status === 200) {
        sessionStorage.setItem("accessToken", data.tokens.access.token);
        sessionStorage.setItem("refreshToken", data.tokens.refresh.token);
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  }
  static async registration(userData: RegisterType) {
    try {
      const response = await axios.post<RegisterResponseType>(
        BASE_URL + routePath.REGISTRATION,
        userData
      );
      const { status, data } = response;

      if (status === 201) {
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  }
  static async logout() {
    const refreshToken = sessionStorage.getItem("refreshToken")
    try {
      const response = await axios.post(BASE_URL + routePath.LOGOUT, {
        refreshToken: refreshToken,
      });

      if (response.status === 204) {
        console.log("Logout successful!");
      }
    } catch (error) {
      console.error(error);
    }
  }
}
export default AuthService;
