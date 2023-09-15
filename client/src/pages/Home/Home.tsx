import { Categories } from "../../components/Categories/Categories.1";
import { MainLayout } from "../../layout/MainLayout";
import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <MainLayout>
      <div className={styles.home}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <Categories />
            <div className={styles.homeTape}>Отзывы</div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
