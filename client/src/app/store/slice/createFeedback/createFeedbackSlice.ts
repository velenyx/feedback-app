import { createSlice } from "@reduxjs/toolkit";

const initialState: {} = {
  user: null,
};
export const createFeedbackSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    createFeedbcak(state, action) {
      alert("fd");
    },
  },
});
export const { createFeedbcak } = createFeedbackSlice.actions;
// export const selectUser = (state: RootState) => state.auth.user;
export default createFeedbackSlice.reducer;
