import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { myFeedback } from "./profileTypes";
import { RootState } from "../..";
import { fetchMyFeedbacks } from "./profileThunk";

type initialState = {
  myFeedbacks: myFeedback[];
};

const initialState: initialState = {
  myFeedbacks: [],
};
export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMyFeedbacks.pending, (state) => {
        alert("pending");
      })
      .addCase(fetchMyFeedbacks.fulfilled, (state, action) => {
        alert("fullfiled");
        state.myFeedbacks = [...action.payload];
      })
      .addCase(fetchMyFeedbacks.rejected, (state) => {
        alert("rejected");
      });
  },
});
export const selectMyFeedbacks = (state: RootState) => state.profile;
debugger;
export default profileSlice.reducer;
