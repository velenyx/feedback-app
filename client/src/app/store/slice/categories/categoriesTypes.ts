import { StatusEnum } from "../../../../@types/global_types";

export type CategoriesSlice = {
  categories: CategoriesType[] | null;
  status: StatusEnum;
  category: string | null;
};
export type CategoriesType = {
  id: string;
  category: string;
};
