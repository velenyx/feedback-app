import { FeedbackType, PaginationMeta } from "../../../../@types/global_types";
import { StatusEnum } from "../categories/categoriesTypes";

export type FetchProfileFeedbacksResponse = {
  feedbacks: FeedbackType[] | null;
  meta: PaginationMeta;
};
export interface IProfileFeedacksSliceInitialState {
  myFeedbacks: FeedbackType[] | null;
  meta: PaginationMeta;
  status: StatusEnum;
}

export type FetchProfileFeedbacksPayload = {
  page: number;
  limit: number;
};
