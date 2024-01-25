import React from "react";
import { BackgroundContainer } from "./componentBackground.styled";

const ComponentBackground = (props: { children: React.ReactNode }) => {
  return <BackgroundContainer>{props.children}</BackgroundContainer>;
};

export default ComponentBackground;
