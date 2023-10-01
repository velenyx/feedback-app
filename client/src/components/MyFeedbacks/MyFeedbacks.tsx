import Pagination from "@mui/material/Pagination";
import { useEffect, useState } from "react";
import styles from "./MyFeedbacks.module.scss";
import { FeedbackCard } from "../FeedbackCard/FeedbackCard";
import { useSelector } from "react-redux";
import {
  selectMyFeedbacks,
  selectMyFeedbacksMeta,
} from "../../app/store/slice/myFeedbacks/myFeedbacksSlice";
import { fetchMyFeedbacks } from "../../app/store/slice/myFeedbacks/myFeedbacksThunk";
import { StatusEnum } from "../../app/store/slice/categories/categoriesTypes";
import { useAppDispatch } from "../../app/store";

export const MyFeedbacks = () => {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const { myFeedbacks, status } = useSelector(selectMyFeedbacks);
  const { totalPages } = useSelector(selectMyFeedbacksMeta);
  useEffect(() => {
    dispatch(fetchMyFeedbacks({ page }));
  }, [page]);

  const feedbackItems = myFeedbacks?.map((feedback) => (
    <FeedbackCard
      category={feedback.category}
      rating={feedback.rating}
      text={feedback.text}
      comments={feedback.commentsCount}
      views={feedback.views}
      id={feedback.id}
      name={feedback.client.name}
      key={feedback.id}
    />
  ));
  return (
    <div>
      <div className={styles.feedbacksContainer}>
        {status === StatusEnum.loading && "loading"}
        {status === StatusEnum.success && myFeedbacks && feedbackItems}
        {status === StatusEnum.success &&
          !myFeedbacks &&
          "You don't have created feedbacks"}
      </div>

      <div className={styles.pagination}>
        <Pagination
          color="secondary"
          count={totalPages ?? 0}
          page={page}
          onChange={(_, num) => setPage(num)}
        />
      </div>
    </div>
  );
};
