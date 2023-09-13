import { MainLayout } from "../../layout/MainLayout";
import FeedbacksList from "./FeedbacksList/FeedbacksList";
import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <MainLayout>
      <div className={styles.home}>
        <div className={styles.container}>
          <h1>Home</h1>

          <FeedbacksList />
        </div>
      </div>
    </MainLayout>
  );
};
