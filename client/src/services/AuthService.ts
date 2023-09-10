import axios from "axios";
import { User } from "../app/store/slice/auth/authTypes";
import { LoginResponseType, LoginType } from "../pages/Auth/types";
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
  static async authUser(userData: LoginType) {
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
}
export default AuthService;
