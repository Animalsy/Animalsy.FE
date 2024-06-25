// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import api from "../axios";
import {
  IRegisterDTO,
  LoginResponse,
  RegisterResponse,
} from "./dtos/auth";
import { Action } from "@reduxjs/toolkit";
import { REHYDRATE } from "redux-persist";
import { RootState } from "../redux";
import { ILoginForm } from "../components/modals/forms/loginForm.validation";

function isHydrateAction(action: Action): action is Action<typeof REHYDRATE> & {
  key: string;
  payload: RootState;
  err: unknown;
} {
  return action.type === REHYDRATE;
}

export const rtkapi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: api.defaults.baseURL }),
  endpoints: (builder) => ({

    login: builder.mutation<LoginResponse, ILoginForm>({
      query: (credentials) => ({
        url: "/Auth/Login",
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
  extractRehydrationInfo(action, { }): any {
    if (isHydrateAction(action)) {
      // when persisting the api reducer
      if (action.key === "key used with redux-persist") {
        return action.payload;
      }

      // When persisting the root reducer
      return action.payload[rtkapi.reducerPath];
    }
  },
});

// make comment to describe the function
// createMutation is a function that takes a builder, method, and url and returns a mutation
/**
 *
 */

export const { useLoginMutation, useRegisterMutation } = rtkapi;
