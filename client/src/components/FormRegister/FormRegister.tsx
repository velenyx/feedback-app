import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsFillEyeFill as LockIcon, BsFillEyeSlashFill as UnLockIcon } from 'react-icons/bs';
import { GoLock as PasswordIcon } from 'react-icons/go';
import { LuUser as LoginIcon } from 'react-icons/lu';
import { MdOutlineAlternateEmail as EmailIcon } from 'react-icons/md';
import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosError } from 'axios';

import type { RegisterType } from '../../pages/Register/types';

import AuthService from '../../services/AuthService';
import { capitalizeFullName } from '../../shared/helpers/capitalizeFullName';
import { errorMessageTranslate } from '../../shared/helpers/errorMessageTranslate';
import { AuthButton } from '../../shared/ui/Buttons/AuthButton/AuthButton';

import { defaultFormValues, resetError, schema } from './config/config';

import styles from './FormRegister.module.scss';

export const FormRegister = () => {
  const [error, setError] = useState(resetError);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [hidePassword, setHidePassword] = useState(false);

  const form = useForm<RegisterType>({
    defaultValues: {
      email: '',
      name: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });
  const { formState, handleSubmit, register } = form;
  const { errors } = formState;

  const resetFormState = () => {
    setLoading(true);
    setSuccess(false);
    setError(resetError);
  };
  const handleHidePassword = () => {
    setHidePassword(previous => !previous);
  };
  const onSubmit = (userData: RegisterType) => {
    resetFormState();
    const normalizeData = { ...userData, name: capitalizeFullName(userData.name) };

    AuthService.registration(normalizeData)
      .then(() => {
        setSuccess(true);
        form.reset(defaultFormValues);
      })
      /* eslint-disable unicorn/filename-case */
      /* eslint-disable @typescript-eslint/no-shadow */
      .catch(error => {
        if (error instanceof AxiosError && error.response) {
          const { code, message } = error.response.data;

          if (code === 400 || code === 401) {
            setError({ message, state: true });
          }
          if (error.response.status === 429) {
            setError({ message: error.response.data, state: true });
          }
        } else {
          setError({ message: 'Ошибка при регистрации', state: true });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form className={styles.formRegister} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.content}>
        {error.state && <div className={styles.errors}>{errorMessageTranslate(error.message)}</div>}
        {success && (
          <div className={styles.success}>На почту отправлено письмо для подтверждения.</div>
        )}

        <div className={styles.formItem}>
          <div className={styles.inputContainer}>
            <LoginIcon />
            <input id='name' type='text' placeholder='Имя и Фамилия' {...register('name')} />
          </div>

          {errors.name && <div className={styles.errors}>{errors.name.message}</div>}
        </div>

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

        <AuthButton name='Зарегистрироваться' type='submit' loading={loading} />
      </div>
    </form>
  );
};
