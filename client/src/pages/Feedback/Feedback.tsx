import { useEffect } from "react";
import { useSelector, batch } from "react-redux";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../app/store";
import {
  fetchFeedbackById,
  incrementFeedbackViewsCount,
} from "../../app/store/slice/feedbackPage/feedbackPageThunk";
import { selectFeedbackPage } from "../../app/store/slice/feedbackPage/feedbackPageSlice";
import { CommentType, StatusEnum } from "../../@types/global_types";
import { MainLayout } from "../../layout/MainLayout/MainLayout";
import { Loading } from "../../components/Loading/Loading";
import { HeaderBlock } from "./compoents/HeaderBlock/HeaderBlock";
import { InfoBlock } from "./compoents/InfoBlock/InfoBlock";
import { SharedBlock } from "./compoents/SharedBlock/SharedBlock";
import { FeedbackTextBlock } from "./compoents/FeedbackTextBlock/FeedbackTextBlock";
import { CommentForm } from "./compoents/CommentForm/CommentForm";
import { CommentsBlock } from "./compoents/CommentsBlock/CommentsBlock";
import styles from "./Feedback.module.scss";
import { LoadingLayout } from "../../layout/LoadingLayout/LoadingLayout";

const Feedback = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { feedback, status } = useSelector(selectFeedbackPage);

  const comments: CommentType[] = [
    {
      id: "eignsjsuetsakasf",
      created_date: "2023-09-29T00:31:50.481",
      text: "Eum, a dicta? Nam optio dignissimos modi est maiores molestias voluptates totam temporibus.",
      user: {
        id: "eignsjsuetsakasf",
        name: "Иванов Иван",
        email: "ivanow.w@gmail.com",
        isEmailVerified: true,
      },
    },
    {
      id: "eignsjsuetsaksasf",
      created_date: "2023-09-29T00:31:50.481",
      text: "Eum, a dicta? Nam optio dignissimos modi est maiores molestias voluptates totam temporibus.",
      user: {
        id: "eignsjsuetsakasf",
        name: "Иванов Иван",
        email: "ivanow.w@gmail.com",
        isEmailVerified: true,
      },
    },
    {
      id: "eignsjsuetdsakasf",
      created_date: "2023-09-29T00:31:50.481",
      text: "Eum, a dicta? Nam optio dignissimos modi est maiores molestias voluptates totam temporibus.",
      user: {
        id: "eignsjsuetsakasf",
        name: "Иванов Иван",
        email: "ivanow.w@gmail.com",
        isEmailVerified: true,
      },
    },
  ];

  useEffect(() => {
    if (id) {
      batch(() => {
        dispatch(fetchFeedbackById(id));
        dispatch(incrementFeedbackViewsCount(id));
      });
    }
  }, [id]);

  if (status === StatusEnum.loading) {
    return (
      <LoadingLayout>
        <Loading />
      </LoadingLayout>
    );
  }
  if (status === StatusEnum.rejected) {
    return (
      <LoadingLayout>
        <div className={styles.error}>
          <p>Как жаль. Но вы попытались 🥺</p>
          <p>Попробуйте обновить старницу</p>
        </div>
      </LoadingLayout>
    );
  }

  return (
    <MainLayout>
      <article className={styles.feedbackPage}>
        <div className={styles.container}>
          {status === StatusEnum.success && feedback && (
            <>
              <HeaderBlock
                userName={feedback.user.name}
                rating={feedback.rating}
                isVerify={feedback.user.isEmailVerified}
              />
              <InfoBlock feedback={feedback} />
              <SharedBlock name={feedback.client.name} />
              <FeedbackTextBlock text={feedback.text} />
              <CommentForm />
              <CommentsBlock comments={comments} />
            </>
          )}
        </div>
      </article>
    </MainLayout>
  );
};

export default Feedback;
