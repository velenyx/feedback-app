import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { CategoriesSlice } from './categoriesTypes';
import { StatusEnum } from './categoriesTypes';

import type { RootState } from '../..';

import { fetchCategories } from './categoriesThunk';

const initialState: CategoriesSlice = {
  categories: null,
  category: null,
  status: StatusEnum.loading,
};

export const categoriesSlice = createSlice({
  extraReducers: builder => {
    builder
      .addCase(fetchCategories.pending, state => {
        state.status = StatusEnum.loading;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = StatusEnum.success;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, state => {
        state.status = StatusEnum.rejected;
      });
  },
  initialState,
  name: 'categories',

  reducers: {
    setCategory(state, action: PayloadAction<string | null>) {
      state.category = action.payload;
    },
  },
});
export const { setCategory } = categoriesSlice.actions;
export const selectCategories = (state: RootState) => state.categories;
export default categoriesSlice.reducer;
