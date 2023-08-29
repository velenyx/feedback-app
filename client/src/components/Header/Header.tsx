import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { routePath } from "../../utils/constatnts/routePath";
import logo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerLogo}>
          <Link to={routePath.HOME}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <form className={styles.searchForm} method="GET" action="/">
          <div className={styles.searchFormBlock}>
            <input
              type="text"
              id=""
              className=""
              name="search_text"
              placeholder="Пример: Иванов Иван или 0630000000"
              value=""
            />
            <input type="image" className="" src="" alt="Поиск" />
          </div>
        </form>
      </div>
    </header>
  );
};
