import { MainLayout } from "../../layout/MainLayout/MainLayout";
import styles from "./Profile.module.scss";

const Profile = () => {
  return (
    <MainLayout>
      <div className={styles.profile}>Profile</div>
    </MainLayout>
  );
};

export default Profile;
