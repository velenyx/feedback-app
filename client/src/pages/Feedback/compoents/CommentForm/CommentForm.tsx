import { FormEvent, useState } from "react";
import classNames from "classnames";
import { BiMessageAdd as AddIcom } from "react-icons/bi";
import { useAuth } from "../../../../shared/hooks/useAuth";
import { bannedRegex } from "../../../../shared/utils/bannedWords";
import { getFormattedDate } from "../../../../shared/helpers/formatDate";
import { notifySuccess, notifyWarning } from "../../../../shared/utils/notify";
import styles from "./CommentForm.module.scss";
import type { CommentTypeWithoutId } from "../../../../@types/global_types";

export const CommentForm = () => {
  const [text, setText] = useState("");
  const { isAuth, name, email, id } = useAuth();

  const handleSendComment = (event: FormEvent) => {
    event.preventDefault();
    if (!isAuth) {
      notifyWarning("Авторизуйтесь");
      return;
    }

    const newComment: CommentTypeWithoutId = {
      user: {
        id: id!,
        name: name!,
        email: email!,
      },
      created_date: getFormattedDate(),
      text: text.replace(bannedRegex, "*".repeat(3)),
      sub_сomments: [],
    };
    console.log(newComment);
    notifySuccess("Комментарий отправлен");
    setText("");
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
              placeholder="Текст комментария"
              required
            />
            <button tabIndex={0} type="submit">
              Добавить
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
