import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AxiosError } from "axios";
import * as yup from "yup";
import { MdOutlineAlternateEmail as EmailIcon } from "react-icons/md";
import { GoLock as PasswordIcon } from "react-icons/go";
import { BsFillEyeFill as LockIcon } from "react-icons/bs";
import { BsFillEyeSlashFill as UnLockIcon } from "react-icons/bs";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthButton } from "../../shared/ui/Buttons/AuthButton/AuthButton";
import { errorMessageAuthTranslate } from "../../shared/helpers/errorMessageTranslate";
import { setUser } from "../../app/store/slice/auth/authSlice";
import { LoginType } from "../../app/store/slice/auth/authTypes";
import AuthService from "../../services/AuthService";
import styles from "./FormAuth.module.scss";

const schema = yup.object().shape({
  email: yup.string().required("Обязательное поле *").email("Некорректный email"),
  password: yup
    .string()
    .required("Обязательное поле *")
    .min(8, "Пароль должен содержать не менее 8 символов"),
});

export const FormAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState({ state: false, message: "" });
  const [loading, setLoading] = useState(false);
  const [hidePassword, setHidePassword] = useState(false);

  const form = useForm<LoginType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const resetFormState = () => {
    setLoading(true);
    setError({ state: false, message: "" });
  };

  const onSubmit = (userData: LoginType) => {
    resetFormState();

    AuthService.login(userData)
      .then((data) => {
        dispatch(setUser(data?.user));
        navigate("/", { replace: false });
      })
      .catch((error: unknown) => {
        if (error instanceof AxiosError) {
          if (!error.response) {
            setError({
              state: true,
              message: "canceled",
            });
          } else {
            const { code, message } = error.response.data;
            if (code === 401) {
              setError({ state: true, message: message });
            }
            if (error.response.status === 429) {
              setError({
                state: true,
                message: "Too many requests, please try again later.",
              });
            }
          }
        } else {
          setError({ state: true, message: "authorization error" });
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
          <div className={styles.errors}>{errorMessageAuthTranslate(error.message)}</div>
        )}
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

        <AuthButton name="Войти" type="submit" loading={loading} />
      </div>
    </form>
  );
};
