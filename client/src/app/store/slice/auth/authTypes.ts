import type { AuthTokens } from '../../../../pages/Register/types';

export interface IAuthSlice {
  user: User | null;
}

export interface User {
  id: string;
  isEmailVerified: boolean;
  email: string;
  name: string;
  role: RoleEnum;
}

export interface Error {
  state: boolean;
  message: string;
}
export enum RoleEnum {
  admin = 'admin',
  user = 'user',
}

export interface LoginType {
  email: string;
  password: string;
}

export interface LoginResponseType {
  user: User;
  tokens: AuthTokens;
}
