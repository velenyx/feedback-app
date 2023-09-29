import React from 'react';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import { Rating } from '@mui/material';

import styles from './FeedbackCard.module.scss';

import commentIcon from '../../shared/assets/commenst_icon.svg';
import viewIcon from '../../shared/assets/views_icon.svg';

interface FeedbackCardProps {
  name: string;
  text: string;
  category: string;
  views: number;
  comments: number;
  id: string;
  rating: number;
}

export const FeedbackCard: React.FC<FeedbackCardProps> = ({
  category,
  comments,
  id,
  name,
  rating,
  text,
  views,
}) => {
  const cutPresentText = text.slice(0, 300);

  return (
    <article>
      <Link to={`feedback/${id}`}>
        <div className={styles.linkContainer}>
          <div className={styles.name}>
            <span>{name}</span>

            <Rating
              readOnly
              value={rating}
              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />}
            />
          </div>
          <p className={styles.text}>{cutPresentText}</p>
          <div className={styles.info}>
            <span>{category}</span>

            <div className={styles.statistics}>
              <div className={styles.statisticsMetric}>
                <span>{views} </span>
                <img src={viewIcon} alt='Иконка просмотров' />
              </div>
              <div className={styles.statisticsMetric}>
                <span>{comments}</span>
                <img src={commentIcon} alt='Иконка комментариев' />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};
