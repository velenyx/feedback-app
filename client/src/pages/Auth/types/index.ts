import { AuthTokens, Role } from "../../Register/types";

export type LoginType {
  email: string;
  password: string;
}

export type LoginResponseType = {
  user: User;
  tokens: AuthTokens;
};

export type User = {
  id: string;
  isEmailVerified: boolean
  email: string;
  name: string;
  role: Role;
};
