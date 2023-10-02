import { useMemo, memo } from "react";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import { BsArrowReturnRight as AnswerIcon } from "react-icons/bs";
import { CommentType } from "../../../../@types/global_types";
import { calculateTimeElapsed } from "../../../../shared/helpers/calculateTimeElapsed";
import styles from "./Comment.module.scss";

interface ICommentProps {
  data: CommentType;
}

export const Comment = memo(({ data }: ICommentProps) => {
  const { text, user, created_date } = data;

  const commentTime = useMemo(() => {
    return calculateTimeElapsed(new Date(created_date));
  }, [created_date]);

  return (
    <article className={styles.comment}>
      <header>
        <div className={styles.user}>
          <PersonPinIcon />
          <div>
            <h3 aria-label="Автор комментария">{user.name}</h3>
            <time
              aria-label="Время комментария"
              className={styles.date}
              dateTime={commentTime}
            >
              {commentTime}
            </time>
          </div>
        </div>
      </header>
      <p className={styles.text} aria-label="Текст комментария">
        {text}
      </p>
      <button className={styles.answer}>
        <AnswerIcon /> Ответить
      </button>
    </article>
  );
});
