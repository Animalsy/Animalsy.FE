import styled from "styled-components";
import AppSizes from "../../../../static/sizes";

export const ChooseContainer = styled.section<{ reverse?: boolean }>`
  display: flex;
  flex-direction: row;
  padding: 1rem;

  @media (min-width: ${AppSizes.breakpoints.large}px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const GridInfo = styled.div`
  flex: 2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;

  & > div {
    align-self: center;
    background-color: ${(props) => props.theme.colors.secondaryLight};
    border-radius: 0.5rem;
    padding: 0.1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: ${(props) => props.theme.shadow.medium};
    max-height: 8rem;
    max-width: 12rem;

    @media (min-width: ${AppSizes.breakpoints.small}px) {
      width: 100%;
      padding: 0 2rem;
    }

    @media (min-width: ${AppSizes.breakpoints.medium}px) {
      width: 100%;
      aspect-ratio: 2/1;

      padding: 2rem 0;
    }
  }

  @media (max-width: ${AppSizes.breakpoints.medium}px) {
    display: flex;
    flex-direction: column;
    width: 100%;

    & > div {
      margin: 0.5rem 0;
      padding: 1rem 0;
    }
  }
`;
