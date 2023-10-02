import { AuthTokens } from "../../../../pages/Register/types";

export interface IAuthSlice {
  user: User | null;
}
export type User = {
  id: string;
  isEmailVerified: boolean;
  email: string;
  name: string;
  role: RoleEnum;
};
export type Error = {
  state: boolean;
  message: string;
};
export type LoginType = {
  email: string;
  password: string;
};
export type LoginResponseType = {
  user: User;
  tokens: AuthTokens;
};
export enum RoleEnum {
  admin = "admin",
  user = "user",
}
