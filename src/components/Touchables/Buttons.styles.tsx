import styled from "styled-components";

export const ButtonComponent = styled.button`
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 1rem;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  margin: 1rem 0.5rem;
  box-shadow: ${(props) => props.theme.shadow.medium};
  font-weight: 900;
  background-color: ${(props) => props.theme.colors.primaryDark};
  color: ${(props) => props.theme.colors.primaryLight};
  text-transform: capitalize;

  &:hover {
    box-shadow: ${(props) => props.theme.shadow.dark};
    background-color: ${(props) => props.theme.colors.primaryLight};
    color: ${(props) => props.theme.colors.primaryDark};
  }

  &:active {
    box-shadow: ${(props) => props.theme.shadow.medium};
  }

  > p {
    padding: 0;
    margin: 0;
    font-size: ${(props) => props.theme.textSize.body};
  }
`;
