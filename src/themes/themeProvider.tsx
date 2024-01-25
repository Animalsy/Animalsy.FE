import { ThemeProvider } from "styled-components";
import { ColorTheme, ShadowTheme, SizeTheme } from ".";
import React, { useEffect, useState } from "react";
import { useAppTheme } from "../hooks/themeHook";
import AppSizes from "../static/sizes";

export const AppThemeProvider = (props: { children: React.ReactNode }) => {
  const { theme, textSize, toggleTextSize } = useAppTheme();
  const [testSizeTheme, setTestSizeTheme] = useState(SizeTheme.textMedium);

  useEffect(() => {
    window.addEventListener("resize", (event) => {
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

  const themeMode =
    theme === "light" ? ColorTheme.LightColorTheme : ColorTheme.DarkColorTheme;
  useEffect(() => {
    const textSizeMode =
      textSize === "small"
        ? SizeTheme.textSmall
        : textSize === "medium"
        ? SizeTheme.textMedium
        : SizeTheme.textLarge;
    setTestSizeTheme(textSizeMode);
  }, []);

  return (
    <ThemeProvider theme={{ colors: themeMode }}>
      <ThemeProvider theme={SizeTheme.icons}>
        <ThemeProvider theme={{ textSize: testSizeTheme }}>
          <ThemeProvider theme={{ shadow: ShadowTheme }}>
            {props.children}
          </ThemeProvider>
        </ThemeProvider>
      </ThemeProvider>
    </ThemeProvider>
  );
};
