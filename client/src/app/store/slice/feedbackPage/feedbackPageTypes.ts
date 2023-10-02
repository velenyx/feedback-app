import type { FeedbackType, StatusEnum } from "../../../../@types/global_types";

export type FeedbackPageSlice = {
  feedback: FeedbackType | null;
  status: StatusEnum;
};
