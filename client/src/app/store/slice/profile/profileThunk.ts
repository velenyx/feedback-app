import { createAsyncThunk } from "@reduxjs/toolkit";
import { routePath } from "../../../../shared/config/routePath";
import { $api } from "../../../../shared/config/api";
import { getMyFeedbacksPayload } from "./profileTypes";

export const fetchMyFeedbacks = createAsyncThunk(
  "feedbacks/myFeedbacks",
  async ({ page }: { page: number }) => {
    const { data } = await $api.get<getMyFeedbacksPayload>(
      `${routePath.MY_FEEDBACKS}?page=${page}&limit=5`
    );
    return data;
  }
);
