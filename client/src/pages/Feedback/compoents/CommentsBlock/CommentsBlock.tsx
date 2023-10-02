import type { CommentType } from "../../../../@types/global_types";
import { Comment } from "../Comment/Comment";
import noCommentsIcon from "../../../../shared/assets/noComments.webp";
import styles from "./CommentsBlock.module.scss";

interface IComments {
  comments: CommentType[];
}

export const CommentsBlock = ({ comments }: IComments) => {
  return (
    <section className={styles.comments}>
      <h2>
        Комментарии: <span>({comments.length})</span>
      </h2>
      {!comments.length && (
        <div className={styles.noComments}>
          <div className={styles.image}>
            <img src={noCommentsIcon} alt="Нет комментариев" />
          </div>
          <p className={styles.text}>Нет комментариев</p>
        </div>
      )}
      {comments?.map((comment) => <Comment key={comment.id} data={comment} />)}
    </section>
  );
};
