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
export const Text = styled.h1<{
  size?: number;
  opposite?: boolean;
  accent?: boolean;
  color?: string;
}>`
  font-size: ${(props) =>
    props.size ? `${props.size}em` : props.theme.textSize.body};
  margin: 0;
  font-weight: bold;
  color: ${(props) => {
    if (props.color) return props.color;
    if (props.opposite) return props.theme.colors.textOpposite;
    if (props.accent) return props.theme.colors.accent;
    else return props.theme.colors.text;
  }};
  text-align: left;
  display: flex;
  align-items: center;
`;
