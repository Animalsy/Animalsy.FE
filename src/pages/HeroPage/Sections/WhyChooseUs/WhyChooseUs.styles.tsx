import styled from "styled-components";

export const ChooseContainer = styled.section`
  display: grid;
  flex-direction: row;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding: 1rem;

  & > div {
    display: flex;
    flex-direction: column;
    flex: 1;

    justify-content: center;
    background-color: ${(props) => props.theme.colors.secondaryLight};
    padding: 2rem 3rem;
    border-radius: 1rem;
    aspect-ratio: 1/1;
  }
  & > div:nth-child(1) {
    background-color: transparent !important;
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
  }
`;
