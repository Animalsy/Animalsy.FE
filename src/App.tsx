import "./App.css";
import { RouterProvider } from "react-router-dom";
import rootRouter from "./navigation/rootRouter";

import { AppThemeProvider } from "./themes/themeProvider";

import { useEffect } from "react";

import useJwtHook from "./hooks/jwtHook";
import LoginModal from "./components/modals/loginModal";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { setIsLoggedIn, setIsModalOpen } from "./redux/appsetup";

const App = () => {
  const { isLoginModalOpen } = useAppSelector((state) => state.appsetup);

  const { accessToken, wasFetchingToken } = useJwtHook();

  useEffect(() => {
    dispatch(setIsLoggedIn(false));
    if (!accessToken && wasFetchingToken) {
      dispatch(setIsModalOpen(true));
      dispatch(setIsLoggedIn(false));
    } else if (accessToken && wasFetchingToken) {
      dispatch(setIsModalOpen(false));
      dispatch(setIsLoggedIn(true));
    } else {
      dispatch(setIsModalOpen(true));
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
