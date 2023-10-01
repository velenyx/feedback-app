import { StatusEnum } from "../categories/categoriesTypes";

export interface MyFeedback {
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
}

export interface GetMyFeedbacksMeta {
  page: number | null;
  limit: number | null;
  totalPages: number | null;
  totalResults: number | null;
}

export type GetMyFeedbacksPayload = {
  feedbacks: MyFeedback[] | null;
  meta: GetMyFeedbacksMeta;
};
export type myFeedacksSliceInitialState = {
  myFeedbacks: MyFeedback[] | null;
  meta: GetMyFeedbacksMeta;
  status: StatusEnum;
};
