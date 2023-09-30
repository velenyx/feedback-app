import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsFillEyeFill as LockIcon, BsFillEyeSlashFill as UnLockIcon } from 'react-icons/bs';
import { GoLock as PasswordIcon } from 'react-icons/go';
import { MdOutlineAlternateEmail as EmailIcon } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosError } from 'axios';
import * as yup from 'yup';

import type { LoginType } from '../../app/store/slice/auth/authTypes';

import { setUser } from '../../app/store/slice/auth/authSlice';
import AuthService from '../../services/AuthService';
import { errorMessageAuthTranslate } from '../../shared/helpers/errorMessageTranslate';
import { AuthButton } from '../../shared/ui/Buttons/AuthButton/AuthButton';

import styles from './FormAuth.module.scss';

const schema = yup.object().shape({
  email: yup.string().required('Обязательное поле *').email('Некорректный email'),
  password: yup
    .string()
    .required('Обязательное поле *')
    .min(8, 'Пароль должен содержать не менее 8 символов'),
});

export const FormAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState({ message: '', state: false });
  const [loading, setLoading] = useState(false);
  const [hidePassword, setHidePassword] = useState(false);

  const form = useForm<LoginType>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });
  const { formState, handleSubmit, register } = form;
  const { errors } = formState;

  const resetFormState = () => {
    setLoading(true);
    setError({ message: '', state: false });
  };

  const onSubmit = (userData: LoginType) => {
    resetFormState();

    AuthService.login(userData)
      .then(data => {
        dispatch(setUser(data?.user));
        navigate('/', { replace: false });
      })
      .catch((error_: unknown) => {
        if (error_ instanceof AxiosError) {
          if (error_.response) {
            const { code, message } = error_.response.data;

            if (code === 401) {
              setError({ message, state: true });
            }
            if (error_.response.status === 429) {
              setError({
                message: 'Too many requests, please try again later.',
                state: true,
              });
            }
          } else {
            setError({
              message: 'canceled',
              state: true,
            });
          }
        } else {
          setError({ message: 'authorization error', state: true });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handleHidePassword = () => {
    setHidePassword(previous => !previous);
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
            <input placeholder='E-mail' type='email' {...register('email')} />
          </div>

          {errors.email && <div className={styles.errors}>{errors.email.message}</div>}
        </div>

        <div className={styles.formItem}>
          <div className={styles.inputContainer}>
            <PasswordIcon />
            <input
              placeholder='Пароль'
              type={hidePassword ? 'text' : 'password'}
              {...register('password')}
            />
            <button type='button' onClick={handleHidePassword} className={styles.hide}>
              {hidePassword ? <UnLockIcon /> : <LockIcon />}
            </button>
          </div>
          {errors.password && <div className={styles.errors}>{errors.password.message}</div>}
        </div>

        <AuthButton name='Войти' type='submit' loading={loading} />
      </div>
    </form>
  );
};
