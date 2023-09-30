import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import authSlice from "./slice/auth/authSlice";
import categoriesSlice from "./slice/categories/categoriesSlice";
import profileSlice from "./slice/profile/profileSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    categories: categoriesSlice,
    profile: profileSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
