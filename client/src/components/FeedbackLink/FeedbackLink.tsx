import React from "react";
import styles from "./FeedbackLink.module.scss";
import viewIcon from "../../shared/assets/views_icon.svg";
import commentIcon from "../../shared/assets/commenst_icon.svg";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

type FeedbacksLinkProps = {
  name: string;
  text: string;
  category: string;
  views: number;
  comments: number;
  id: string;
  rating: number;
};

const FeedbackLink: React.FC<FeedbacksLinkProps> = ({
  name,
  text,
  category,
  views,
  comments,
  id,
  rating,
}) => {
  return (
    <Link to={`feedback/${id}`} className={styles.link}>
      <div className={styles.linkContainer}>
        <div className={styles.name}>
          {name}
          <Rating
            readOnly
            value={rating}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
        </div>
        <div className={styles.text}>{text}</div>
        <div className={styles.info}>
          <div className={styles.info}>{category}</div>
          <div className={styles.count}>
            <div className={styles.countItem}>
              {views} <img src={viewIcon} alt="" />
            </div>
            <div className={styles.countItem}>
              {comments} <img src={commentIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeedbackLink;
