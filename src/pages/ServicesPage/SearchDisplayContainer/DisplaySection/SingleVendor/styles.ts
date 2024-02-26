import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.colors.primaryDark400};
  margin-bottom: 0.5rem;
  border-radius: 0.2rem;
  overflow: hidden;
  align-items: center;
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const ImageContainer = styled.img`
  height: 9rem;
  margin: 0.2rem;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 0.2rem;
`;
