import { ProfileFeedbacks } from "../../components/ProfileFeedbacks/ProfileFeedbacks";
import { ProfileInfo } from "../../components/ProfileInfo/ProfileInfo";
import { MainLayout } from "../../layout/MainLayout";
import styles from "./Profile.module.scss";

export const Profile = () => {
  return (
    <MainLayout>
      <section className={styles.container}>
        <ProfileInfo />
        <ProfileFeedbacks />
      </section>
    </MainLayout>
  );
};
