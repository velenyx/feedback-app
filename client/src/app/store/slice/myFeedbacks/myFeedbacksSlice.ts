import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../..";
import { MyFeedback } from "./myFeedbacksTypes";
import { fetchMyFeedbacks } from "./myFeedbacksThunk";
import { StatusEnum } from "../categories/categoriesTypes";

type initialState = {
  myFeedbacks: MyFeedback[] | null;
  meta: {
    page: number;
    limit: number;
    totalPages: number;
    totalResults: number;
  };
  status: StatusEnum;
};

const initialState: initialState = {
  myFeedbacks: null,
  meta: {
    page: 1,
    limit: 5,
    totalPages: 0,
    totalResults: 0,
  },
  status: StatusEnum.loading,
};
export const myFeedbacksSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMyFeedbacks.pending, (state) => {
        state.status = StatusEnum.loading;
        state.myFeedbacks = null;
      })
      .addCase(fetchMyFeedbacks.fulfilled, (state, action) => {
        state.status = StatusEnum.success;
        state.myFeedbacks = action.payload.feedbacks;
        state.meta = { ...action.payload.meta };
      })
      .addCase(fetchMyFeedbacks.rejected, (state) => {
        state.status = StatusEnum.rejected;
        state.myFeedbacks = null;
      });
  },
});
export const selectMyFeedbacks = (state: RootState) => state.myFeedbacks;
export const selectMyFeedbacksMeta = (state: RootState) =>
  state.myFeedbacks.meta;
export default myFeedbacksSlice.reducer;
