export interface IFormReg {
  name: string;
  email: string;
  password: string;
}

export type IRegisterRequest = IFormReg;

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
