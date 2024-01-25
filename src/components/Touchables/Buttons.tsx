import React, { ButtonHTMLAttributes } from "react";
import { ButtonComponent } from "./Buttons.styles";
import { CiSearch } from "react-icons/ci";
import { useAppTheme } from "../../hooks/themeHook";

type ButtonType = "search" | "menu" | "none";

export const Button = ({
  children,
  iconColor = "#fff",
  buttonType = "none",
  onClick,
  style,
}: {
  children: React.ReactNode;
  buttonType?: ButtonType;
  iconColor?: string;
  onClick?: ButtonHTMLAttributes<{}>["onClick"];
  style?: ButtonHTMLAttributes<{}>["style"];
}) => {
  const { theme } = useAppTheme();
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
