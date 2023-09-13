import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import categoriesSlice from "./slice/categories/categoriesSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
