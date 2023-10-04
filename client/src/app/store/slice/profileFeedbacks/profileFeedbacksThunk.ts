import { createAsyncThunk } from "@reduxjs/toolkit";
import { routePath } from "../../../../shared/config/routePath";
import { $api } from "../../../../shared/config/api";
import {
  FetchProfileFeedbacksPayload,
  FetchProfileFeedbacksResponse,
} from "./profileFeedbacksTypes";

export const fetchMyFeedbacks = createAsyncThunk(
  "profileFeedbacks/profileFeedbacks",
  async ({ page, limit }: FetchProfileFeedbacksPayload) => {
    const { data } = await $api.get<FetchProfileFeedbacksResponse>(
      `${routePath.MY_FEEDBACKS}?limit=${limit}&page=${page}`
    );
    return data;
  }
);
