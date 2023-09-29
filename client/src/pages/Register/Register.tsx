import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { FormRegister } from '../../components/FormRegister/FormRegister';
import { MainLayout } from '../../layout/MainLayout';
import { routePath } from '../../shared/config/routePath';

import 'react-toastify/dist/ReactToastify.css';
import styles from './Register.module.scss';

export const Register = () => (
  <MainLayout>
    <div className={styles.register}>
      <div className={styles.container}>
        <div className={styles.tabBar}>
          <Link className={styles.login} to={routePath.AUTH}>
            Вход
          </Link>
          <Link className={styles.register} to={routePath.REGISTRATION}>
            Регистрация
          </Link>
        </div>

        <FormRegister />
      </div>
      <ToastContainer />
    </div>
  </MainLayout>
);
