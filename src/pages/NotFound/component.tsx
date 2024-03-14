import PageTemplate from "../pageTemplate";
import { nothingthere, sorry } from "../../assets/logo";

type Props = {
  text?: "sorry" | "nothing";
};

const NotFound = (props: Props) => (
  <PageTemplate>
    {props.text === "nothing" ? (
      <img
        src={nothingthere}
        style={{ maxHeight: "60dvh", marginTop: "5rem" }}
      />
    ) : (
      <img src={sorry} style={{ maxHeight: "60dvh", marginTop: "5rem" }} />
    )}
    <>{props.text}</>
  </PageTemplate>
);

NotFound.defaultProps = {
  // bla: 'test',
  text: "sorry",
};

export default NotFound;
