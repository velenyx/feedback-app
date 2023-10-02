import { createAsyncThunk } from '@reduxjs/toolkit';

import type { CategoriesType } from './categoriesTypes';

import { $api } from '../../../../shared/config/api';
import { routePath } from '../../../../shared/config/routePath';

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
  const { data } = await $api.get<CategoriesType[]>(routePath.CATEGORIES);

  return data;
});
