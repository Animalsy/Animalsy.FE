import { ThemeProvider } from "styled-components";
import { ColorTheme, ShadowTheme, SizeTheme } from ".";
import React, { useEffect, useState } from "react";
import { useAppTheme } from "../hooks/themeHook";
import AppSizes from "../static/sizes";
import { GlobalStyle } from "./globalStyle";

export const AppThemeProvider = (props: { children: React.ReactNode }) => {
  const { theme, textSize, toggleTextSize, setThemeVariant } = useAppTheme();
  const [testSizeTheme, setTestSizeTheme] = useState(SizeTheme.textMedium);
  const themeMode =
    theme === "light" ? ColorTheme.LightColorTheme : ColorTheme.DarkColorTheme;
  const [colorTheme, setColorTheme] = useState(themeMode);

  useEffect(() => {
    window.addEventListener("resize", () => {
      const size = window.innerWidth;
      if (size < AppSizes.breakpoints.small) {
        toggleTextSize("small");
      } else if (size < AppSizes.breakpoints.large) {
        toggleTextSize("medium");
      } else {
        toggleTextSize("large");
      }
    });

    return () => window.removeEventListener("resize", () => {});
  }, []);
  useEffect(() => {
    switch (textSize) {
      case "small":
        setTestSizeTheme(SizeTheme.textSmall);
        break;
      case "medium":
        setTestSizeTheme(SizeTheme.textMedium);
        break;
      case "large":
        setTestSizeTheme(SizeTheme.textLarge);
        break;

      default:
        break;
    }
  }, [textSize]);

  useEffect(() => {
    const textSizeMode =
      textSize === "small"
        ? SizeTheme.textSmall
        : textSize === "medium"
        ? SizeTheme.textMedium
        : SizeTheme.textLarge;
    setTestSizeTheme(textSizeMode);
  }, []);

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeMq.addEventListener("change", (e) => {
      if (e.matches) {
        setColorTheme(ColorTheme.DarkColorTheme);
        setThemeVariant("dark");
      } else {
        setColorTheme(ColorTheme.LightColorTheme);
        setThemeVariant("light");
      }
    });

    return () => {
      darkThemeMq.removeEventListener("change", () => {});
    };
  }, []);

  return (
    <ThemeProvider theme={{ colors: colorTheme }}>
      <ThemeProvider theme={SizeTheme.icons}>
        <ThemeProvider theme={{ textSize: testSizeTheme }}>
          <ThemeProvider theme={{ shadow: ShadowTheme }}>
            <GlobalStyle />
            {props.children}
          </ThemeProvider>
        </ThemeProvider>
      </ThemeProvider>
    </ThemeProvider>
  );
};
