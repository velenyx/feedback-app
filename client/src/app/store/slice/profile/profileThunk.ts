import { createAsyncThunk } from "@reduxjs/toolkit";
import { routePath } from "../../../../shared/config/routePath";
import { $api } from "../../../../shared/config/api";
import { myFeedback } from "./profileTypes";

export const fetchMyFeedbacks = createAsyncThunk(
  "feedbacks/myFeedbacks",
  async () => {
    const { data } = await $api.get<myFeedback[]>(routePath.MY_FEEDBACKS);
    return data;
  }
);
