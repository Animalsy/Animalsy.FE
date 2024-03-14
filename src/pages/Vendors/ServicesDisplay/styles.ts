import styled from "styled-components";
import AppSizes from "../../../static/sizes";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 0 2rem;

  @media (min-width: ${AppSizes.breakpoints.small}px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${AppSizes.breakpoints.large}px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const DataWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryDark400};
  border-radius: 0.2rem;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;
