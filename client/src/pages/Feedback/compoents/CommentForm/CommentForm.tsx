import { FormEvent, useState } from "react";
import classNames from "classnames";
import { BiMessageAdd as AddIcom } from "react-icons/bi";
import { useAuth } from "../../../../shared/hooks/useAuth";
import { bannedRegex } from "../../../../shared/utils/bannedWords";
import styles from "./CommentForm.module.scss";

export const CommentForm = () => {
  const [text, setText] = useState("");
  const { isAuth } = useAuth();

  const handleSendComment = (event: FormEvent) => {
    event.preventDefault();

    const newComment = {
      text: text.replace(bannedRegex, "*".repeat(1)),
    };

    console.log(newComment);
  };

  return (
    <section className={styles.commentForm}>
      <div className={styles.container}>
        <h3 className={styles.title}>
          <AddIcom /> Добавить комментарий
        </h3>
        <div className={styles.wrapper}>
          <form className={styles.form} onSubmit={handleSendComment}>
            <textarea
              value={text}
              onChange={(event) => setText(event.target.value)}
              rows={4}
              placeholder="Комментарий..."
              required
            />
            <button className={classNames({ [styles.notAuth]: !isAuth })} type="submit">
              Добавить
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
