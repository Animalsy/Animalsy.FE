import { Button, TextField } from "@mui/material";
import { squareLogo } from "../../../assets/logo";
import TextComponents from "../../TextComponents";
import { useTheme } from "styled-components";
import { ILoginForm } from "./loginForm.validation";

export const LoginForm = ({
  errors,
  handleSubmit,
  isLoading,
  setState,
  state,
  error,
  setIsLoginForm,
}: {
  errors: Partial<Record<"username" | "password", string>>;
  handleSubmit: () => void;
  isLoading: boolean;
  state: ILoginForm;
  setState: React.Dispatch<React.SetStateAction<ILoginForm>>;
  error: string | null;
  setIsLoginForm: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  const theme = useTheme();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: ".4rem",
      }}
    >
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <img src={squareLogo} alt="logo" />
          <TextField
            type="text"
            name="email"
            placeholder="Email"
            value={state.email}
            onChange={handleChange}
            variant="outlined" // Apply modern styling
            fullWidth // Take up full width of the parent container
            margin="normal" // Add some spacing
          />
          {errors.username && (
            <TextComponents.Body size={0.3} color={theme.colors.danger}>
              {errors.username}
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
          {error && (
            <TextComponents.Body size={0.5} color={theme.colors.danger}>
              {error}
            </TextComponents.Body>
          )}
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
          <TextComponents.Body
            onClick={() => setIsLoginForm(false)}
            size={0.5}
            color={theme.colors.accent}
            style={{ cursor: "pointer", userSelect: "none" }}
          >
            Do not have account? Sign up now.
          </TextComponents.Body>
        </>
      )}
    </form>
  );
};
