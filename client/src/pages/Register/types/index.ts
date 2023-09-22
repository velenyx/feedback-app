import { User } from "../../../app/store/slice/auth/authTypes";

export type RegisterType = {
  name: string;
  email: string;
  password: string;
};

export type RegisterResponseType = {
  user: User;
  tokens: AuthTokens;
}

export type AuthTokens = {
  access: Token;
  refresh: Token;
};
export type Token = {
  token: string;
  expires: string;
};

export type Error = {
  code: number;
  message: string;
};

export type RefreshTokenResponseType = AuthTokens