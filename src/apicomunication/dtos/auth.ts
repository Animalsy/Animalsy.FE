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
  username: string;
  password: string;
}
export interface CustomResponse {
  success: boolean;
  message: string;
  error?: string;
}
export interface LoginResponse
  extends AxiosResponse<{
      accessToken: string;
      refreshToken: string;
    }>,
    CustomResponse {}

export interface RegisterResponse
  extends AxiosResponse<RegisterResponse>,
    CustomResponse {}
