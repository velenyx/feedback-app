import { memo } from "react";
import classNames from "classnames";
import { MdSettingsSuggest as BarIcon } from "react-icons/md";
import { profileNavigate } from "../../shared/config/navigateItem";
import styles from "./SettingsBar.module.scss";

interface ISettingsBarProps {
  navigateClick: (nav: string) => void;
  navigateValue: string;
}

export const SettingsBar = memo(
  ({ navigateClick, navigateValue }: ISettingsBarProps) => {
    return (
      <div className={styles.settingsBar}>
        <div className={styles.title}>
          <span>Навигация</span>
          <BarIcon className={classNames({ [styles.active]: true })} />
        </div>
        <div className={styles.divider}></div>

        <ul className={styles.settingsList}>
          {profileNavigate.map((nav, index) => (
            <li
              key={index}
              onClick={() => navigateClick(nav)}
              className={classNames(styles.settingItem, {
                [styles.active]: navigateValue === nav,
              })}
            >
              {nav}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);
