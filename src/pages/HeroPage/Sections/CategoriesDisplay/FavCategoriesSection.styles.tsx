import styled from "styled-components";
import AppSizes from "../../../../static/sizes";

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${AppSizes.appbarHeight};
`;

export const HorizontalContainer = styled.div`
  width: 100%;
  max-width: calc(100dvw - 2rem);
  padding: 2rem 0.3rem;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(7rem, 1fr));
  gap: 1rem 1rem;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const ContainerCategoryDisplay = styled.div<{
  mode?: string;
}>`
  display: flex;
  min-width: 3rem;
  flex-direction: column;
  align-items: center;
  aspect-ratio: 1/1.4;
  background-color: ${(props) =>
    props.mode !== "dark" ? "#00000015" : "#ffffff45"};
  border-radius: 0.5rem;
  box-shadow: ${(props) => props.theme.shadow.light};
  padding: 1rem;
`;

export const ImageContainer = styled.div`
  display: flex;
  border-radius: 10rem;
  overflow: hidden;
  width: 100%;
  aspect-ratio: 1/1;
  margin-bottom: 1rem;
`;

export const SectionContainer = styled.div`
  padding: 0 6rem;
  overflow: hidden;
`;

export const DirectionContainer = styled.div<{ reverse?: boolean }>`
  /*  */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  padding: 0 6rem;

  @media (max-width: ${AppSizes.breakpoints.medium}px) {
    padding: 0 1rem;
  }

  @media (min-width: ${AppSizes.breakpoints.large}px) {
    flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};

    padding: 0 4rem;
  }
`;
