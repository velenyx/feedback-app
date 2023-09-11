import styles from "./Header.module.scss";
import { useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../../app/store/slice/auth/authSlice";
import { routePath } from "../../shared/config/routePath";
import { useAuth } from "../../shared/hooks/useAuth";
import AuthService from "../../services/AuthService";
import logo from "../../shared/assets/logo.png";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { NavItem } from "../NavItem/NavItem";
import { RxEnter as OutIcon } from "react-icons/rx";
import { IoCreateOutline as CreateIcon } from "react-icons/io5";
import { BiUser as ProfileIcon } from "react-icons/bi";

export const Header = () => {
  const dispatch = useDispatch();
  const { isAuth, name } = useAuth();

  const signOut = useCallback(() => {
    AuthService.logout();
    dispatch(removeUser());
    sessionStorage.removeItem("accessToken");
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerLogo}>
          <Link to={routePath.HOME}>
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <nav className={styles.menu}>
          {isAuth && (
            <ul>
              <NavItem
                className={styles.navMyFeedback}
                title="Мои отзывы"
                path={routePath.PROFILE}
                Icon={CreateIcon}
              />
              <NavItem
                className={styles.navProfile}
                title={name || ""}
                path={routePath.PROFILE}
                Icon={ProfileIcon}
              />
            </ul>
          )}

          {isAuth ? (
            <div className={styles.navAuth}>
              <div className={styles.navWrapper}>
                <div className={styles.login}>
                  <OutIcon />
                  <button onClick={signOut}>Выйти</button>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.authContainer}>
              <NavItem
                className={styles.navAuth}
                title="Войти"
                path={routePath.AUTH}
                Icon={OutIcon}
              />
              или
              <NavItem
                className={styles.navAuth}
                title="зарегистрироваться"
                path={routePath.REGISTRATION}
              />
            </div>
          )}
        </nav>
        <BurgerMenu signOut={signOut} />
      </div>
    </header>
  );
};
