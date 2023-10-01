import { StatusEnum } from "../categories/categoriesTypes";

export type MyFeedback = {
  category: string;
  client: {
    name: string;
    email?: string;
    phone?: string;
    country?: string;
    social_links?: string[];
  };
  text: string;
  rating: number;
  id: string;
  commentsCount: number;
  views: number;
  user: string;
  created_date: string;
};

export type MyFeedbacksMeta = {
  page: number | null;
  limit: number | null;
  totalPages: number | null;
  totalResults: number | null;
};

export type GetMyFeedbacksPayload = {
  feedbacks: MyFeedback[] | null;
  meta: MyFeedbacksMeta;
};
export interface IMyFeedacksSliceInitialState {
  myFeedbacks: MyFeedback[] | null;
  meta: MyFeedbacksMeta;
  status: StatusEnum;
}
