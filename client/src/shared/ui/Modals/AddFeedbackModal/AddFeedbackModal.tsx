import React from "react";
import styles from "./AddFeedbackModal.module.scss";
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
        Content
      </div>
    </div>
  );
};

export default AddFeedbackModal;
