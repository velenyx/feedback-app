import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://feedback-app-backend-wzfj.onrender.com/v1";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const { data } = await axios({
      method: "GET",
      url: BASE_URL + "/categories",
    });
    return data;
  }
);
