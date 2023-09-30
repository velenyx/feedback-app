import styles from "./ProfileInfo.module.scss";
import WorkIcon from "@mui/icons-material/Work";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
export const ProfileInfo = () => {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.mainInfo}>
        <div className={styles.avatar}></div>
        <div className={styles.nameAndOccup}>
          <div className={styles.name}>Name</div>
          <div className={styles.occupation}>
            <WorkIcon /> occupation
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
