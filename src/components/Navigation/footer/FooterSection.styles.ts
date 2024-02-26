import styled from "styled-components";
import AppSizes from "../../../static/sizes";

export const FooterContainer = styled.footer`
  display: flex;
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
  padding: 1rem;
  bottom: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;

  @media (max-width: ${AppSizes.breakpoints.small}px) {
    flex-direction: column;
  }

  & > div {
    display: flex;
    align-items: center;
    padding: 1rem;
  }
`;

export const NavigationFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  & > div {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    height: 100%;
    flex: 1;
  }

  @media (max-width: ${AppSizes.breakpoints.xSmall}px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
