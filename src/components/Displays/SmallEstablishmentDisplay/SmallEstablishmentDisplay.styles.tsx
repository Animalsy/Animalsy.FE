import styled from "styled-components";

export const DisplayContainer = styled.div`
  background-color: #ffffff55;
  border-radius: 0.2rem;
  padding: 0.1rem;
  box-shadow: ${(props) => props.theme.shadow.medium};
  margin: 0 0.5rem;
  flex-direction: row;
  display: flex;
  min-height: 3rem;
`;

export const ImageContainer = styled.div<{ aspectRatio?: string }>`
  aspect-ratio: ${(props) => props.aspectRatio};

  > img {
    border-radius: 0.2rem;
  }
`;
