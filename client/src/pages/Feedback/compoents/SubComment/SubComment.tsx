import { FormEvent, useState } from "react";
import styles from "./SubComment.module.scss";
import { getFormattedDate } from "../../../../shared/helpers/formatDate";
import { bannedRegex } from "../../../../shared/utils/bannedWords";
import { CommentTypeWithoutId } from "../../../../@types/global_types";
import { notifySuccess } from "../../../../shared/utils/notify";

interface ISubCommentProps {
  isOpen: (toogle: boolean) => void;
}

export const SubComment = ({ isOpen }: ISubCommentProps) => {
  const [text, setText] = useState("");

  const handleSendSubComment = (event: FormEvent) => {
    event.preventDefault();

    const newComment: CommentTypeWithoutId = {
      user: {
        id: "",
        name: "",
        email: "",
      },
      created_date: getFormattedDate(),
      text: text.replace(bannedRegex, "*".repeat(3)),
    };
    notifySuccess("Комментарий отправлен");
    isOpen(false);
  };

  return (
    <div className={styles.subComment}>
      <form className={styles.form} onSubmit={handleSendSubComment}>
        <textarea
          className={styles.subTextarea}
          value={text}
          onChange={(event) => setText(event.target.value)}
          rows={3}
          placeholder="Текс комментария"
          required
        />
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
};
