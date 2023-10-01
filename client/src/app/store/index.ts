import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import authSlice from "./slice/auth/authSlice";
import categoriesSlice from "./slice/categories/categoriesSlice";
import myFeedbacksSlice from "./slice/myFeedbacks/myFeedbacksSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    categories: categoriesSlice,
    myFeedbacks: myFeedbacksSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
