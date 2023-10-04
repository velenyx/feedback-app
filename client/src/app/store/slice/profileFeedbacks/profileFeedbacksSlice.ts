import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../..";
import { StatusEnum } from "../categories/categoriesTypes";
import { IProfileFeedacksSliceInitialState } from "./profileFeedbacksTypes";
import { fetchMyFeedbacks } from "./profileFeedbacksThunk";

const initialState: IProfileFeedacksSliceInitialState = {
  myFeedbacks: null,
  meta: {
    limit: null,
    page: null,
    totalPages: null,
    totalResults: null,
  },
  status: StatusEnum.loading,
};
export const myFeedbacksSlice = createSlice({
  name: "myFeedbacks",
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
        state.meta = action.payload.meta;
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
