import React from "react";
import styled from "styled-components";

const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return <Content>{children}</Content>;
};

const Content = styled.div`
  min-height: calc(100vh - 2rem);
  scroll-behavior: smooth;
  scroll-padding-top: 2rem;
`;

export const VideoContentContainer = styled.div`
  z-index: 2;
  height: calc(80dvh - 2rem);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export default PageContainer;
