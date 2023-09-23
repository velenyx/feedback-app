import {GoCommentDiscussion as FeedbackIcon} from "react-icons/go"
import styles from "./FeedbackText.module.scss"

interface IFeedbackTextProps {
    text: string
}

export const FeedbackTextBlock = ({text} : IFeedbackTextProps) => {
  return (
    <section className={styles.feedback}>
    <h2><FeedbackIcon/> Отзыв</h2>
    <p className={styles.feedbackText}>{text}</p>
  </section>
  )
}

