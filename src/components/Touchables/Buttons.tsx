import React, { ButtonHTMLAttributes } from "react";
import { ButtonComponent } from "./Buttons.styles";
import { CiSearch } from "react-icons/ci";

type ButtonType = "search" | "menu" | "none";

export const Button = ({
  children,
  backgroundColor,
  buttonType = "none",
  onClick,
  style,
  textColor,
}: {
  children: React.ReactNode;
  buttonType?: ButtonType;
  backgroundColor?: string;
  textColor?: string;
  onClick?: ButtonHTMLAttributes<{}>["onClick"];
  style?: ButtonHTMLAttributes<{}>["style"];
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
      backgroundColor={backgroundColor}
      textColor={textColor}
      style={{ ...style }}
      onClick={
        onClick
          ? onClick
          : () => {
              console.log("handle onClick");
            }
      }
    >
      <RenderIcon type={buttonType} />
      <p>{children}</p>
    </ButtonComponent>
  );
};
