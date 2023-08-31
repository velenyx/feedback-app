import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { routePath } from "../../shared/config/routePath";
import logo from "../../shared/assets/logo.svg";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.body}>
          <div className={styles.logoContainer}>
            <div className={styles.logo}>
              <img src={logo} alt="logo" />
            </div>
            <div className={styles.text}>
              Сайт отзывов, где специалисты со всего мира и с разных отраслей обмениваются
              полезным опытом, а так же оставляют отзывы о заказчиках.
            </div>
          </div>
          <ul className={styles.linksContainer}>
            <li className={styles.linkItem}>
              <Link to={routePath.AGREMEENT}>Пользоательское соглашение</Link>
            </li>
            <li className={styles.linkItem}>
              <Link to={routePath.COMMUNNITY_RULES}>Правила сообщества</Link>
            </li>
            <li className={styles.linkItem}>
              <Link to={routePath.ABOUT}>О компании</Link>
            </li>
          </ul>
        </div>
        <div className={styles.credits}><span>
        Отзовик © 2023</span></div>
      </div>
    </footer>
  );
};
