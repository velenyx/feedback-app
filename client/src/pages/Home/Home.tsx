import { MainLayout } from "../../layout/MainLayout";
import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <MainLayout>
      <div className={styles.home}>
        <div className={styles.container}>
          <h1>Home</h1>
        </div>
      </div>
    </MainLayout>
  );
};
