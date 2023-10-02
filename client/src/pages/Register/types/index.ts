import type { User } from '../../../app/store/slice/auth/authTypes';

export interface RegisterType {
  name: string;
  email: string;
  password: string;
}

export interface RegisterResponseType {
  user: User;
  tokens: AuthTokens;
}

export interface AuthTokens {
  access: Token;
  refresh: Token;
}
export interface Token {
  token: string;
  expires: string;
}

export interface Error {
  code: number;
  message: string;
}

export type RefreshTokenResponseType = AuthTokens;
