import { useEffect, useState } from "react";
import CustomModal, { ModalProps } from ".";
import { useLoginMutation } from "../../apicomunication";
import useJwtHook from "../../hooks/jwtHook";
import { LoginForm } from "./forms/loginForm";
import RegisterForm from "./forms/RegisterForm";
import {
  ILoginForm,
  ILoginFormErrors,
  loginFormSchema,
} from "./forms/loginForm.validation";
import api from "../../axios";

interface Props extends Omit<ModalProps, "childen"> {}

const LoginModal = ({ close, isOpen }: Props) => {
  const [state, setState] = useState<ILoginForm>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<ILoginFormErrors>({});
  const { updateTokenAndUserId } = useJwtHook();

  const [isLoading, setIsLoading] = useState(false);

  const [error, seterror] = useState<string | null>(null);
  const [trigger, result] = useLoginMutation();

  const handleSubmit = () => {
    // validate the form with the schema
    // if it's invalid, set the errors
    // otherwise, call the login mutation

    loginFormSchema
      .validate(state, { abortEarly: false })
      .then(() => {
        setErrors({});
        trigger({ email: state.email, password: state.password });
      })
      .catch((err) => {
        const newErrors: ILoginFormErrors = {};
        err.inner.forEach((error: any) => {
          newErrors[error.path as keyof ILoginForm] = error.message;
        });
        setErrors(newErrors);
      });

    // Add your login logic here using the state values
  };

  useEffect(() => {
    const { error } = result;
    console.error(error);
    const { isLoading, data } = result;
    setIsLoading(isLoading);

    if (data && data?.isSuccess) {
      updateTokenAndUserId(data.result.token, data.result.userId);
      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${data.result.token}`;
      close();
    } else {
      seterror("login failed, please try again");
    }
  }, [result]);
  const [isLoginForm, setIsLoginForm] = useState(true);

  return (
    <CustomModal close={close} isOpen={isOpen}>
      {isLoginForm ? (
        <LoginForm
          errors={errors}
          error={error}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
          setState={setState}
          state={state}
          setIsLoginForm={setIsLoginForm}
        />
      ) : (
        <RegisterForm setIsLoginForm={setIsLoginForm} />
      )}
    </CustomModal>
  );
};

export default LoginModal;
