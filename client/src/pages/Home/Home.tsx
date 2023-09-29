import { FeedbackCard } from "../../components/FeedbackCard/FeedbackCard";
import { MainLayout } from "../../layout/MainLayout";
import { Categories } from "../../components/Categories/Categories";
import { Widget } from "../../components/Widget/Widget";
import { routePath } from "../../shared/config/routePath";
import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <MainLayout>
      <div className={styles.home}>
        <div className={styles.container}>
          <div className={styles.feedbacksList}>
            <div className={styles.wrapper}>
              <Categories />
              <div className={styles.homeTape}>
                <div className={styles.widget}>
                  <div className={styles.widgetContainer}>
                    <Widget
                      title="Личный кабинет"
                      description="Отслеживайте ваши отзывы, редактируйте и добавляйте новые"
                      linkTitle="Профиль"
                      link={routePath.PROFILE}
                      bgUrl="https://cmp.dns-shop.ru/images/755ac8590433f3a6e50e.png"
                      bgColor="#fff7da"
                    />
                    <Widget
                      title="Правила сообщества"
                      description="Пожалуйста, ознакомтесь с правилами сообщества"
                      linkTitle="Правила"
                      link={routePath.COMMUNNITY_RULES}
                      bgUrl="https://cmp.dns-shop.ru/images/78097831b51ec906c029.png"
                      bgColor="#ecf9ff"
                    />
                    <Widget
                      title="Помощь"
                      description="Частые вопросы, полезная информация"
                      linkTitle="Помощь"
                      link={routePath.ABOUT}
                      bgUrl="https://cmp.dns-shop.ru/images/c97288867824cbe1ed8d.webp"
                      bgColor="#ffefef"
                    />
                  </div>
                </div>
                <div className={styles.feedbackCards}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
