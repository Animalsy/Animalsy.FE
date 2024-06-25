import styled from "styled-components";
import { ButtonType } from "./Buttons";

export const ButtonComponent = styled.button<{
  backgroundColor?: string;
  textColor?: string;
  buttonType?: ButtonType;
}>`
  padding: 0.5rem 2rem;
  border-radius: 1rem;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  margin: 0.2rem 0.5rem;
  box-shadow: ${(props) => props.theme.shadow.medium};
  font-weight: 900;
  transition: all 100ms;
  cursor: pointer;
  background-color: ${(props) => {
    if (props.buttonType === "outlined") {
      return "transparent";
    }
    return props.backgroundColor
      ? props.backgroundColor
      : props.theme.colors.primaryDark;
  }};
  border: ${(props) => {
    if (props.buttonType === "outlined") {
      return `2px solid ${props.theme.colors.text}`;
    }
    return "none";
  }};
  color: ${(props) => {
    if (props.buttonType === "outlined") return props.theme.colors.primaryDark;
    return props.textColor ? props.textColor : props.theme.colors.primaryLight;
  }};
  text-transform: capitalize;
  height: fit-content;

  &:hover {
    box-shadow: ${(props) => props.theme.shadow.dark};
    background-color: ${(props) => {
      if (props.buttonType === "outlined") return props.theme.colors.text;
      return props.theme.colors.primaryLight;
    }};
    border: ${(props) => {
      if (props.buttonType === "outlined") {
        return `2px solid transparent`;
      }
      return "none";
    }};
    color: ${(props) => {
      return props.theme.colors.primaryDark;
    }};
  }

  &:active {
    box-shadow: ${(props) => props.theme.shadow.medium};
  }

  > p {
    padding: 0;
    margin: 0;
    font-size: ${(props) => props.theme.textSize.subTitle};
  }
`;
