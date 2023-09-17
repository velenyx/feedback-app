import React from "react";
import styles from "./CreateFeedbackButton.module.scss";
type CreateFeedbackButtonProps = {
  clickHandler: () => void;
};

const CreateFeedbackButton: React.FC<CreateFeedbackButtonProps> = ({
  clickHandler,
}) => {
  return (
    <button className={styles.button} onClick={clickHandler}>
      Создать отзыв
    </button>
  );
};

export default CreateFeedbackButton;
