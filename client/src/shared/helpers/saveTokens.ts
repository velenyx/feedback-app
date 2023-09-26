import { AuthTokens } from "../../pages/Register/types";

export const saveTokensLocalStorage = (data: AuthTokens): void => {
  localStorage.setItem("accessToken", data.access.token);
  localStorage.setItem("refreshToken", data.refresh.token);
};
