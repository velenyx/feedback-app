import axios from "axios";
import { BASE_URL } from "./url";

export const $api = axios.create({
  baseURL: BASE_URL,
});
