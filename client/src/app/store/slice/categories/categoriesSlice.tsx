import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "./categoriesThunk";
import { CategoriesSlice, StatusEnum } from "./categoriesTypes";



const initialState: CategoriesSlice = {
categories: null,
status: StatusEnum.loading
};
export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
  
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, () => {
      })
      .addCase(fetchCategories.fulfilled, () => {
      })
      .addCase(fetchCategories.rejected, () => {
      });
  },
});
// export const {} = categoriesSlice.actions;
// export const selectFeedPosts = (state: RootState) => state.newsfeed.items;
export default categoriesSlice.reducer;
