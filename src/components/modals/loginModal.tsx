import React, { useEffect, useState } from "react";
import CustomModal, { ModalProps } from ".";
import { useLoginMutation } from "../../apicomunication";
import useJwtHook from "../../hooks/jwtHook";
import { TextField, Button } from "@mui/material";
import { squareLogo } from "../../assets/logo";

interface Props extends Omit<ModalProps, "childen"> {}

const LoginModal = ({ close, isOpen }: Props) => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const { updateTokens } = useJwtHook();

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const [error, seterror] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    trigger({ username: state.username, password: state.password });
    // Add your login logic here using the state values
  };

  const [trigger, result] = useLoginMutation();

  useEffect(() => {
    const { isLoading, data } = result;
    setIsLoading(isLoading);
    if (data && data?.success) {
      updateTokens(data.data.accessToken, data.data.refreshToken);
      close();
    } else {
      seterror(data && data.error ? data?.error : null);
    }
  }, [result]);

  return (
    <CustomModal close={close} isOpen={isOpen}>
      <form
        onSubmit={handleSubmit}
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
              name="username"
              placeholder="Username"
              value={state.username}
              onChange={handleChange}
              variant="outlined" // Apply modern styling
              fullWidth // Take up full width of the parent container
              margin="normal" // Add some spacing
            />
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
            {error && <p>{error}</p>}
            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
          </>
        )}
      </form>
    </CustomModal>
  );
};

export default LoginModal;
