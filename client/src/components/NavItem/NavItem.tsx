import styles from "./NavItem.module.scss";
import { Link } from "react-router-dom";
import { IconType } from "react-icons";

interface INavItem {
  className: string;
  path: string;
  title: string;
  Icon?: IconType;
}
export const NavItem = ({ className, path, title, Icon }: INavItem) => {
  return (
    <li className={className}>
      <div className={styles.navWrapper}>
        {Icon && <Icon />}
        <Link to={path}>{title}</Link>
      </div>
    </li>
  );
};
