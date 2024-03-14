import styled from "styled-components";
import AppSizes from "../../static/sizes";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;

  padding: 0 2rem;

  @media (max-width: ${AppSizes.breakpoints.small}px) {
    padding: 0 0.2rem;
  }
  @media (max-width: ${AppSizes.breakpoints.medium}px) {
    padding: 0 0.5rem;
  }
  @media (max-width: ${AppSizes.breakpoints.large}px) {
    padding: 0 1rem;
  }

  & > button {
    z-index: 2;
  }
`;

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

export const Week = styled.div`
  display: flex;
  width: 100%;
  padding: 0.5rem 1rem;
`;

export const Day = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5rem 0.2rem;
`;
