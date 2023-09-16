export const errorMessageTranslate = (message: string | undefined) => {
  if (message === null) return "";
  if (message === "Email already taken") {
    return "Этот E-mail уже используется.";
  }
  if (message === "password must be at least 8 characters") {
    return "Пароль должен содержать не менее 8 символов";
  }
  if (message === '"email" must be a valid email') {
    return "Введите корректный E-mail адрес";
  }
  if (message === "canceled") {
    return "Возникли проблемы при регистрации. Пожалуйста, попробуйте снова через 3 минуты";
  }
};
2;
export const errorMessageAuthTranslate = (message: string | null) => {
  if (message === "undefined") return "";
  if (message === "Incorrect email or password") {
    return "Некорректный логин или пароль";
  }
  if (message === "authorization error") {
    return "Ошибка авторизации. Попробуйте через 2 минуты";
  }
  if (message === "canceled") {
    return "Ошибка авторизации. Попробуйте через 2 минуты";
  }
};
2;
