import { Link } from "react-router-dom";
import { MainLayout } from "../../layout/MainLayout";
import { FormAuth } from "../../components/FormAuth/FormAuth";
import { routePath } from "../../shared/config/routePath";
import styles from "./Auth.module.scss";

export const Auth = () => {
  return (
    <MainLayout>
      <div className={styles.auth}>
        <div className={styles.container}>
          <div className={styles.tabBar}>
            <Link className={styles.login} to={routePath.AUTH}>
              Вход
            </Link>
            <Link className={styles.register} to={routePath.REGISTRATION}>
              Регистрация
            </Link>
          </div>

          <FormAuth />
        </div>
      </div>
    </MainLayout>
  );
};
