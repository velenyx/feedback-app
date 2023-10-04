import Pagination from "@mui/material/Pagination";
import { useEffect, useState } from "react";
import styles from "./ProfileFeedbacks.module.scss";
import { FeedbackCard } from "../FeedbackCard/FeedbackCard";
import { useSelector } from "react-redux";
import {
  selectMyFeedbacks,
  selectMyFeedbacksMeta,
} from "../../app/store/slice/profileFeedbacks/profileFeedbacksSlice";
import { fetchMyFeedbacks } from "../../app/store/slice/profileFeedbacks/profileFeedbacksThunk";
import { useAppDispatch } from "../../app/store";

export const ProfileFeedbacks = () => {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const { myFeedbacks, status } = useSelector(selectMyFeedbacks);
  const { totalPages } = useSelector(selectMyFeedbacksMeta);
  useEffect(() => {
    dispatch(fetchMyFeedbacks({ page, limit: 5 }));
  }, [page]);

  const feedbackItems = myFeedbacks?.map((feedback) => (
    <FeedbackCard
      category={feedback.category}
      rating={feedback.rating}
      text={feedback.text}
      comments={feedback.comments_count}
      views={feedback.views}
      id={feedback.id}
      name={feedback.client.name}
      key={feedback.id}
    />
  ));
  return (
    <div>
      <div className={styles.feedbacksContainer}>{feedbackItems}</div>

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
