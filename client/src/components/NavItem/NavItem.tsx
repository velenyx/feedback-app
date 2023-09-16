import { Link } from "react-router-dom";
import { IconType } from "react-icons";
import styles from "./NavItem.module.scss";

interface INavItemProps {
  className: string;
  path: string;
  title: string;
  Icon?: IconType;
}
export const NavItem = ({ className, path, title, Icon }: INavItemProps) => {
  return (
    <li className={className}>
      <div className={styles.navWrapper}>
        {Icon && <Icon />}
        <Link to={path}>{title}</Link>
      </div>
    </li>
  );
};
