import styled from "styled-components";
import AppSizes from "../../../../static/sizes";
import { Link } from "react-router-dom";

export const MenuListComponent = styled.ul`
  flex-direction: row;
  display: flex;

  @media (max-width: ${AppSizes.breakpoints.medium}px) {
    display: none;
  }
`;

export const MenuListItem = styled(Link)<{ isscrolledtotop?: boolean }>`
  list-style: none;
  margin: 0 0.1rem;
  padding: 0.1rem 1.5rem;
  background-color: #ffffff10;
  border-radius: 0.2rem;
  font-size: ${(props) => props.theme.textSize.body};
  transition: 0.5s;
  justify-content: space-around;
  align-items: center;
  display: flex;
  text-decoration: none;
  color: ${(props) =>
    props.isscrolledtotop
      ? props.theme.colors.primaryDark
      : props.theme.colors.textOpposite};

  &:hover {
    background-color: #ffffff50;
    font-weight: 200;
  }
`;

export const MenuSubList = styled.div<{
  isHovered: boolean;
  offset?: number;
  isscrolledtotop: boolean;
}>`
  padding: 0.1rem;
  border-radius: 0.1rem;
  background-color: ${(props) =>
    props.isscrolledtotop ? "#FFFFFF85" : props.theme.colors.primaryLight};

  overflow: hidden; /* Hide the element content, while height = 0 */
  height: ${(props) => (props.isHovered ? "auto" : "0")};
  opacity: ${(props) => (props.isHovered ? "1" : "0")};
  transition: height 0ms 400ms, opacity 400ms 0ms;
  position: absolute;
  top: 3.2rem;
  left: ${(props) => (props.offset ? `${props.offset}px` : "0px")};
  /*  */
`;
