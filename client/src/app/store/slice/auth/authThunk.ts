import { createAsyncThunk } from "@reduxjs/toolkit";
import { $api } from "../../../../pages/Register/api";
import { routePath } from "../../../../shared/config/routePath";

type ParamsType = {
  email: string;
  password: string;
};

export const requestAuthentication = createAsyncThunk(
  "auth/requestAuthentication",
  async (userData: ParamsType) => {
    // const { date, country, device, os,ip } = params;

    const data = $api.post(routePath.AUTH, userData);

    return data;
  }
);
