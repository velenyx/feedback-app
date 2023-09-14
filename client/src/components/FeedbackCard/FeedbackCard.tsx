import React from "react";
import styles from "./FeedbackCard.module.scss";
import viewIcon from "../../shared/assets/views_icon.svg";
import commentIcon from "../../shared/assets/commenst_icon.svg";
import { Link } from "react-router-dom";
import { Rating, Skeleton } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

type FeedbacksLinkProps = {
  name: string;
  text: string;
  category: string;
  views: number;
  comments: number;
  id: string;
  rating: number;
  skeleton?: boolean;
};

const FeedbackCard: React.FC<FeedbacksLinkProps> = ({
  name,
  text,
  category,
  views,
  comments,
  id,
  rating,
  skeleton,
}) => {
  return (
    <Link to={`feedback/${id}`} className={styles.link}>
      <div className={styles.linkContainer}>
        <div className={styles.name}>
          {skeleton ? (
            <Skeleton animation="wave" width={210} variant="rectangular" />
          ) : (
            name
          )}
          <Rating
            readOnly
            value={skeleton ? 0 : rating}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
        </div>
        <div className={styles.text}>
          {skeleton ? (
            <>
              <Skeleton animation="wave" width="100%" variant="rectangular" />
              <Skeleton
                sx={{ margin: "10px 0px" }}
                animation="wave"
                width="100%"
                variant="rectangular"
              />
            </>
          ) : (
            text
          )}
        </div>
        <div className={styles.info}>
          <div className={styles.info}>
            {skeleton ? (
              <Skeleton animation="wave" width="80px" variant="rectangular" />
            ) : (
              category
            )}
          </div>
          <div className={styles.count}>
            <div className={styles.countItem}>
              {skeleton ? "" : views} <img src={viewIcon} alt="" />
            </div>
            <div className={styles.countItem}>
              {skeleton ? "" : comments} <img src={commentIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeedbackCard;
