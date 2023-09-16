import React from "react";
import styles from "./CreateFeedbackButton.module.scss";
type CreateFeedbackButtonProps = {
  mobile?: boolean;
  clickHandler: () => void;
};

const CreateFeedbackButton: React.FC<CreateFeedbackButtonProps> = ({
  mobile,
  clickHandler,
}) => {
  return (
    <button className={styles.button} onClick={clickHandler}>
      {mobile ? "+" : "Создать отзыв"}
    </button>
  );
};

export default CreateFeedbackButton;
