import styled from "styled-components";
import { ButtonType } from "./Buttons";

export const ButtonComponent = styled.button<{
  backgroundcolor?: string;
  textcolor?: string;
  buttontype?: ButtonType;
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
    if (props.buttontype === "outlined") {
      return "transparent";
    }
    return props.backgroundcolor
      ? props.backgroundcolor
      : props.theme.colors.primaryDark;
  }};
  border: ${(props) => {
    if (props.buttontype === "outlined") {
      return `2px solid ${props.theme.colors.text}`;
    }
    return "none";
  }};
  color: ${(props) => {
    if (props.buttontype === "outlined") return props.theme.colors.primaryDark;
    return props.textcolor ? props.textcolor : props.theme.colors.primaryLight;
  }};
  text-transform: capitalize;
  height: fit-content;

  &:hover {
    box-shadow: ${(props) => props.theme.shadow.dark};
    background-color: ${(props) => {
      if (props.buttontype === "outlined") return props.theme.colors.text;
      return props.theme.colors.primaryLight;
    }};
    border: ${(props) => {
      if (props.buttontype === "outlined") {
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

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: ${(props) => props.theme.shadow.dark};
    background-color: ${(props) => {
      if (props.buttontype === "outlined") {
        return "transparent";
      }
      return props.backgroundcolor
        ? props.backgroundcolor
        : props.theme.colors.primaryDark;
    }};
    color: ${(props) => {
      if (props.buttontype === "outlined")
        return props.theme.colors.primaryDark;
      return props.textcolor
        ? props.textcolor
        : props.theme.colors.primaryLight;
    }};
  }
`;
