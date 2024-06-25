import "./App.css";
import { RouterProvider } from "react-router-dom";
import rootRouter from "./navigation/rootRouter";

import { AppThemeProvider } from "./themes/themeProvider";

import { useEffect, useState } from "react";

import useJwtHook from "./hooks/jwtHook";
import LoginModal from "./components/modals/loginModal";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { setIsModalOpen } from "./redux/appsetup";

const App = () => {
  const { isLoginModalOpen } = useAppSelector((state) => state.appsetup);

  const { accessToken, wasFetchingToken } = useJwtHook();

  useEffect(() => {
    if (!accessToken && wasFetchingToken) {
      dispatch(setIsModalOpen(false));
    } else {
      dispatch(setIsModalOpen(false));
    }
  }, [wasFetchingToken, accessToken]);

  const dispatch = useAppDispatch();

  return (
    <AppThemeProvider>
      <LoginModal
        isOpen={isLoginModalOpen}
        close={() => {
          dispatch(setIsModalOpen(false));
        }}
      />
      <div style={{ minHeight: "100dvh" }}>
        <RouterProvider router={rootRouter} />
      </div>
    </AppThemeProvider>
  );
};

export default App;
