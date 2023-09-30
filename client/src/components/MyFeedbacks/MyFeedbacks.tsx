import Pagination from "@mui/material/Pagination";
import { useState } from "react";
import styles from "./MyFeedbacks.module.scss";

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
