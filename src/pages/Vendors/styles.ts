import styled from "styled-components";
import AppSizes from "../../static/sizes";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.2rem;

  @media (min-width: ${AppSizes.breakpoints.small}px) {
    flex-direction: row;
  }
`;
