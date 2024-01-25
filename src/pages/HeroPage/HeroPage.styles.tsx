import styled from "styled-components";
import AppSizes from "../../static/sizes";

export const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100dvh;
  height: 100%;
  max-height: 100dvh;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const VideoContainer = styled.video`
  position: absolute;
  right: 0;
  top: 0;
  width: 100dvw;
  object-fit: cover;
  height: 100dvh;
  top: 0;
`;

export const ContentContainer = styled.section`
  align-self: center;
  position: absolute;
  left: 0;
  color: #f1f1f1;
  width: 70%;
  align-items: flex-start;
  padding: 20px;
  margin-left: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: ${AppSizes.breakpoints.xSmall}px) {
    margin-left: 0rem;
  }
  @media (max-width: ${AppSizes.breakpoints.small}px) {
    margin-left: 0.5rem;
  }
  @media (max-width: ${AppSizes.breakpoints.medium}px) {
    margin-left: 1rem;
  }
`;
