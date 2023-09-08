export interface IAuthSlice {
  user: UserType | null;
}
export enum RoleEnum {
  admin = "admin",
  user = "user",
}
export type UserType = {
  id: string;
  email: string;
  isEmailVerified: boolean;
  name: string;
  role: RoleEnum;
};
