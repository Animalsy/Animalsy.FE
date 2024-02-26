import { Wrapper } from "./styles";

type Props = {
  type: "services" | "specials";
};

const DisplaySection = (props: Props) => {
  console.log(props);
  return <Wrapper>DisplaySection context</Wrapper>;
};
DisplaySection.defaultProps = {
  // bla: 'test',
};

export default DisplaySection;
