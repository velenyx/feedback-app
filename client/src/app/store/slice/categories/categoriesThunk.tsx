import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CategoriesType } from "./categoriesTypes";
import { BASE_URL } from "../../../../shared/config/url";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const { data } = await axios<CategoriesType[]>({
      method: "GET",
      url: BASE_URL + "/categories",
    });
    return data;
  }
);
