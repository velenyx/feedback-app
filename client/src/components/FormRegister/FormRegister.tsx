import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsFillEyeFill as LockIcon, BsFillEyeSlashFill as UnLockIcon } from 'react-icons/bs';
import { GoLock as PasswordIcon } from 'react-icons/go';
import { LuUser as LoginIcon } from 'react-icons/lu';
import { MdOutlineAlternateEmail as EmailIcon } from 'react-icons/md';
import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosError } from 'axios';
import * as yup from 'yup';

import type { RegisterType } from '../../pages/Register/types';

import AuthService from '../../services/AuthService';
import { capitalizeFullName } from '../../shared/helpers/capitalizeFullName';
import { errorMessageTranslate } from '../../shared/helpers/errorMessageTranslate';
import { AuthButton } from '../../shared/ui/Buttons/AuthButton/AuthButton';

import styles from './FormRegister.module.scss';

const schema = yup.object().shape({
  email: yup.string().required('Обязательное поле *').email('Некорректный email'),
  name: yup
    .string()
    .required('Обязательное поле *')
    .min(5, 'ФИО должно содержать не менее 5 символов'),
  password: yup
    .string()
    .required('Обязательное поле *')
    .min(8, 'Пароль должен содержать не менее 8 символов')
    .matches(
      /^(?=.*\d)(?=.*[A-Za-z])(?=.*[\W_]).+$/,
      'Пароль должен состоять минимум из 8 символов и содержать буквы, цифры и символы.'
    ),
});
const defaultFormValues = {
  email: '',
  name: '',
  password: '',
};

export const FormRegister = () => {
  const [error, setError] = useState({ message: '', state: false });
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
    setError({ message: '', state: false });
  };
  const onSubmit = (userData: RegisterType) => {
    resetFormState();
    const normalizeData = { ...userData, name: capitalizeFullName(userData.name) };

    AuthService.registration(normalizeData)
      .then(() => {
        setSuccess(true);
        form.reset(defaultFormValues);
      })
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
  const handleHidePassword = () => {
    setHidePassword(previous => !previous);
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
