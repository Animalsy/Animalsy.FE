import { Button, TextField } from "@mui/material";
import { useState } from "react";
import TextComponents from "../../TextComponents";
import { useTheme } from "styled-components";
import { squareLogo } from "../../../assets/logo";
import {
  ErrorsRetisterFormProps,
  RegisterFormProps,
  RegisterFormSchema,
} from "./RegisterForm.validation";

const RegisterForm = ({
  setIsLoginForm,
}: {
  setIsLoginForm: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [state, setState] = useState<RegisterFormProps>(initialState);
  const [errors, setErrors] = useState<ErrorsRetisterFormProps>({
    emailAddress: "",
    password: "",
    name: "",
    lastName: "",
    city: "",
    street: "",
    building: "",
    flat: "",
    postalCode: "",
    phoneNumber: "",
  });
  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await RegisterFormSchema.validate(state, { abortEarly: false });
      // Add your register logic here using the state values
    } catch (error: any) {
      const errors: ErrorsRetisterFormProps = {};
      error.inner.forEach((error: any) => {
        errors[error.path as keyof RegisterFormProps] = error.message;
      });
      console.log(errors);
      setErrors(errors);
    }
  };

  const theme = useTheme();
  return (
    <div
      style={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <img
        src={squareLogo}
        alt="logo"
        style={{
          aspectRatio: 1,
          width: "20%",
          marginBottom: "2rem",
          marginTop: "2rem",
        }}
      />
      <form
        onSubmit={onSubmit}
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "5rem 0rem",
        }}
      >
        <TextField
          type="text"
          name="name"
          placeholder="Name"
          value={state.name}
          onChange={handleChange}
          variant="outlined" // Apply modern styling
          fullWidth // Take up full width of the parent container
          margin="normal" // Add some spacing
        />
        {errors.name && (
          <TextComponents.Body size={0.3} color={theme.colors.danger}>
            {errors.name}
          </TextComponents.Body>
        )}
        <TextField
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={state.lastName}
          onChange={handleChange}
          variant="outlined" // Apply modern styling
          fullWidth // Take up full width of the parent container
          margin="normal" // Add some spacing
        />
        {errors.lastName && (
          <TextComponents.Body size={0.3} color={theme.colors.danger}>
            {errors.lastName}
          </TextComponents.Body>
        )}
        <TextField
          type="text"
          name="emailAddress"
          placeholder="Email"
          value={state.emailAddress}
          onChange={handleChange}
          variant="outlined" // Apply modern styling
          fullWidth // Take up full width of the parent container
          margin="normal" // Add some spacing
        />
        {errors.emailAddress && (
          <TextComponents.Body size={0.3} color={theme.colors.danger}>
            {errors.emailAddress}
          </TextComponents.Body>
        )}
        <TextField
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
          variant="outlined" // Apply modern styling
          fullWidth // Take up full width of the parent container
          margin="normal" // Add some spacing
        />
        {errors.password && (
          <TextComponents.Body size={0.3} color={theme.colors.danger}>
            {errors.password}
          </TextComponents.Body>
        )}
        <TextField
          type="text"
          name="city"
          placeholder="City"
          value={state.city}
          onChange={handleChange}
          variant="outlined" // Apply modern styling
          fullWidth // Take up full width of the parent container
          margin="normal" // Add some spacing
        />
        {errors.city && (
          <TextComponents.Body size={0.3} color={theme.colors.danger}>
            {errors.city}
          </TextComponents.Body>
        )}
        <TextField
          type="text"
          name="street"
          placeholder="Street"
          value={state.street}
          onChange={handleChange}
          variant="outlined" // Apply modern styling
          fullWidth // Take up full width of the parent container
          margin="normal" // Add some spacing
        />
        {errors.street && (
          <TextComponents.Body size={0.3} color={theme.colors.danger}>
            {errors.street}
          </TextComponents.Body>
        )}
        <TextField
          type="text"
          name="building"
          placeholder="Building"
          value={state.building}
          onChange={handleChange}
          variant="outlined" // Apply modern styling
          fullWidth // Take up full width of the parent container
          margin="normal" // Add some spacing
        />
        {errors.building && (
          <TextComponents.Body size={0.3} color={theme.colors.danger}>
            {errors.building}
          </TextComponents.Body>
        )}
        <TextField
          type="text"
          name="flat"
          placeholder="Flat"
          value={state.flat}
          onChange={handleChange}
          variant="outlined" // Apply modern styling
          fullWidth // Take up full width of the parent container
          margin="normal" // Add some spacing
        />
        {errors.flat && (
          <TextComponents.Body size={0.3} color={theme.colors.danger}>
            {errors.flat}
          </TextComponents.Body>
        )}
        <TextField
          type="text"
          name="postalCode"
          placeholder="Postal Code"
          value={state.postalCode}
          onChange={handleChange}
          variant="outlined" // Apply modern styling
          fullWidth // Take up full width of the parent container
          margin="normal" // Add some spacing
        />
        {errors.postalCode && (
          <TextComponents.Body size={0.3} color={theme.colors.danger}>
            {errors.postalCode}
          </TextComponents.Body>
        )}
        <TextField
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={state.phoneNumber}
          onChange={handleChange}
          variant="outlined" // Apply modern styling
          fullWidth // Take up full width of the parent container
          margin="normal" // Add some spacing
        />
        {errors.phoneNumber && (
          <TextComponents.Body size={0.3} color={theme.colors.danger}>
            {errors.phoneNumber}
          </TextComponents.Body>
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ margin: "2rem 0" }}
        >
          Register
        </Button>
        <TextComponents.Body
          onClick={() => setIsLoginForm(true)}
          size={0.5}
          color={theme.colors.accent}
          style={{ cursor: "pointer", userSelect: "none" }}
        >
          Do not have account? Sign up now.
        </TextComponents.Body>
      </form>
    </div>
  );
};

export default RegisterForm;

export const initialState: RegisterFormProps = {
  emailAddress: "",
  password: "",
  name: "",
  lastName: "",
  city: "",
  street: "",
  building: "",
  flat: "",
  postalCode: "",
  phoneNumber: "",
};
