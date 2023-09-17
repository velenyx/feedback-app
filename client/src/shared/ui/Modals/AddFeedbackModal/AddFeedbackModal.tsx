import React from "react";
import styles from "./AddFeedbackModal.module.scss";
import CreateFeedbackButton from "../../Buttons/CreateFeedbackButton/CreateFeedbackButton";
type AddFeedbackModalProps = {
  isActive: boolean;
  setVisibility: () => void;
};

const AddFeedbackModal: React.FC<AddFeedbackModalProps> = ({
  isActive,
  setVisibility,
}) => {
  return (
    <div
      onClick={setVisibility}
      className={`${styles.modal} ${isActive ? styles.active : ""}`}
    >
      <div onClick={(e) => e.stopPropagation()} className={styles.content}>
        <div className={styles.overflow}>
          <h3 className={styles.title}>Create feedback</h3>
          <textarea
            className={styles.commentInput}
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="What do you think about think client?"
          ></textarea>
          <CreateFeedbackButton clickHandler={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default AddFeedbackModal;
