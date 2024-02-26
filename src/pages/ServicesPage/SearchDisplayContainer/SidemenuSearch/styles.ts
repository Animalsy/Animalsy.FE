import styled from "styled-components";
import AppSizes from "../../../../static/sizes";
import { Link } from "react-router-dom";
import TextComponents from "../../../../components/TextComponents";

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  position: sticky;
  top: calc(${AppSizes.appbarHeight} + 1rem);
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primaryLight};
  min-width: 7rem;
`;

export const CategoryWrapper = styled.div`
  @media (max-width: ${AppSizes.breakpoints.xSmall}px) {
    padding: 0.2rem 0.2rem;
  }
  @media (max-width: ${AppSizes.breakpoints.small}px) {
    padding: 0.2rem 0.5rem;
  }
  @media (max-width: ${AppSizes.breakpoints.medium}px) {
    padding: 0.2rem 0.6rem;
  }
  @media (max-width: ${AppSizes.breakpoints.large}px) {
    padding: 0.2rem 0.8rem;
  }
  padding: 0.2rem 1rem;
`;

export const CategoryLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  background-color: #fff;

  &:hover {
  }

  & > h4 {
    color: ${(props) => props.theme.colors.text};
  }
`;

export const CategoryLinkText = styled(TextComponents.Body)`
  &:hover {
    color: ${(props) => props.theme.colors.primaryDarkO};
  }
`;
export const CategoryLinkTitle = styled(TextComponents.Subtitle)`
  &:hover {
    color: ${(props) => props.theme.colors.accentOpacity};
  }
`;
