import { useSelector } from "react-redux";
import { ProfileFeedbacks } from "../../components/ProfileFeedbacks/ProfileFeedbacks";
import { ProfileInfo } from "../../components/ProfileInfo/ProfileInfo";
import { MainLayout } from "../../layout/MainLayout";
import styles from "./Profile.module.scss";
import { selectUser } from "../../app/store/slice/auth/authSlice";

export const Profile = () => {
  const user = useSelector(selectUser);
  return (
    <MainLayout>
      <section className={styles.container}>
        <ProfileInfo name={user?.name} occupation="occupation" />
        <ProfileFeedbacks />
      </section>
    </MainLayout>
  );
};
