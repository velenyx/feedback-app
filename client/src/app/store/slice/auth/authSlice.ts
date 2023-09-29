import { createSlice } from '@reduxjs/toolkit';

import type { IAuthSlice } from './authTypes';

import type { RootState } from '../..';

const initialState: IAuthSlice = {
  user: null,
};

export const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    removeUser(state) {
      state.user = null;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});
export const { removeUser, setUser } = authSlice.actions;
export const selectUser = (state: RootState) => state.auth.user;
export default authSlice.reducer;
