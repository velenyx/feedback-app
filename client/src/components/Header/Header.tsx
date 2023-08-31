import styles from "./Header.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { routePath } from "../../shared/config/routePath";
import { useAuth } from "../../shared/hooks/useAuth";
import logo from "../../shared/assets/logo.svg";

import { RxEnter as OutIcon } from "react-icons/rx";
import { IoCreateOutline as CreateIcon } from "react-icons/io5";
import { BiUser as ProfileIcon } from "react-icons/bi";

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
                <div className={styles.navWrapper}>
                  <CreateIcon />
                  <Link to={routePath.PROFILE}>Мои отзывы</Link>
                </div>
              </div>

              <div className={styles.navProfile}>
                <div className={styles.navWrapper}>
                  <ProfileIcon />
                  <Link to={routePath.PROFILE}>{name}</Link>
                </div>
              </div>
            </>
          )}

          {isAuth ? (
            <div className={styles.navAuth}>
              <div className={styles.navWrapper}>
                <OutIcon />
                <button onClick={signOut}>Выйти</button>
              </div>
            </div>
          ) : (
            <div className={styles.navAuth}>
              <div className={styles.navWrapper}>
                <OutIcon />
                <Link to={routePath.AUTH}>Войти</Link>
              </div>
            </div>
          )}
        </nav>

        <div
          className={classNames(styles.headerBurger, { [styles.active]: burgerToggle })}
          onClick={handleBurgerMenu}
        >
          <span></span>
        </div>

        <nav className={classNames(styles.headerMenu, { [styles.active]: burgerToggle })}>
          <div className={styles.headerMenuWrapper}>
            {isAuth ? (
              <div className={styles.burgerNavAuth}>
                <div className={styles.navWrapper}>
                  <OutIcon />
                  <button onClick={signOut}>Выйти</button>
                </div>
              </div>
            ) : (
              <div className={styles.burgerNavAuth}>
                <div className={styles.navWrapper}>
                  <OutIcon />
                  <Link to={routePath.AUTH}>Войти или зарегистрироваться</Link>
                </div>
              </div>
            )}

            {isAuth && (
              <div className={styles.profileItem}>
                <div className={styles.navProfile}>
                  <div className={styles.navWrapper}>
                    <ProfileIcon />
                    <Link to={routePath.PROFILE}>{name}</Link>
                  </div>
                </div>

                <div className={styles.navMyFeedback}>
                  <div className={styles.navWrapper}>
                    <CreateIcon />
                    <Link to={routePath.PROFILE}>Мои отзывы</Link>
                  </div>
                </div>
              </div>
            )}

            <div className={styles.menuLinks}>
              <Link to={routePath.AGREMEENT}>Пользоательское соглашение</Link>
              <Link to={routePath.COMMUNNITY_RULES}>Правила сообщества</Link>
              <Link to={routePath.ABOUT}>О компании</Link>
            </div>

            <div className={styles.burgerNavButton}>
              <div className={styles.navWrapper}>
                <Link to={routePath.ADD_FEEDBACK} className={styles.createFeedback}>
                  <CreateIcon />
                  Написать отзыв
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
