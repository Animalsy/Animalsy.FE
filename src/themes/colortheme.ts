const LightColorTheme = {
  primaryDark: "#203e59",
  primary: "#5C93C4",
  primaryLight: "#aec9e1",
  secondaryDark: "#a86f3c",
  secondary: "#c48d5b",
  secondaryLight: "#dfc2a7",
  accent: "#FF7D3C",
  danger: "#FF3C3C",
  success: "#3CFF3C",
  warning: "#FFD13C",
  info: "#3CC1FF",
  background: "#f8fafc",
  text: "#ffffff",
  textOpposite: "#000000",
};
const DarkColorTheme = {
  primaryDark: "#001e2f",
  primary: "#264a6d",
  primaryLight: "#406994",
  secondaryDark: "#8c5e36",
  secondary: "#b17d57",
  secondaryLight: "#d5a682",
  accent: "#FF7D3C",
  danger: "#FF3C3C",
  success: "#3CFF3C",
  warning: "#FFD13C",
  info: "#3CC1FF",
  background: "#001e2f",
  text: "#F5F5F5",
  textOpposite: "#F5F5F5",
};

export type IColorTheme = typeof DarkColorTheme;

export default { DarkColorTheme, LightColorTheme };
