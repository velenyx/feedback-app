import { Rating, Tooltip } from "@mui/material";
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

      <Tooltip title="Рейтинг отзыва">
        <div>
          <Rating
            name="half-rating-read"
            size="small"
            value={rating}
            precision={0.5}
            readOnly
          />
        </div>
      </Tooltip>
    </header>
  );
};
