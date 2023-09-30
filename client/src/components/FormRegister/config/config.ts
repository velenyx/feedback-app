import * as yup from 'yup';

export const mandatoryField = 'Обязательное поле *';
const regexPass = /^(?=.*\d)(?=.*[A-Za-z])(?=.*[\W_]).+$/;

export const schema = yup.object().shape({
  email: yup.string().required(mandatoryField).email('Некорректный email'),
  name: yup.string().required(mandatoryField).min(5, 'ФИО должно содержать не менее 5 символов'),
  password: yup
    .string()
    .required(mandatoryField)
    .min(8, 'Пароль должен содержать не менее 8 символов')
    .matches(
      regexPass,
      'Пароль должен состоять минимум из 8 символов и содержать буквы, цифры и символы.'
    ),
});
export const defaultFormValues = {
  email: '',
  name: '',
  password: '',
};

export const resetError = { message: '', state: false };
