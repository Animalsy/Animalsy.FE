import * as yup from "yup";

export const loginFormSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

export type ILoginForm = yup.InferType<typeof loginFormSchema>;
export type ILoginFormErrors = Partial<Record<keyof ILoginForm, string>>;
