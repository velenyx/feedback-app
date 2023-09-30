import Pagination from "@mui/material/Pagination";
import { useState } from "react";
import styles from "./MyFeedbacks.module.scss";
import { FeedbackCard } from "../FeedbackCard/FeedbackCard";

export const MyFeedbacks = () => {
  const [page, setPage] = useState(1);
  const handlePaginationChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };
  return (
    <div>
      <div className={styles.feedbacksContainer}>
        <FeedbackCard
          text="dfg"
          comments={0}
          views={1}
          rating={0}
          category="df"
          id="df"
          name="Vyzdryk Mykhailo"
  
        />
      </div>
      <button className={styles.pagination}>
        <Pagination
          color="secondary"
          count={10}
          page={page}
          onChange={handlePaginationChange}
        />
      </button>
    </div>
  );
};
