import { FeedbackType } from "../../../../pages/Feedback/types";
import { StatusEnum } from "../categories/categoriesTypes";

export type FeedbackPageSlice = {
  feedback: FeedbackType | null;
  status: StatusEnum;
};
