import { Rating } from "@mui/material";
import { FaShare as ShareIcon } from "react-icons/fa";
import { AiFillFacebook as FacebookIcon } from "react-icons/ai";
import { AiFillTwitterSquare as XIcon } from "react-icons/ai";
import styles from "./SharedBlock.module.scss";

export const SharedBlock = () => {
  return (
    <section className={styles.shared}>
      <span className={styles.sharedText}>
        <ShareIcon /> Поделиться:
      </span>
      <div className={styles.links}>
        <FacebookIcon />
        <XIcon />
      </div>

      <div className={styles.evaluate}>
        <span className={styles.evaluateTitle}>Оценить: </span>
        <Rating
          name="simple-controlled"
          value={null}
          onChange={(event, newValue) => {
            console.log(newValue);
          }}
        />
      </div>
    </section>
  );
};
