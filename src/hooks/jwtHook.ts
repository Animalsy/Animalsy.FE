import { useState, useEffect } from "react";


const useJwtHook = () => {
  const [accessToken, setAccessToken] = useState<string | null>();
  const [userId, setUserId] = useState<string | null>(); // Add userId state
  const [wasFetchingToken, setWasFetchingToken] = useState(false);

  useEffect(() => {
    // Load token and userId from session storage on component mount
    Promise.all([
      localStorage.getItem("accessToken"),
      localStorage.getItem("userId"),
    ]).then(([token, id]) => {
      if (token) {
        setAccessToken(token);
      } else {
        setAccessToken(null);
        setWasFetchingToken(false)
      }
      if (id) {
        setUserId(id);
      } else {
        setUserId(null);
      }
    });
    setWasFetchingToken(true);
  }, []);

  const saveTokenAndUserIdToStorage = (token: string, id: string) => {
    // Save token and userId to session storage
    localStorage.setItem("accessToken", token);
    localStorage.setItem("userId", id);
  };

  const removeTokenAndUserIdFromStorage = () => {
    // Remove token and userId from session storage
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
  };

  const updateTokenAndUserId = (newToken: string, newId: string) => {
    setAccessToken(newToken);
    setUserId(newId);
    saveTokenAndUserIdToStorage(newToken, newId);
  };

  return {
    accessToken,
    userId, // Include userId in the returned object
    wasFetchingToken,
    updateTokenAndUserId, // Update the function name
    removeTokenAndUserIdFromStorage, // Update the function name
  };
};

export default useJwtHook;
