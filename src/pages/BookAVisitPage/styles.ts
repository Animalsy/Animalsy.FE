import styled from "styled-components";
import AppSizes from "../../static/sizes";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primaryDark400};
`;

export const ServiceWrapper = styled.div`
  display: flex;
  padding: 1rem 2rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: ${AppSizes.breakpoints.small}px) {
    flex-direction: row;
  }
`;
