// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import api from "../axios";
import {
  ILoginDTO,
  IRegisterDTO,
  LoginResponse,
  RegisterResponse,
} from "./dtos/auth";

export const rtkapi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: api.defaults.baseURL + "/auth/" }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, ILoginDTO>({
      query: (credentials) => ({
        url: "login",
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation<RegisterResponse, IRegisterDTO>({
      query: (userData) => ({
        url: "register",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

// make comment to describe the function
// createMutation is a function that takes a builder, method, and url and returns a mutation
/**
 *
 */

export const { useLoginMutation, useRegisterMutation } = rtkapi;
