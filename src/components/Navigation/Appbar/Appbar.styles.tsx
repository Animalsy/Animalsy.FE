import styled from "styled-components";
import AppSizes from "../../../static/sizes";

export const AppbarContainer = styled.header<{ isscrolledtotop: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${(props) =>
    props.isscrolledtotop ? "#FFFFFF15" : props.theme.colors.primaryLight};
  height: ${AppSizes.appbarHeight};
  z-index: 100000000;
  margin: 0;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  justify-content: space-between;
`;

export const LogoImage = styled.img`
  height: 60%;
  object-fit: contain;
  margin: 1rem 0;
`;
