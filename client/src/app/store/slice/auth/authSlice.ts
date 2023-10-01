import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthSlice, User } from "./authTypes";
import { RootState } from "../..";

const initialState: IAuthSlice = {
  user: null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    removeUser(state) {
      state.user = null;
    },
  },
});
export const { setUser, removeUser } = authSlice.actions;
export const selectUser = (state: RootState) => state.auth.user;
export default authSlice.reducer;
