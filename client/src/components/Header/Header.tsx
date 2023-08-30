import styles from "./Header.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { routePath } from "../../shared/config/routePath";
import { useAuth } from "../../shared/hooks/useAuth";
import logo from "../../shared/assets/logo.svg";

import { RxEnter as OutIcon } from "react-icons/rx";
import { IoCreateOutline as CreateIcon } from "react-icons/io5";
import { BiUser as Profile } from "react-icons/bi";


export const Header = () => {
  const { isAuth, name } = useAuth();
  const [burgerToggle, setBurgerToggle] = useState(false);

  const signOut = () => {};

  const handleBurgerMenu = () => {
    setBurgerToggle((prev) => !prev);
  };

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
            <>
              <div className={styles.navMyFeedback}>
                <span className={styles.navWrapper}>
                  <CreateIcon />
                  <Link to={routePath.PROFILE}>Мои отзывы</Link>
                </span>
              </div>

              <div className={styles.navProfile}>
                <span className={styles.navWrapper}>
                  <Profile />
                  <Link to={routePath.PROFILE}>{name}</Link>
                </span>
              </div>
            </>
          )}

          {isAuth ? (
            <div className={styles.navAuth}>
              <span className={styles.navWrapper}>
                <OutIcon />
                <button onClick={signOut}>Выйти</button>
              </span>
            </div>
          ) : (
            <div className={styles.navAuth}>
              <span className={styles.navWrapper}>
                <OutIcon />
                <Link to={routePath.AUTH}>Войти</Link>
              </span>
            </div>
          )}
        </nav>

        <div
          className={`${styles.headerBurger} ${burgerToggle && styles.active}`}
          onClick={handleBurgerMenu}
        >
          <span></span>
        </div>

        <nav className={`${styles.headerMenu} ${burgerToggle && styles.active}`}>
          <div className={styles.headerMenuWrapper}>
            {isAuth ? (
              <div className={styles.burgerNavAuth}>
                <span className={styles.navWrapper}>
                  <OutIcon />
                  <button onClick={signOut}>Выйти</button>
                </span>
              </div>
            ) : (
              <div className={styles.burgerNavAuth}>
                <span className={styles.navWrapper}>
                  <OutIcon />
                  <Link to={routePath.AUTH}>Войти или зарегистрироваться</Link>
                </span>
              </div>
            )}

            {isAuth && (
              <div className={styles.profileItem}>
                <div className={styles.navProfile}>
                  <span className={styles.navWrapper}>
                    <Profile />
                    <Link to={routePath.PROFILE}>{name}</Link>
                  </span>
                </div>

                <div className={styles.navMyFeedback}>
                  <span className={styles.navWrapper}>
                    <CreateIcon />
                    <Link to={routePath.PROFILE}>Мои отзывы</Link>
                  </span>
                </div>
              </div>
            )}

            <div className={styles.menuLinks}>
              <Link to={routePath.AGREMEENT}>Пользоательское соглашение</Link>
              <Link to={routePath.COMMUNNITY_RULES}>Правила сообщества</Link>
              <Link to={routePath.ABOUT}>О компании</Link>
            </div>

            <div className={styles.burgerNavButton}>
              <span className={styles.navWrapper}>
                <Link to={routePath.ADD_FEEDBACK} className={styles.createFeedback}>
                  <CreateIcon />
                  Написать отзыв
                </Link>
              </span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
