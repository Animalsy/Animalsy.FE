import { useState, useEffect } from "react";
import localStorage from "redux-persist/es/storage";

const useJwtHook = () => {
  const [accessToken, setAccessToken] = useState<string | null>();
  const [refreshToken, setRefreshToken] = useState<string | null>();
  const [wasFetchingTokens, setWasFetchingTokens] = useState(false);

  useEffect(() => {
    // Load tokens from session storage on component mount
    localStorage.getItem("accessToken").then((res) => {
      if (res) {
        setAccessToken(res);
      } else {
        setAccessToken(null);
      }
    });

    localStorage.getItem("refreshToken").then((res) => {
      if (res) {
        setRefreshToken(res);
      } else {
        setRefreshToken(null);
      }
    });
    setWasFetchingTokens(true);
  }, []);

  const saveTokensToStorage = (accessToken: string, refreshToken: string) => {
    // Save tokens to session storage
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
  };

  const removeTokensFromStorage = () => {
    // Remove tokens from session storage
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };

  const updateTokens = (newAccessToken: string, newRefreshToken: string) => {
    setAccessToken(newAccessToken);
    setRefreshToken(newRefreshToken);
    saveTokensToStorage(newAccessToken, newRefreshToken);
  };

  return {
    accessToken,
    refreshToken,
    wasFetchingTokens,
    updateTokens,
    removeTokensFromStorage,
  };
};

export default useJwtHook;
