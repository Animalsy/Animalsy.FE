import React, { ButtonHTMLAttributes } from "react";
import { ButtonComponent } from "./Buttons.styles";
import { CiSearch } from "react-icons/ci";

export type ButtonType =
  | "search"
  | "menu"
  | "none"
  | "outlined"
  | "outlined_dark";

export const Button = ({
  children,
  backgroundcolor,
  buttontype = "none",
  onClick,
  style,
  textcolor,
  disabled,
}: {
  children: React.ReactNode;
  buttontype?: ButtonType;
  backgroundcolor?: string;
  textcolor?: string;
  onClick?: ButtonHTMLAttributes<{}>["onClick"];
  style?: ButtonHTMLAttributes<{}>["style"];
  disabled?: boolean;
}) => {
  const RenderIcon = ({ type }: { type: ButtonType }) => {
    switch (type) {
      case "search":
        return <CiSearch fontWeight={900} style={{ marginRight: ".2rem" }} />;

      default:
        return <></>;
    }
  };
  return (
    <ButtonComponent
      disabled={disabled}
      backgroundcolor={backgroundcolor}
      textcolor={textcolor}
      style={{ ...style }}
      buttontype={buttontype}
      onClick={
        onClick
          ? onClick
          : () => {
              console.log("handle onClick");
            }
      }
    >
      <RenderIcon type={buttontype} />
      <p>{children}</p>
    </ButtonComponent>
  );
};
