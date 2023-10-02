import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../..";
import { fetchCategories } from "./categoriesThunk";
import { CategoriesSlice } from "./categoriesTypes";
import { StatusEnum } from "../../../../@types/global_types";

const initialState: CategoriesSlice = {
  categories: null,
  status: StatusEnum.loading,
  category: null,
};
export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<string | null>) {
      state.category = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = StatusEnum.loading;
        state.categories = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = StatusEnum.success;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.status = StatusEnum.rejected;
        state.categories = null;
      });
  },
});
export const { setCategory } = categoriesSlice.actions;
export const selectCategories = (state: RootState) => state.categories;
export default categoriesSlice.reducer;
