import { useLocation } from "react-router-dom";
import TextComponents from "../../components/TextComponents";
import AppSizes from "../../static/sizes";
import PageTemplate from "../pageTemplate";
import { Vendor } from "../../redux/Profile/thunks/types/vendor.types";
import { useEffect } from "react";
import { AddressAndData } from "./Vendor.styled";
import ProfileInformation from "./VendorProfileInformation";

export const VendorPage = () => {
  const location = useLocation();
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);
  }, []);
  const vendor = location.state.vendor as Vendor;
  return (
    <PageTemplate offsetTop={AppSizes.appbarHeightNum}>
      <ProfileInformation openModal={() => {}} profile={vendor} />
    </PageTemplate>
  );
};
