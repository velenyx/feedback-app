import { createAsyncThunk } from "@reduxjs/toolkit";
import { routePath } from "../../../../shared/config/routePath";
import { $api } from "../../../../shared/config/api";
import { FeedbackType } from "../../../../@types/global_types";

export const fetchFeedbackById = createAsyncThunk(
  "categories/fetchFeedbackById",
  async (id: string) => {
    const { data } = await $api.get<FeedbackType>(routePath.FEEDBACK + id);
    return data;
  }
);
export const incrementFeedbackViewsCount = createAsyncThunk(
  "categories/incrementFeedbackViewsCount",
  async (id: string) => {
    await $api.patch<FeedbackType>(routePath.FEEDBACK + id);
  }
);
