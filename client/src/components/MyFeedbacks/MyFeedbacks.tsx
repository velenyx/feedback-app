import Pagination from "@mui/material/Pagination";
import { useEffect, useState } from "react";
import styles from "./MyFeedbacks.module.scss";
import { FeedbackCard } from "../FeedbackCard/FeedbackCard";
import { useDispatch, useSelector } from "react-redux";
import { selectMyFeedbacks } from "../../app/store/slice/profile/profileSlice";
import { fetchMyFeedbacks } from "../../app/store/slice/profile/profileThunk";

export const MyFeedbacks = () => {
  const [page, setPage] = useState(1);
  const pageSize = 5;
  const dispatch = useDispatch<any>();
  const { myFeedbacks } = useSelector(selectMyFeedbacks);
  const currentMyFeedbacksPortion = myFeedbacks.slice(
    (page - 1) * pageSize,
    page * pageSize
  );
  useEffect(() => {
    if (currentMyFeedbacksPortion.length !== pageSize) {
      dispatch(fetchMyFeedbacks());
    }
  }, [page]);

  const feedbackItems = currentMyFeedbacksPortion.map((feedback) => (
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
      <div className={styles.feedbacksContainer}>{feedbackItems}</div>

      <div className={styles.pagination}>
        <Pagination
          color="secondary"
          count={Math.ceil(myFeedbacks.length / pageSize)}
          page={page}
          onChange={handlePaginationChange}
        />
      </div>
    </div>
  );
};
