export interface IFormRegistration {
  name: string;
  email: string;
  password: string;
}

export type IRegisterRequest = IFormRegistration;

export type IRegisterResponse = {
  user: {
    id: string;
    email: string;
    name: string;
    role: string;
  };
  tokens: {
    access: {
      token: string;
      expires: string;
    };
    refresh: {
      token: string;
      expires: string;
    };
  };
};
