import { useEffect, useState } from "react";
import { Wrapper } from "./styles";
import { vendorListStatic } from "../../../../static/vendors";
import { SearchableType } from "../../ServicesPage.component";
import SingleVendor from "../../../ProfilePage/Vendors/singleVendor";
import { Vendor } from "../../../../redux/Profile/thunks/types/vendor.types";

type Props = {
  type: "services" | "specials";
  searchable: SearchableType;
};

const DisplaySection = (props: Props) => {
  const [vendorList, setVendorList] = useState<Vendor[]>([]);

  const filterVendors = (filter: SearchableType) => {
    if (filter.search) {
      const filteredVendors = vendorListStatic.filter((vendor) => {
        return vendor.name.toLowerCase().includes(filter.search.toLowerCase());
      });
      setVendorList([]);
    }
  };
  useEffect(() => {
    filterVendors(props.searchable);
  }, [props.searchable.search]);
  return (
    <Wrapper>
      {vendorList.map((vendor) => {
        return <SingleVendor vendor={vendor} />;
      })}
    </Wrapper>
  );
};
DisplaySection.defaultProps = {
  // bla: 'test',
};

export default DisplaySection;
