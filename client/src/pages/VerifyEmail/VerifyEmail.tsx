import { useEffect } from 'react';
import { BiUser as ProfileIcon } from 'react-icons/bi';
import { BsFillPatchCheckFill as CheckIcon } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import qs from 'qs';

import { MainLayout } from '../../layout/MainLayout';
import AuthService from '../../services/AuthService';
import { routePath } from '../../shared/config/routePath';

import 'react-toastify/dist/ReactToastify.css';
import styles from './VerifyEmail.module.scss';

import verifyIcon from '../../shared/assets/verify-email.png';

export const VerifyEmail = () => {
  const navigate = useNavigate();

  const requestVerifyEmail = async () => {
    const { token } = qs.parse(window.location.search, { ignoreQueryPrefix: true });

    if (token) {
      AuthService.verifyEmail(String(token));
    } else {
      navigate('/', { replace: false });
    }
  };

  useEffect(() => {
    requestVerifyEmail();
  }, []);

  return (
    <MainLayout>
      <div className={styles.verifyEmail}>
        <div className={styles.container}>
          <div className={styles.image}>
            <img src={verifyIcon} alt='Верификация' />
          </div>
          <p className={styles.text}>
            Почта успешно подтверждена <CheckIcon />
          </p>

          <Link to={routePath.PROFILE}>
            <div className={styles.link}>
              <ProfileIcon />
              Личный кабинет
            </div>
          </Link>
        </div>
        <ToastContainer />
      </div>
    </MainLayout>
  );
};
