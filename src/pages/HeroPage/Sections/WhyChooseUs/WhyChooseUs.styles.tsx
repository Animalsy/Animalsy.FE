import styled from "styled-components";
import AppSizes from "../../../../static/sizes";

export const ChooseContainer = styled.section`
  display: grid;
  flex-direction: row;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding: 1rem;

  @media (max-width: ${AppSizes.breakpoints.small}px) {
    display: flex;
    flex-direction: column-reverse;
  }
  & > div {
    display: flex;
    flex-direction: column;
    flex: 1;

    justify-content: center;
    background-color: ${(props) => props.theme.colors.secondaryLight};
    padding: 2rem 3rem;
    border-radius: 1rem;
    aspect-ratio: 1/1;

    @media (max-width: ${AppSizes.breakpoints.small}px) {
      padding: 0.5rem;
    }
    @media (max-width: ${AppSizes.breakpoints.medium}px) {
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

  & > div {
    background-color: ${(props) => props.theme.colors.secondaryLight};
    border-radius: 1rem;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: ${AppSizes.breakpoints.small}px) {
      flex-direction: column;
      width: 100%;
      aspect-ratio: 1;
      padding: 0;
      margin: 0;
    }

    @media (max-width: ${AppSizes.breakpoints.medium}px) {
      flex-direction: column;
      width: 100%;
      aspect-ratio: 2/1;
    }
  }

  @media (max-width: ${AppSizes.breakpoints.small}px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
