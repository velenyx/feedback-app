import { createAsyncThunk } from "@reduxjs/toolkit";
import { routePath } from "../../../../shared/config/routePath";
import { $api } from "../../../../shared/config/api";
import { CategoriesType } from "./categoriesTypes";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const { data } = await $api.get<CategoriesType[]>(routePath.CATEGORIES);
    return data;
  }
);
