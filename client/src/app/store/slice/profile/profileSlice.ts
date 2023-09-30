import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../..";
import { myFeedback } from "./profileTypes";
import { fetchMyFeedbacks } from "./profileThunk";

type initialState = {
  myFeedbacks: myFeedback[];
  meta: {
    page: number;
    limit: number;
    totalPages: number;
    totalResults: number;
  };
};

const initialState: initialState = {
  myFeedbacks: [],
  meta: {
    page: 0,
    limit: 5,
    totalPages: 0,
    totalResults: 0,
  },
};
export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMyFeedbacks.pending, () => {
        alert("pending");
      })
      .addCase(fetchMyFeedbacks.fulfilled, (state, action) => {
        alert("fullfiled");
        state.myFeedbacks = [...state.myFeedbacks, ...action.payload.feedbacks];
        state.meta = { ...action.payload.meta };
      })
      .addCase(fetchMyFeedbacks.rejected, () => {
        alert("rejected");
      });
  },
});
export const selectMyFeedbacks = (state: RootState) => state.profile;
export default profileSlice.reducer;
