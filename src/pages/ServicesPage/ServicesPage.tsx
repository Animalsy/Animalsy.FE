import styled from "styled-components";
import AppSizes from "../../static/sizes";

export const FullSection = styled.section`
  width: 100%;
  margin: 0;
  padding: 0;
  padding-top: ${AppSizes.appbarHeight};
  height: calc(100dvh - 2rem);
  position: relative;
`;
