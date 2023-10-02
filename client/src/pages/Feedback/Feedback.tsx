import { useEffect } from "react";
import { useSelector, batch } from "react-redux";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../app/store";
import {
  fetchFeedbackById,
  incrementFeedbackViewsCount,
} from "../../app/store/slice/feedbackPage/feedbackPageThunk";
import { StatusEnum } from "../../app/store/slice/categories/categoriesTypes";
import { selectFeedbackPage } from "../../app/store/slice/feedbackPage/feedbackPageSlice";
import { MainLayout } from "../../layout/MainLayout";
import { Loading } from "../../components/Loading/Loading";
import { HeaderBlock } from "./compoents/HeaderBlock/HeaderBlock";
import { InfoBlock } from "./compoents/InfoBlock/InfoBlock";
import { SharedBlock } from "./compoents/SharedBlock/SharedBlock";
import { FeedbackTextBlock } from "./compoents/FeedbackTextBlock/FeedbackTextBlock";
import { CommentForm } from "./compoents/CommentForm/CommentForm";
import styles from "./Feedback.module.scss";

const Feedback = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { feedback, status } = useSelector(selectFeedbackPage);

  useEffect(() => {
    if (id) {
      batch(() => {
        dispatch(fetchFeedbackById(id));
        dispatch(incrementFeedbackViewsCount(id));
      });
    }
  }, [id]);

  return (
    <MainLayout>
      <article className={styles.feedbackPage}>
        <div className={styles.container}>
          {status === StatusEnum.loading && <Loading />}
          {status === StatusEnum.success && feedback && (
            <>
              <HeaderBlock userName={feedback.user.name} rating={feedback.rating} />
              <InfoBlock feedback={feedback} />
              <SharedBlock name={feedback.client.name} />
              <FeedbackTextBlock text={feedback.text} />
              <CommentForm />
            </>
          )}
          {status === StatusEnum.rejected && (
            <div className={styles.error}>
              Как жаль. Но вы попытались 🥺 Попробуйте обновить старницу
            </div>
          )}
        </div>
      </article>
    </MainLayout>
  );
};

export default Feedback;
