import React, { ReactNode } from "react";
import styles from "./FeedbackCard.module.scss";
import viewIcon from "../../shared/assets/views_icon.svg";
import commentIcon from "../../shared/assets/commenst_icon.svg";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

type FeedbackCardProps = {
  name: string;
  text: string;
  category: string;
  views: number;
  comments: number;
  id: string;
  rating: number;
};

const FeedbackCard: React.FC<FeedbackCardProps> = ({
  name,
  text,
  category,
  views,
  comments,
  id,
  rating,
}) => {
  const cutPresentText = text.substr(0, 300);
  return (
    <Link to={`feedback/${id}`} className={styles.link}>
      <div className={styles.linkContainer}>
        <div className={styles.name}>
          <span>{name}</span>

          <Rating
            readOnly
            value={rating}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
        </div>
        <div className={styles.text}>{cutPresentText}</div>
        <div className={styles.info}>
          <span>{category}</span>

          <div className={styles.statistics}>
            <div className={styles.statisticsMetric}>
              <span>{views} </span>
              <img src={viewIcon} alt="" />
            </div>
            <div className={styles.statisticsMetric}>
              <span>{comments}</span> <img src={commentIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeedbackCard;
