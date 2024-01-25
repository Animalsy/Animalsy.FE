import styled from "styled-components";

export const Title = styled.h1<{ size?: number; opposite?: boolean }>`
  font-size: ${(props) =>
    props.size ? `${props.size}em` : props.theme.textSize.title};
  margin: 0;
  font-weight: bold;
  color: ${(props) =>
    props.opposite ? props.theme.colors.textOpposite : props.theme.colors.text};
  text-align: left;
`;

export const Subtitle = styled.h1<{ size?: number; opposite?: boolean }>`
  font-size: ${(props) =>
    props.size ? `${props.size}em` : props.theme.textSize.subtitle};
  margin: 0;
  font-weight: bold;
  color: ${(props) =>
    props.opposite ? props.theme.colors.textOpposite : props.theme.colors.text};
  text-align: left;
`;
export const Text = styled.h1<{ size?: number; opposite?: boolean }>`
  font-size: ${(props) =>
    props.size ? `${props.size}em` : props.theme.textSize.body};
  margin: 0;
  font-weight: bold;
  color: ${(props) =>
    props.opposite ? props.theme.colors.textOpposite : props.theme.colors.text};
  text-align: left;
`;
