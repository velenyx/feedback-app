import { useState } from "react";
import { MainLayout } from "../../layout/MainLayout";
import CreateFeedbackButton from "../../shared/ui/Buttons/CreateFeedbackButton/CreateFeedbackButton";
import AddFeedbackModal from "../../shared/ui/Modals/AddFeedbackModal/AddFeedbackModal";
import styles from "./Home.module.scss";

export const Home = () => {
  const [modalVisible, setmodalVisible] = useState(false);
  const toggleModalvisibility = () => {
    setmodalVisible(!modalVisible);
  };
  return (
    <MainLayout>
      <div className={styles.home}>
        <div className={styles.container}>
          <CreateFeedbackButton clickHandler={toggleModalvisibility} />
          <AddFeedbackModal
            setVisibility={toggleModalvisibility}
            isActive={modalVisible}
          />
        </div>
      </div>
    </MainLayout>
  );
};
