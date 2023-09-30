import { MyFeedbacks } from "../../components/MyFeedbacks/MyFeedbacks";
import { ProfileInfo } from "../../components/ProfileInfo/ProfileInfo";
import { MainLayout } from "../../layout/MainLayout";
import styles from "./Profile.module.scss";

export const Profile = () => {
  return (
    <MainLayout>
      <section className={styles.container}>
        <ProfileInfo />
        <MyFeedbacks />
      </section>
    </MainLayout>
  );
};
