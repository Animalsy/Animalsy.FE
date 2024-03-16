import "./App.css";
import { RouterProvider } from "react-router-dom";
import rootRouter from "./navigation/rootRouter";

import { AppThemeProvider } from "./themes/themeProvider";

import { useEffect, useState } from "react";

import useJwtHook from "./hooks/jwtHook";
import LoginModal from "./components/modals/loginModal";

const App = () => {
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);

  const { accessToken, wasFetchingTokens } = useJwtHook();

  useEffect(() => {
    if (!accessToken && wasFetchingTokens) {
      setIsLoginModalVisible(true);
    } else {
      setIsLoginModalVisible(false);
    }
  }, [wasFetchingTokens, accessToken]);

  return (
    <AppThemeProvider>
      <LoginModal
        isOpen={isLoginModalVisible}
        close={() => {
          setIsLoginModalVisible(false);
        }}
      />
      <div style={{ minHeight: "100dvh" }}>
        <RouterProvider router={rootRouter} />
      </div>
    </AppThemeProvider>
  );
};

export default App;
