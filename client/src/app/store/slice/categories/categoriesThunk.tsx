import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CategoriesType } from "./categoriesTypes";

// const BASE_URL = "https://feedback-app-backend-wzfj.onrender.com/v1";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const { data } = await axios<CategoriesType[]>({
      method: "GET",
      // url: BASE_URL + "/categories",
      url: "https://297c2cda3254946b.mokky.dev/categories",
    });
    return data;
  }
);
