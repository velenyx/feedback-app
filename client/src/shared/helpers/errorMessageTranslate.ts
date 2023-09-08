export const errorMessageTranslate = (message: string | null) => {
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
    return "Возникли проблемы при прегистрации. Пожалуйста, попробуйте снова через 3 минуты";
  }
};
