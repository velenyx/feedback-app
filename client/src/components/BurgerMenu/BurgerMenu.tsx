import styles from "./BurgerMenu.module.scss";
import { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { routePath } from "../../shared/config/routePath";
import { RxEnter as OutIcon } from "react-icons/rx";
import { IoCreateOutline as CreateIcon } from "react-icons/io5";
import { BiUser as ProfileIcon } from "react-icons/bi";

import { useAuth } from "../../shared/hooks/useAuth";
import { NavItem } from "../NavItem/NavItem";

export const BurgerMenu = () => {
  const { isAuth, name } = useAuth();
  const [burgerToggle, setBurgerToggle] = useState(false);

  const signOut = () => {};

  const handleBurgerMenu = () => {
    setBurgerToggle((prev) => !prev);
  };
  return (
    <>
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
                <ul className={styles.authContainer}>
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
                </ul>
              </div>
            </div>
          )}

          {isAuth && (
            <ul className={styles.profileItem}>
              <NavItem
                className={styles.navProfile}
                title={name}
                path={routePath.PROFILE}
                Icon={ProfileIcon}
              />
              <NavItem
                className={styles.navMyFeedback}
                title="Мои отзывы"
                path={routePath.PROFILE}
                Icon={CreateIcon}
              />
            </ul>
          )}

          <ul className={styles.menuLinks}>
            <li>
              <Link to={routePath.AGREMEENT}>Пользоательское соглашение</Link>
            </li>
            <li>
              <Link to={routePath.COMMUNNITY_RULES}>Правила сообщества</Link>
            </li>
            <li>
              <Link to={routePath.ABOUT}>О компании</Link>
            </li>
          </ul>

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
    </>
  );
};
