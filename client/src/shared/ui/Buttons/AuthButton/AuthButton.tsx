import { CircularProgress as Loading } from '@mui/material';
import classNames from 'classnames';

import styles from './AuthButton.module.scss';

interface IAuthButtonProps {
  name: string;
  type: 'submit' | 'button';
  callback?: () => void;
  loading: boolean;
}

export const AuthButton = ({ callback, loading, name, type }: IAuthButtonProps) => (
  <button
    type={type}
    onClick={callback}
    className={classNames(styles.button, { [styles.block]: loading })}
  >
    {loading ? <Loading className={styles.loading} /> : name}
  </button>
);
