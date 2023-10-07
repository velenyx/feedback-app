import { Rating, Tooltip } from "@mui/material";
import userIcon from "../../../../shared/assets/user.png";
import { TbShieldCheckFilled as VerifyIcon } from "react-icons/tb";
import styles from "./HeaderBlock.module.scss";

interface IHeaderProps {
  userName: string;
  rating: number;
  isVerify: boolean;
}

export const HeaderBlock = ({ userName, rating, isVerify }: IHeaderProps) => {
  return (
    <header className={styles.header}>
      <figure className={styles.headerFigure}>
        <img src={userIcon} alt="user-icon" />
        <figcaption>{userName}</figcaption>
        <span className={styles.verify}>{isVerify && <VerifyIcon />}</span>
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
