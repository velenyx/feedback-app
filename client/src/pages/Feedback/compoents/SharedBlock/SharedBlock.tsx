import { memo } from "react";
import { Rating } from "@mui/material";
import { FaShare as ShareIcon } from "react-icons/fa";
import { ShareFacebook } from "../../../../shared/ui/Buttons/ShareFacebook/ShareFacebook";
import { ShareX } from "../../../../shared/ui/Buttons/ShareX/ShareX";
import styles from "./SharedBlock.module.scss";

interface ISharedProps {
  name: string;
}

export const SharedBlock = memo(({ name }: ISharedProps) => {
  const location = window.location.href;
  return (
    <section className={styles.shared}>
      <span className={styles.sharedText}>
        <ShareIcon /> Поделиться:
      </span>
      <div className={styles.links}>
        <ShareFacebook currentUrl={location} />
        <ShareX currentUrl={location} name={name} />
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
});
