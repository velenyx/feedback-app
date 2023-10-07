type ErrorMsgType = {
  [key: string]: string;
};

const authErrorMsg: ErrorMsgType = {
  "Incorrect email or password": "Некорректный логин или пароль",
  "authorization error": "Ошибка авторизации. Попробуйте через 3 минуты",
  "Too many requests, please try again later.":
    "Много попыток. Попробуйте снова через 10 минут",
  canceled: "Ошибка авторизации. Попробуйте через 3 минуты",
  undefined: "Неизвестная ошибка!",
};

const registerErrorMsg: ErrorMsgType = {
  "Email already taken": "Данный E-mail уже используется",
  "password must be at least 8 characters": "Пароль должен содержать не менее 8 символов",
  "email must be a valid email'": "Введите корректный E-mail адрес",
  "Too many requests, please try again later.":
    "Много попыток. Попробуйте снова через 10 минут",
  canceled: "Ошибка регистрации. Попробуйте через 3 минуты",
  undefined: "Неизвестная ошибка!",
};

export const errorMessageTranslate = (message: string): string => {
  return registerErrorMsg[message] || "Неизвестная ошибка";
};

export const errorMessageAuthTranslate = (message: string): string => {
  return authErrorMsg[message] || "Неизвестная ошибка";
};
