import styled from "styled-components";
import AppSizes from "../../../static/sizes";

export const Wrapper = styled.div`
  display: flex;
  padding: 0 2rem;

  @media (max-width: ${AppSizes.breakpoints.small}px) {
    padding: 0 0.2rem;
  }
  @media (max-width: ${AppSizes.breakpoints.medium}px) {
    padding: 0 0.5rem;
  }
  @media (max-width: ${AppSizes.breakpoints.large}px) {
    padding: 0 1rem;
  }
`;
