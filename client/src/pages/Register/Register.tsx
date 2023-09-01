import styles from "./Register.module.scss";
import { MainLayout } from "../../layout/MainLayout";
import { routePath } from "../../shared/config/routePath";
import { Link } from "react-router-dom";
import { FormRegister } from "../../components/FormRegister/FormRegister";

export const Register = () => {
  return (
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
      </div>
    </MainLayout>
  );
};
