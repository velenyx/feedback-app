import styles from "./AuthButton.module.scss";
import { CircularProgress as Loading } from "@mui/material";

interface IAuthButton {
  name: string;
  type: "submit" | "button";
  callback?: () => void;
  loading: boolean;
}

export const AuthButton = ({ name, type, callback, loading }: IAuthButton) => {
  return (
    <button type={type} onClick={callback} className={styles.button}>
      {loading ? <Loading className={styles.loading} /> : name}
    </button>
  );
};
