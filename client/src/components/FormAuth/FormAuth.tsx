import styles from "./FormAuth.module.scss";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { AxiosError } from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthButton } from "../../shared/ui/Buttons/AuthButton";
import { routePath } from "../../shared/config/routePath";
import { errorMessageAuthTranslate } from "../../shared/helpers/errorMessageTranslate";
import { $api } from "../../pages/Register/api";
import { MdOutlineAlternateEmail as EmailIcon } from "react-icons/md";
import { GoLock as PasswordIcon } from "react-icons/go";
import { BsFillEyeFill as LockIcon } from "react-icons/bs";
import { BsFillEyeSlashFill as UnLockIcon } from "react-icons/bs";
import { LoginResponseType, LoginType } from "../../pages/Auth/types";
import { setUser } from "../../app/store/slice/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

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
  const [registerError, setRegisterError] = useState({ state: false, message: "" });
  const [hidePassword, setHidePassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<LoginType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const authUser = async (userData: LoginType) => {
    setLoading(true);
    try {
      const response = await $api.post<LoginResponseType>(routePath.AUTH, userData);
      const { data, status } = response;

      if (status === 200) {
        localStorage.setItem("accessToken", data.tokens.access.token);
        dispatch(setUser(data.user));
        navigate("/", { replace: false });
        return data;
      }
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        if (!error.response) {
          setRegisterError({
            state: true,
            message: "canceled",
          });
        } else {
          const { code, message } = error.response.data;
          console.log("message", message);
          if (code === 401) {
            setRegisterError({ state: true, message: message });
          }
        }
      } else {
        setRegisterError({ state: true, message: "authorization error" });
      }
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = (data: LoginType) => {
    setRegisterError({ state: false, message: "" });
    authUser(data);
  };
  const handleHidePassword = () => {
    setHidePassword((prev) => !prev);
  };

  return (
    <form className={styles.formRegister} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.content}>
        {registerError.state && (
          <div className={styles.errors}>
            {errorMessageAuthTranslate(registerError.message)}
          </div>
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
