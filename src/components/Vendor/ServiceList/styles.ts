import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  & > div {
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  display: flex;
  align-items: start;
  max-height: 60vh;
  max-width: 60vw;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 0.3rem !important;
  padding: 2rem 3rem;

  & > div {
    overflow-x: scroll;
    display: flex;
    align-items: start;
    max-height: 60vh;
  }
`;
