export interface IFormRegistration {
  name: string;
  email: string;
  password: string;
}
export type IRegisterRequest = IFormRegistration;

export type IRegisterResponse = {
  user: User;
  tokens: AuthTokens;
};

export type User = {
  id: string;
  email: string;
  name: string;
  role: Role;
};
export type AuthTokens = {
  access: Token;
  refresh: Token;
};
export type Token = {
  token: string;
  expires: string;
};
export enum Role {
  admin = "admin",
  user = "user",
}
export type Error = {
  code: number;
  message: string;
};
