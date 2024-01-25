import { useEffect, useState } from "react";
export const useAppTheme = () => {
  const [theme, setTheme] = useState<string>("light");
  const [textSize, setTextSize] = useState<string>("large");

  const setMode = (mode: string) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  const toggleTextSize = (size: "small" | "medium" | "large") => {
    window.localStorage.setItem("textTheme", size);
    setTextSize(size);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    const localTextTheme = window.localStorage.getItem("textTheme");
    localTheme && setTheme(localTheme);
    localTextTheme && setTextSize(localTextTheme);
  }, []);
  return { theme, themeToggler, toggleTextSize, textSize };
};
