import { useParams } from "react-router-dom";
import { MainLayout } from "../../layout/MainLayout";
import styles from "./Feedback.module.scss";

export const Feedback = () => {
  const { id } = useParams();
  return (
    <MainLayout>
      <div className={styles.feedbackPage}>
        <div className={styles.container}>
        Feedback: {id}
        </div>
      </div>
    </MainLayout>
  );
};
