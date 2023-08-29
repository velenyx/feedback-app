import { useParams } from "react-router-dom";
import styles from "./Feedback.module.scss";

export const Feedback = () => {
  const { id } = useParams();
  return <div style={styles}>Feedback:  {id}</div>;
};
