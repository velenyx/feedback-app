import classNames from "classnames";
import { CircularProgress as Loading } from "@mui/material";
import styles from "./AuthButton.module.scss";

interface IAuthButtonProps {
  name: string;
  type: "submit" | "button";
  callback?: () => void;
  loading: boolean;
}

export const AuthButton = ({ name, type, callback, loading }: IAuthButtonProps) => {
  return (
    <button
      type={type}
      onClick={callback}
      className={classNames(styles.button, { [styles.block]: loading })}
    >
      {loading ? <Loading className={styles.loading} /> : name}
    </button>
  );
};
