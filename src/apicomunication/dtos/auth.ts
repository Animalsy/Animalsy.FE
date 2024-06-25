import { AxiosResponse } from "axios";

export type User = Omit<IRegisterDTO, "password">;
export interface IRegisterDTO {
  username: string;
  password: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  phone: string;
  vendorId?: string;
  pets: string[];
  appointments: string[];
}

export interface ILoginDTO {
  email: string;
  password: string;
}
export interface CustomResponse {
  isSuccess: boolean
  message: string
}
export interface LoginResponse {
  isSuccess: true,
  result: {
    userId: string,
    token: string,
  },
  message: "User logged in"
}

export interface RegisterResponse
  extends AxiosResponse<RegisterResponse>,
  CustomResponse { }
