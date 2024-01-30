import styled from "styled-components";

export const ScrollContainer = styled.div`
  overflow-y: auto;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  flex: 1;
`;

export const SignleCommentContent = styled.div`
  display: flex;
`;

export const CharacterContainer = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 2rem;
  overflow: hidden;
  margin-right: 0.5rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const RatingImage = styled.img`
  width: 2rem;
  aspect-ratio: 1;
  border: ${(props) => `0.3rem solid ${props.theme.colors.background}`};
  border-radius: 3rem;
  margin-right: -1.5rem;
`;

export const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
`;
