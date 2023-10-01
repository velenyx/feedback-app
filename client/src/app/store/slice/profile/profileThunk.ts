import { createAsyncThunk } from "@reduxjs/toolkit";
import { routePath } from "../../../../shared/config/routePath";
import { $api } from "../../../../shared/config/api";
import { GetMyFeedbacksPayload } from "./profileTypes";

export const fetchMyFeedbacks = createAsyncThunk(
  "feedbacks/fetchMyFeedbacks",
  async ({ page }: { page: number }) => {
    const { data } = await $api.get<GetMyFeedbacksPayload>(
      `${routePath.MY_FEEDBACKS}?page=${page}&limit=5`
    );
    return data;
  }
);
