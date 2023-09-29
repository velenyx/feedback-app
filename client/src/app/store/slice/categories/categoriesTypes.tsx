export interface CategoriesSlice {
  categories: CategoriesType[] | null;
  status: StatusEnum;
  category: string | null;
}

export interface CategoriesType {
  id: string;
  category: string;
}
export enum StatusEnum {
  loading = 'loading',
  success = 'success',
  rejected = 'rejected',
}
