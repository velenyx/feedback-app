import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import qs from "qs";
import { BsFillPatchCheckFill as CheckIcon } from "react-icons/bs";
import AuthService from "../../services/AuthService";
import { routePath } from "../../shared/config/routePath";
import verifyIcon from "../../shared/assets/verify-email.png";
import { LoadingLayout } from "../../layout/LoadingLayout/LoadingLayout";
import "react-toastify/dist/ReactToastify.css";
import styles from "./VerifyEmail.module.scss";

const VerifyEmail = () => {
  const navigate = useNavigate();

  const requestVerifyEmail = async () => {
    const { token } = qs.parse(window.location.search, { ignoreQueryPrefix: true });
    if (token) {
      AuthService.verifyEmail(String(token));
    } else {
      navigate("/", { replace: false });
    }
  };

  useEffect(() => {
    requestVerifyEmail();
  }, []);

  return (
    <LoadingLayout>
      <div className={styles.verifyEmail}>
        <div className={styles.container}>
          <div className={styles.image}>
            <img src={verifyIcon} alt="Верификация" />
          </div>
          <p className={styles.text}>
            E-mail подтверждён! <CheckIcon />
          </p>

          <Link to={routePath.PROFILE}>
            <div className={styles.link}>Перейти на главную</div>
          </Link>
        </div>
        <ToastContainer />
      </div>
    </LoadingLayout>
  );
};

export default VerifyEmail;
