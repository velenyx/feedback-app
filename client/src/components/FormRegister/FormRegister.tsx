import styles from "./FormRegister.module.scss";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AuthButton } from "../../shared/ui/Buttons/AuthButton";
import { routePath } from "../../shared/config/routePath";
import {
  IFormRegistration,
  IRegisterRequest,
  IRegisterResponse,
} from "../../pages/Register/types";
import { instanceResponse } from "../../pages/Register/api";
import { LuUser as LoginIcon } from "react-icons/lu";
import { MdOutlineAlternateEmail as EmailIcon } from "react-icons/md";
import { GoLock as PasswordIcon } from "react-icons/go";
import { BsFillEyeFill as LockIcon } from "react-icons/bs";
import { BsFillEyeSlashFill as UnLockIcon } from "react-icons/bs";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Обязательное поле *")
    .min(5, "ФИО должно содержать не менее 5 символов"),
  email: yup.string().required("Обязательное поле *").email("Некорректный email"),
  password: yup
    .string()
    .required("Обязательное поле *")
    .min(6, "Пароль должен содержать не менее 6 символов")
    .matches(
      /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).+$/,
      "Пароль должен состоять минимум из 6 символов и содержать буквы, цифры и символы."
    ),
});

export const FormRegister = () => {
  const [hidePassword, setHidePassword] = useState(false);
  const [registerError, setRegisterError] = useState(false);

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
    try {
      const response = await instanceResponse.post(routePath.REGISTRATION, userData);
      const status = await response.status;
      if (status === 201) response.data as IRegisterResponse;
    } catch (error: any) {
      const { code } = await error.response.data;
      if (code === 400) setRegisterError(true);
    }
  };
  const onSubmit = (data: IFormRegistration) => {
    setRegisterError(false);
    registerUser(data);
  };
  const handleHidePassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setHidePassword((prev) => !prev);
  };

  return (
    <form className={styles.formRegister} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.content}>
        {registerError && (
          <div className={styles.errors}>Этот E-mail уже зарегистрирован</div>
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

        <AuthButton name="Зарегистрироваться" type="submit" />
      </div>
    </form>
  );
};
