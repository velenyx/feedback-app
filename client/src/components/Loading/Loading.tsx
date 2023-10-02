import { CircularProgress } from "@mui/material";
import styles from "./Loading.module.scss";

export const Loading = () => {
  return (
    <div className={styles.loading}>
      <CircularProgress />
    </div>
  );
};
