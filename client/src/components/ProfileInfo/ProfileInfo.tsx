import WorkIcon from "@mui/icons-material/Work";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";
import styles from "./ProfileInfo.module.scss";


interface IProfileInfoProps {
  occupation: string;
  name: string | undefined;
}

export const ProfileInfo: React.FC<IProfileInfoProps> = ({
  occupation,
  name,
}) => {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.mainInfo}>
        <div className={styles.avatar}></div>
        <div className={styles.nameAndOccup}>
          <div className={styles.name}>{name}</div>
          <div className={styles.occupation}>
            <WorkIcon /> <span>{occupation}</span>
          </div>
        </div>
      </div>
      <div className={styles.editButtons}>
        <button className={styles.addFeedbackButton}>
          <AddIcon /> Add feedbacks
        </button>
        <button className={styles.editProfile}>
          <EditIcon /> Add feedbacks
        </button>
      </div>
    </div>
  );
};
