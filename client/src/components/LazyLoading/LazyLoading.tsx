import logo from "../../../favicon.png";
import styles from "./LazyLoading.module.scss";

export const LazyLoading = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.loadingText}>
        <span>З</span>
        <span>А</span>
        <span>Г</span>
        <span>Р</span>
        <span>У</span>
        <span>З</span>
        <span>К</span>
        <span>А</span>
        <div className={styles.loadingImage}>
          <img src={logo} alt="Логотип" />
        </div>
      </div>
    </div>
  );
};
