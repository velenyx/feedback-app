import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { AxiosError } from "axios";
import { LuUser as LoginIcon } from "react-icons/lu";
import { MdOutlineAlternateEmail as EmailIcon } from "react-icons/md";
import { GoLock as PasswordIcon } from "react-icons/go";
import { BsFillEyeFill as LockIcon } from "react-icons/bs";
import { BsFillEyeSlashFill as UnLockIcon } from "react-icons/bs";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthButton } from "../../shared/ui/Buttons/AuthButton/AuthButton";
import { capitalizeFullName } from "../../shared/helpers/capitalizeFullName";
import { errorMessageTranslate } from "../../shared/helpers/errorMessageTranslate";
import { RegisterType } from "../../pages/Register/types";
import AuthService from "../../services/AuthService";
import styles from "./FormRegister.module.scss";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Обязательное поле *")
    .min(5, "ФИО должно содержать не менее 5 символов"),
  email: yup.string().required("Обязательное поле *").email("Некорректный email"),
  password: yup
    .string()
    .required("Обязательное поле *")
    .min(8, "Пароль должен содержать не менее 8 символов")
    .matches(
      /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).+$/,
      "Пароль должен состоять минимум из 8 символов и содержать буквы, цифры и символы."
    ),
});
const defaultFormValues = {
  name: "",
  email: "",
  password: "",
};

export const FormRegister = () => {
  const [error, setError] = useState({ state: false, message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [hidePassword, setHidePassword] = useState(false);

  const form = useForm<RegisterType>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const resetFormState = () => {
    setLoading(true);
    setSuccess(false);
    setError({ state: false, message: "" });
  };
  const onSubmit = (userData: RegisterType) => {
    resetFormState();
    const normalizeData = { ...userData, name: capitalizeFullName(userData.name) };

    AuthService.registration(normalizeData)
      .then(() => {
        setSuccess(true);
        form.reset(defaultFormValues);
      })
      .catch((error) => {
        if (error instanceof AxiosError && error.response) {
          const { code, message } = error.response.data;
          if (code === 400 || code === 401) {
            setError({ state: true, message });
          }
          if (error.response.status === 429) {
            setError({ state: true, message: error.response.data });
          }
        } else {
          setError({ state: true, message: "Ошибка при регистрации" });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handleHidePassword = () => {
    setHidePassword((prev) => !prev);
  };

  return (
    <form className={styles.formRegister} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.content}>
        {error.state && (
          <div className={styles.errors}>{errorMessageTranslate(error.message)}</div>
        )}
        {success && (
          <div className={styles.success}>
            На почту отправлено письмо для подтверждения.
          </div>
        )}

        <div className={styles.formItem}>
          <div className={styles.inputContainer}>
            <LoginIcon />
            <input
              id="name"
              type="text"
              placeholder="Имя и Фамилия"
              {...register("name")}
            />
          </div>

          {errors.name && <div className={styles.errors}>{errors.name.message}</div>}
        </div>

        <div className={styles.formItem}>
          <div className={styles.inputContainer}>
            <EmailIcon />
            <input placeholder="E-mail" type="email" {...register("email")} />
          </div>

          {errors.email && <div className={styles.errors}>{errors.email.message}</div>}
        </div>

        <div className={styles.formItem}>
          <div className={styles.inputContainer}>
            <PasswordIcon />
            <input
              placeholder="Пароль"
              type={hidePassword ? "text" : "password"}
              {...register("password")}
            />
            <button type="button" onClick={handleHidePassword} className={styles.hide}>
              {!hidePassword ? <LockIcon /> : <UnLockIcon />}
            </button>
          </div>
          {errors.password && (
            <div className={styles.errors}>{errors.password.message}</div>
          )}
        </div>

        <AuthButton name="Зарегистрироваться" type="submit" loading={loading} />
      </div>
    </form>
  );
};
