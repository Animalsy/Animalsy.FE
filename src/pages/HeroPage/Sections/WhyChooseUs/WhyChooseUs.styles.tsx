import styled from "styled-components";
import AppSizes from "../../../../static/sizes";

export const ChooseContainer = styled.section<{ reverse?: boolean }>`
  display: grid;
  flex-direction: row;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding: 1rem;
  direction: ${(props) => (props.reverse ? "rtl" : "ltr")};

  @media (max-width: ${AppSizes.breakpoints.large}px) {
    display: flex;
    flex-direction: column-reverse;
  }

  & > div {
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 2rem 3rem;
    border-radius: 1rem;
    aspect-ratio: 1/1;

    @media (max-width: ${AppSizes.breakpoints.small}px) {
      padding: 0.5rem;
    }
    @media (max-width: ${AppSizes.breakpoints.large}px) {
      aspect-ratio: 2/1;
    }
  }
  & > div:nth-child(1) {
    background-color: transparent !important;
    margin: 0;
    padding: 0;
  }
`;

export const GridInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  aspect-ratio: 1;
  min-height: 10rem;

  & > div {
    background-color: ${(props) => props.theme.colors.secondaryLight};
    border-radius: 1rem;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: ${(props) => props.theme.shadow.medium};

    @media (max-width: ${AppSizes.breakpoints.small}px) {
      flex-direction: column;
      width: 100%;
      margin: 0;
      padding: 0 2rem;
    }

    @media (max-width: ${AppSizes.breakpoints.medium}px) {
      flex-direction: column;
      width: 100%;
      aspect-ratio: 2/1;

      padding: 2rem 0;
    }
  }

  @media (max-width: ${AppSizes.breakpoints.small}px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  @media (max-width: ${AppSizes.breakpoints.medium}px) {
    aspect-ratio: unset;
  }
`;
