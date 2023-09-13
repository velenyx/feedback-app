import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchCategories = createAsyncThunk(
  "categories/fetchFeedPosts",
  async () => {

    const { data } = await axios({
      method: "GER",
      url: "",
    });
    return data;
  }
);
