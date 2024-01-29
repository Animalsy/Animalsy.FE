import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HorizontalContainer = styled.div`
  width: 100%;
  max-width: calc(100dvw - 2rem);
  padding: 2rem 0.3rem;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  gap: 1rem 1rem;
  align-items: center;
  justify-content: center;
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
