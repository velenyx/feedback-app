import { createAsyncThunk } from "@reduxjs/toolkit";
import { routePath } from "../../../../shared/config/routePath";
import { $api } from "../../../../shared/config/api";
import {
  FetchProfileFeedbacksPayload,
  GetProfileFeedbacksResponse,
} from "./profileFeedbacksTypes";

export const fetchMyFeedbacks = createAsyncThunk(
  "profileFeedbacks/profileFeedbacks",
  async ({ page, limit }: FetchProfileFeedbacksPayload) => {
    const { data } = await $api.get<GetProfileFeedbacksResponse>(
      `${routePath.MY_FEEDBACKS}?limit=${limit}&page=${page}`
    );
    return data;
  }
);
