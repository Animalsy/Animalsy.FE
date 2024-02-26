import { useEffect, useState } from "react";
import { Wrapper } from "./styles";
import { Vendor } from "../../../../types/vendor";
import { vendorListStatic } from "../../../../static/vendors";
import SingleVendor from "./SingleVendor";
import { SearchableType } from "../../ServicesPage.component";

type Props = {
  type: "services" | "specials";
  searchable: SearchableType;
};

const DisplaySection = (props: Props) => {
  const [vendorList, setVendorList] = useState<Vendor[]>(vendorListStatic);
  const newVendorList = () => {
    setVendorList([]);
  };
  console.log(newVendorList, props);
  const filterVendors = (filter: SearchableType) => {
    const filteredVendors = vendorListStatic.filter((vendor) => {
      return vendor.name.toLowerCase().includes(filter.search.toLowerCase());
    });
    setVendorList(filteredVendors);
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
