import styles from "./FormRegister.module.scss";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AuthButton } from "../../shared/ui/Buttons/AuthButton";
import { routePath } from "../../shared/config/routePath";
import {
  IFormReg,
  IRegisterRequest,
  IRegisterResponse,
} from "../../pages/Register/types";
import { instanceResponse } from "../../pages/Register/api";
import { LuUser as LoginIcon } from "react-icons/lu";
import { MdOutlineAlternateEmail as EmailIcon } from "react-icons/md";
import { GoLock as PasswordIcon } from "react-icons/go";
import { BsFillEyeFill as LockIcon } from "react-icons/bs";
import { BsFillEyeSlashFill as UnLockIcon } from "react-icons/bs";

export const FormRegister = () => {
  const [hidePassword, setHidePassword] = useState(false);
  const [registerError, setRegisterError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormReg>();

  const validateName = (value: string): string | undefined => {
    if (!value) {
      return "Обязательное поле *";
    }
    if (value.length < 5) {
      return "ФИО должно содержать не менее 5 символов";
    }
    return undefined;
  };
  const validateEmail = (value: string): string | undefined => {
    if (!value) {
      return "Обязательное поле *";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return "Некорректный email адрес";
    }
    return undefined;
  };
  const validatePassword = (value: string): string | undefined => {
    if (!value) {
      return "Обязательное поле *";
    }
    if (value.length < 6) {
      return "Пароль должен содержать минимум 6 символов";
    }
    if (!/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).+$/.test(value)) {
      return "Пароль должен состоять минимум из 6 символов и содержать буквы и цифры.";
    }
    return undefined;
  };
  const registerUser = async (userData: IRegisterRequest) => {
    try {
      const response = await instanceResponse.post(routePath.AUTH, userData);
      const status = await response.status;
      if (status === 201) response.data as IRegisterResponse;
    } catch (error: any) {
      const { code } = await error.response.data;
      if (code === 400) setRegisterError(true);
    }
  };
  const submit: SubmitHandler<IFormReg> = (data): void => {
    setRegisterError(false);
    registerUser(data);
  };
  const handleHide = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.stopPropagation();
    event.preventDefault();
    setHidePassword((prev) => !prev);
  };

  return (
    <form className={styles.formRegister} onSubmit={handleSubmit(submit)}>
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
              {...register("name", { validate: validateName })}
            />
          </div>

          {errors.name && <div className={styles.errors}>{errors.name.message}</div>}
        </div>

        <div className={styles.formItem}>
          <div className={styles.inputContainer}>
            <EmailIcon />
            <input
              placeholder="E-mail"
              type="email"
              {...register("email", { validate: validateEmail })}
            />
          </div>

          {errors.email && <div className={styles.errors}>{errors.email.message}</div>}
        </div>

        <div className={styles.formItem}>
          <div className={styles.inputContainer}>
            <PasswordIcon />
            <input
              placeholder="Пароль"
              type={hidePassword ? "text" : "password"}
              {...register("password", { validate: validatePassword })}
            />
            <button type="button" onClick={handleHide} className={styles.hide}>
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
