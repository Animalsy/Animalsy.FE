import { border } from "./../../../node_modules/@mui/system/index.d";
import styled from "styled-components";
import AppSizes from "../../static/sizes";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: transparent;
  margin: 1rem;

  @media (min-width: ${AppSizes.breakpoints.small}px) {
    flex-direction: row;
    /*  */
  }
  @media (min-width: ${AppSizes.breakpoints.medium}px) {
    /*  */
  }
  @media (min-width: ${AppSizes.breakpoints.large}px) {
    /*  */
  }
  @media (min-width: ${AppSizes.breakpoints.extraLarge}px) {
    /*  */
  }

  & > input {
    width: 100%;
    padding: 1rem;
    border: none;
    border-radius: 10rem;
    font-size: ${(props) => props.theme.textSize.text};
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.colors.text};
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
    transition: all 0.3s;
    margin: 0.5rem 1rem;
  }
`;
