import { createAsyncThunk } from "@reduxjs/toolkit";
import { routePath } from "../../../../shared/config/routePath";
import { $api } from "../../../../shared/config/api";
import { GetMyFeedbacksPayload } from "./myFeedbacksTypes";

export const fetchMyFeedbacks = createAsyncThunk(
  "myFeedbacks/fetchMyFeedbacks",
  async ({ page }: { page: number }) => {
    const { data } = await $api.get<GetMyFeedbacksPayload>(
      `${routePath.MY_FEEDBACKS}?limit=5&page=${page}`
    );
    return data;
  }
);
