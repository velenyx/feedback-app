import FeedbackCard from "../../components/FeedbackCard/FeedbackCard";
import { MainLayout } from "../../layout/MainLayout";
import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <MainLayout>
      <div className={styles.home}>
        <div className={styles.container}>
          <h1>Home</h1>

          <div className={styles.feedbacksList}>
            <FeedbackCard
              skeleton
              views={1}
              rating={5}
              id="1314"
              comments={3}
              category="Веб-программирование"
              name="Some Name"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
