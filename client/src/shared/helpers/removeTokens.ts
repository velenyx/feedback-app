export const removeTokensLocalStorage = (): void => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};

