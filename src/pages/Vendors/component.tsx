import { useEffect, useState } from "react";
import { Wrapper } from "./styles";
import PageTemplate from "../pageTemplate";
import { useParams } from "react-router-dom";
import { vendorListStatic } from "../../static/vendors";
import { Vendor } from "../../types/vendor";

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
  return (
    <PageTemplate offsetColor={1}>
      <Wrapper>{JSON.stringify(vendor)}</Wrapper>
    </PageTemplate>
  );
};

Vendors.defaultProps = {
  // bla: 'test',
};

export default Vendors;
