import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCategories } from "./categoriesThunk";
import { CategoriesSlice, StatusEnum } from "./categoriesTypes";
import { RootState } from "../..";

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
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = StatusEnum.access;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.status = StatusEnum.rejected;
      });
  },
});
export const { setCategory } = categoriesSlice.actions;
export const selectCategories = (state: RootState) => state.categories;
export default categoriesSlice.reducer;
