import { memo } from "react";
import { Rating } from "@mui/material";
import { FaShare as ShareIcon } from "react-icons/fa";
import { ShareFacebook } from "../../../../shared/ui/Buttons/ShareFacebook/ShareFacebook";
import { notifySuccess, notifyWarning } from "../../../../shared/utils/notify";
import { ShareX } from "../../../../shared/ui/Buttons/ShareX/ShareX";
import { $api } from "../../../../shared/config/api";
import styles from "./SharedBlock.module.scss";
import { useAuth } from "../../../../shared/hooks/useAuth";

interface ISharedProps {
  name: string;
}
export const SharedBlock = memo(({ name }: ISharedProps) => {
  const location = window.location.href;
  const { isAuth } = useAuth();

  const handleSetRating = (rating: number | null) => {
    if (!rating) return;
    if (isAuth) {
      notifySuccess("Спасибо за оценку");
      $api.patch(`/feedbacks/rate/65161af64f406719f888b005?rating=${rating}`);
    } else {
      notifyWarning("Авторизуйтесь!");
    }
  };
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
          onChange={(_, newValue) => handleSetRating(newValue)}
        />
      </div>
    </section>
  );
});
