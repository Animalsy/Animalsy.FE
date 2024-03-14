import { useEffect, useState } from "react";
import { Wrapper } from "./styles";
import PageTemplate from "../pageTemplate";
import { useParams } from "react-router-dom";
import { vendorListStatic } from "../../static/vendors";
import { Vendor } from "../../types/vendor";
import DisplayVendorInfo from "./DisplayVendorInfo";
import NotFound from "../NotFound";
import DisplayVendorDescription from "./DisplayVendorDescription";
import OpenHours from "./OpenHours";
import ServicesDisplay from "./ServicesDisplay";

type Props = {};

const Vendors = (props: Props) => {
  console.log(props);
  const { id } = useParams();
  const findVendorById = (id: string) => {
    return vendorListStatic.find((vendor) => vendor.id.toString() === id);
  };
  const [vendor, setVendor] = useState<Vendor>();
  useEffect(() => {
    if (id) {
      const vendorFound = findVendorById(id);
      setVendor(vendorFound);
    }
  }, [id]);
  if (!vendor) return <NotFound />;
  return (
    <PageTemplate offsetColor={1} offsetTop={2}>
      <Wrapper>
        <DisplayVendorInfo vendor={vendor} />
        <DisplayVendorDescription vendor={vendor} />
      </Wrapper>
      <Wrapper style={{ padding: "0 2.2rem" }}>
        <OpenHours vendor={vendor} />
      </Wrapper>
      {/*  services*/}
      <Wrapper>
        <ServicesDisplay vendor={vendor} />
      </Wrapper>
    </PageTemplate>
  );
};

Vendors.defaultProps = {
  // bla: 'test',
};

export default Vendors;
