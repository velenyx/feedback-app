export type CategoriesSlice = {
  categories: CategoriesType | null;
  status: StatusEnum;
};

export type CategoriesType = {
  id: string;
  category: string;
};
export enum StatusEnum {
  loading = "loading",
  access = "access",
  rejected = "rejected",
}
