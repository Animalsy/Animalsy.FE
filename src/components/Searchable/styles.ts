import styled from "styled-components";
import AppSizes from "../../static/sizes";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: transparent;
  margin: 1rem;

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

  @media (min-width: ${AppSizes.breakpoints.small}px) {
    flex-direction: row;
    padding: 2rem 2rem;

    & > :nth-child(1) {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
      margin: 0%;
      flex: 2;
    }
    & > :nth-child(2) {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
      margin: 0%;
      flex: 1;
      border-left-color: transparent;
    }
    /*  */
  }

  @media (min-width: ${AppSizes.breakpoints.medium}px) {
    /*  */
    width: 90%;
  }
  @media (min-width: ${AppSizes.breakpoints.large}px) {
    /*  */
    width: 80%;
  }
  @media (min-width: ${AppSizes.breakpoints.extraLarge}px) {
    /*  */
    width: 50%;
  }
`;
