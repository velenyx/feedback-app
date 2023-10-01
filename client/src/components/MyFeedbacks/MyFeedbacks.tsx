import Pagination from "@mui/material/Pagination";
import { useEffect, useState } from "react";
import styles from "./MyFeedbacks.module.scss";
import { FeedbackCard } from "../FeedbackCard/FeedbackCard";
import { useSelector } from "react-redux";
import { selectMyFeedbacks } from "../../app/store/slice/profile/profileSlice";
import { fetchMyFeedbacks } from "../../app/store/slice/profile/profileThunk";
import { StatusEnum } from "../../app/store/slice/categories/categoriesTypes";
import { useAppDispatch } from "../../app/store";

export const MyFeedbacks = () => {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const { myFeedbacks, meta, status } = useSelector(selectMyFeedbacks);
  const { totalPages } = meta;
  useEffect(() => {
    dispatch(fetchMyFeedbacks({ page }));
  }, [page]);

  const feedbackItems = myFeedbacks.map((feedback) => (
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

  const handlePaginationChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };
  return (
    <div>
      <div className={styles.feedbacksContainer}>
        {status === StatusEnum.loading && "loading"}
        {status === StatusEnum.success &&
          myFeedbacks.length > 0 &&
          feedbackItems}
        {status === StatusEnum.success &&
          myFeedbacks.length < 1 &&
          "You don't have created feedbacks"}
      </div>

      <div className={styles.pagination}>
        <Pagination
          color="secondary"
          count={totalPages}
          page={page}
          onChange={handlePaginationChange}
        />
      </div>
    </div>
  );
};
