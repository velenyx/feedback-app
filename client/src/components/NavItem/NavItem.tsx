import type { IconType } from 'react-icons';
import { Link } from 'react-router-dom';

import styles from './NavItem.module.scss';

interface INavItemProps {
  className: string;
  path: string;
  title: string;
  Icon?: IconType;
}
export const NavItem = ({ Icon, className, path, title }: INavItemProps) => (
  <li className={className}>
    <div className={styles.navWrapper}>
      {Icon && <Icon />}
      <Link to={path}>{title}</Link>
    </div>
  </li>
);
