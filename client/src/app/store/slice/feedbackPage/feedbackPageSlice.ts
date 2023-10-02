import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../..";
import { FeedbackPageSlice } from "./feedbackPageTypes";
import { fetchFeedbackById } from "./feedbackPageThunk";
import { StatusEnum } from "../../../../@types/global_types";

const initialState: FeedbackPageSlice = {
  feedback: null,
  status: StatusEnum.loading,
};
export const feedbackPageSlice = createSlice({
  name: "feedbackPage",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchFeedbackById.pending, (state) => {
        state.status = StatusEnum.loading;
        state.feedback = null;
      })
      .addCase(fetchFeedbackById.fulfilled, (state, action) => {
        state.status = StatusEnum.rejected;
        state.feedback = action.payload;
      })
      .addCase(fetchFeedbackById.rejected, (state) => {
        state.status = StatusEnum.rejected;
        state.feedback = null;
      });
  },
});
// export const {} = feedbackPageSlice.actions;
export const selectFeedbackPage = (state: RootState) => state.feedbackPage;
export default feedbackPageSlice.reducer;
