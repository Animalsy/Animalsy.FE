import { Wrapper } from "./styles";
import { Vendor } from "../../../types/vendor";
import TextComponents from "../../../components/TextComponents";

type Props = {
  vendor: Vendor;
};

const DisplayVendorDescription = (props: Props) => (
  <Wrapper>
    <TextComponents.Body>{props.vendor.description}</TextComponents.Body>
  </Wrapper>
);

DisplayVendorDescription.defaultProps = {
  // bla: 'test',
};

export default DisplayVendorDescription;
