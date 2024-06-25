import { Card, Modal } from "@mui/material";
import styled from "styled-components";
import AppSizes from "../../static/sizes";

export const CustomModalStyled = styled(Modal)`
  width: 100%;
  z-index: 100;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  position: relative;
  
`;

export const CustomCard = styled(Card)`
  display: flex;
  flex-direction: column;
  width: calc(100% - 1rem);
  height: calc(100% - 1rem - ${AppSizes.appbarHeight});
  margin-top: ${AppSizes.appbarHeight};
  position: relative;
  padding: 0.5rem;

  @media (min-width: ${AppSizes.breakpoints.small}px) {
    width: 80%;
    height: calc(90% - ${AppSizes.appbarHeight});
  }

  @media (min-width: ${AppSizes.breakpoints.medium}px) {
    width: 60%;
  }

  @media (min-width: ${AppSizes.breakpoints.large}px) {
    width: 40%;
  }
`;
