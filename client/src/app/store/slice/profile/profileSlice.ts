import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../..";
import { myFeedback } from "./profileTypes";
import { fetchMyFeedbacks } from "./profileThunk";
import { StatusEnum } from "../categories/categoriesTypes";

type initialState = {
  myFeedbacks: myFeedback[];
  meta: {
    page: number;
    limit: number;
    totalPages: number;
    totalResults: number;
  };
  status: string;
};

const initialState: initialState = {
  myFeedbacks: [],
  meta: {
    page: 0,
    limit: 5,
    totalPages: 0,
    totalResults: 0,
  },
  status: StatusEnum.loading,
};
export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMyFeedbacks.pending, (state) => {
        state.status = StatusEnum.loading;
      })
      .addCase(fetchMyFeedbacks.fulfilled, (state, action) => {
        state.status = StatusEnum.success;
        state.myFeedbacks = [...action.payload.feedbacks];
        state.meta = { ...action.payload.meta };
      })
      .addCase(fetchMyFeedbacks.rejected, (state) => {
        state.status = StatusEnum.rejected;
      });
  },
});
export const selectMyFeedbacks = (state: RootState) => state.profile;
export default profileSlice.reducer;
