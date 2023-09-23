import { Rating } from "@mui/material";
import userIcon from "../../../../shared/assets/user.png";
import styles from "./HeaderBlock.module.scss";

interface IHeaderProps {
  userName: string;
  rating: number;
}

export const HeaderBlock = ({ userName, rating }: IHeaderProps) => {
  return (
    <header className={styles.header}>
      <figure>
        <img src={userIcon} alt="user-icon" />
        <figcaption>{userName}</figcaption>
      </figure>

      <Rating name="read-only" size="small" value={rating} readOnly />
    </header>
  );
};
