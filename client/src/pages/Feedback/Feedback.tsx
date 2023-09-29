import { useParams } from "react-router-dom";
import { MainLayout } from "../../layout/MainLayout";
import { HeaderBlock } from "./compoents/HeaderBlock/HeaderBlock";
import { InfoBlock } from "./compoents/InfoBlock/InfoBlock";
import { SharedBlock } from "./compoents/SharedBlock/SharedBlock";
import { FeedbackTextBlock } from "./compoents/FeedbackTextBlock/FeedbackTextBlock";
import { CommentForm } from "./compoents/CommentForm/CommentForm";
import { FeedbackType } from "./types";
import styles from "./Feedback.module.scss";

const feedback: FeedbackType = {
  id: "abn3mridamxienysf25",
  category: "seo",
  // client - этот тот о ком пишут отзыв
  client: {
    id: "abn3mridamxienysf25sd",
    name: "Александр Пономарьов",
    phone: "+380639533321",
    email: "ivan.ov@gmail.com",
    coutry: "Украина",
    social_link: ["https://link-1", "https://link-2"],
  },
  text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate velit sequi.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, dolorum consequatur? Veritatis reprehenderit molestiae et neque eius voluptatem pariatur culpa provident iste at beatae velit esse, quis inventore eum natus?",
  rating: 3.5,
  created_date: "2023-06-15T10:04:47",
  //user_info - это тот который пишет отзыв
  user: {
    id: "dfjkh436kjhsf",
    name: "Василий Чепушиленко",
    email: "piterparker@mail.ru",
  },
  views: 1370,
  tags: [],
};

const Feedback = () => {
  const { id } = useParams();

  return (
    <MainLayout>
      <article className={styles.feedbackPage}>
        <div className={styles.container}>
          <HeaderBlock userName={feedback.user.name} rating={feedback.rating} />
          <InfoBlock feedback={feedback} />
          <SharedBlock name={feedback.client.name} />
          <FeedbackTextBlock text={feedback.text} />
          <CommentForm />
          {/* <CommentsBlock commentsData={[]} /> */}
        </div>
      </article>
    </MainLayout>
  );
};

export default Feedback;
