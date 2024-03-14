import styled from "styled-components";
import AppSizes from "../../../static/sizes";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.2rem;
  border-radius: 0.2rem;
  width: auto;
  background-color: ${({ theme }) => theme.colors.primaryDark400};

  & > img {
    border-radius: 0.2rem;
  }

  @media (min-width: ${AppSizes.breakpoints.xSmall}px) {
    width: 90%;
    /*  */
  }
  @media (min-width: ${AppSizes.breakpoints.small}px) {
    width: 70%;
    /*  */
  }

  @media (min-width: ${AppSizes.breakpoints.large}px) {
    /*  */
    width: 50%;
  }
  @media (min-width: ${AppSizes.breakpoints.extraLarge}px) {
    /*  */
    width: 30%;
  }
`;
