import styles from "./FormRegister.module.scss";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { AxiosError } from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthButton } from "../../shared/ui/Buttons/AuthButton";
import { routePath } from "../../shared/config/routePath";
import { capitalizeFullName } from "../../shared/helpers/capitalizeFullName";
import { errorMessageTranslate } from "../../shared/helpers/errorMessageTranslate";
import {
  IFormRegistration,
  IRegisterRequest,
  IRegisterResponse,
} from "../../pages/Register/types";
import { $api } from "../../pages/Register/api";
import { LuUser as LoginIcon } from "react-icons/lu";
import { MdOutlineAlternateEmail as EmailIcon } from "react-icons/md";
import { GoLock as PasswordIcon } from "react-icons/go";
import { BsFillEyeFill as LockIcon } from "react-icons/bs";
import { BsFillEyeSlashFill as UnLockIcon } from "react-icons/bs";

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

export const FormRegister = () => {
  const [registerError, setRegisterError] = useState({ state: false, message: "" });
  const [hidePassword, setHidePassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<IFormRegistration>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const registerUser = async (userData: IRegisterRequest) => {
    setLoading(true); //Display loading animation on the button
    setSuccess(false); // Displays a notification item about successful registration
    try {
      const response = await $api.post(routePath.REGISTRATION, userData);
      const status = await response.status;
      if (status === 201) {
        setLoading(false);
        setSuccess(true);
        formRef.current?.reset();
        return response.data;
      }
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const { code, message } = error.response?.data;
        if (code === 400) setRegisterError({ state: true, message: message });
        if (code === 401) setRegisterError({ state: true, message: message });

        setLoading(false);
        setSuccess(false);
      } else {
        setRegisterError({ state: true, message: "Ошибка при регистрации" });
        setSuccess(false);
        setLoading(false);
      }
    }
  };

  const onSubmit = (data: IFormRegistration) => {
    const normalizeDate = {
      ...data,
      name: capitalizeFullName(data.name),
    };

    setRegisterError({ state: false, message: "" });
    registerUser(normalizeDate);
  };
  const handleHidePassword = () => {
    setHidePassword((prev) => !prev);
  };

  return (
    <form ref={formRef} className={styles.formRegister} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.content}>
        {registerError.state && (
          <div className={styles.errors}>
            {errorMessageTranslate(registerError.message)}
          </div>
        )}
        {success && (
          <div className={styles.success}>
            ✓ Регистрация прошла успешно. На почту отправлено письмо для подтверждения.
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
