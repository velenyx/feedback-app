import { MainLayout } from "../../layout/MainLayout";
import CreateFeedbackButton from "../../shared/ui/Buttons/CreateFeedbackButton/CreateFeedbackButton";
import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <MainLayout>
      <div className={styles.home}>
        <div className={styles.container}>
          <CreateFeedbackButton clickHandler={() => {}} />
        </div>
      </div>
    </MainLayout>
  );
};
