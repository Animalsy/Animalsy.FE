import styled from "styled-components";
import AppSizes from "../../static/sizes";

export const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100dvh;
  height: calc(100% - ${AppSizes.appbarHeight});
  justify-content: flex-start;
  align-items: center;
  padding-top: ${AppSizes.appbarHeight};
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
  top: 0;
  bottom: 0;
  right: 0;
  color: #f1f1f1;
  width: 70%;
  /* align-items: flex-start; */
  padding: 20px;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding-top: ${AppSizes.appbarHeight};

  @media (min-width: ${AppSizes.breakpoints.small}px) {
    padding-top: ${AppSizes.appbarHeight};
    margin-left: 0rem;
  }
  @media (min-width: ${AppSizes.breakpoints.medium}px) {
    padding-top: 3rem;
    margin-left: 0.5rem;
  }
  @media (min-width: ${AppSizes.breakpoints.large}px) {
    padding-top: 3rem;
    margin-left: 1rem;
  }
  @media (min-width: ${AppSizes.breakpoints.extraLarge}px) {
    padding-top: 3rem;
    margin-left: 1rem;
  }
`;

export const SmallContent = styled.div<{
  min?: number;
  direction?: "row" | "column";
}>`
  margin-top: 1rem;
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "column")};
  justify-content: space-between;
  flex: 1;

  @media (min-width: ${AppSizes.breakpoints.medium}px) {
    flex-direction: row;
  }

  ${(props) => {
    if (props.min) {
      return `
        @media (max-width: ${props.min}px) {
          display: none;
        }
      `;
    }
  }}
`;
