import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import qs from "qs";
import { BsFillPatchCheckFill as CheckIcon } from "react-icons/bs";
import { BiUser as ProfileIcon } from "react-icons/bi";
import AuthService from "../../services/AuthService";
import { MainLayout } from "../../layout/MainLayout";
import { routePath } from "../../shared/config/routePath";
import verifyIcon from "../../shared/assets/verify-email.png";
import styles from "./VerifyEmail.module.scss";

export const VerifyEmail = () => {
    const navigate = useNavigate()

  const requestVerifyEmail = async () => {
    const { token } = qs.parse(window.location.search, { ignoreQueryPrefix: true });
    if (token) {
      AuthService.verifyEmail(String(token));
    } else {
        navigate("/", {replace: false})
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
            <img src={verifyIcon} alt="Верификация" />
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
      </div>
    </MainLayout>
  );
};
