import { CommentType } from "../../types";
import styles from "./CommentsBlock.module.scss";

interface IComments {
  commentsData: CommentType[];
}

export const CommentsBlock = ({ commentsData }: IComments) => {
  return (
    <section className={styles.comments}>
      <h2>
        Комментарии: <span>({commentsData.length})</span>
      </h2>
    </section>
  );
};
