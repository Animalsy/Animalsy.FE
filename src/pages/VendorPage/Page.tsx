import { useLocation } from "react-router-dom";
import AppSizes from "../../static/sizes";
import PageTemplate from "../pageTemplate";
import { Vendor } from "../../redux/Profile/thunks/types/vendor.types";
import { useEffect, useState } from "react";
import ProfileInformation from "./VendorProfileInformation";
import { CreateVendorModal } from "../../components/modals/CreateVendor";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getSingleVendor } from "../../redux/Profile/Vendor/thunk/getVendors";

export const VendorPage = () => {
  useEffect(() => {
    dispatch(getSingleVendor(vendorId));
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);
  }, []);
  const route = useLocation();
  const vendorId = route.pathname.split("/")[3];

  const dispatch = useAppDispatch();
  const { lastVendor } = useAppSelector((state) => state.vendors);
  useEffect(() => {
    // @ts-ignore
    setVendorState(lastVendor);
    setVendorModalProfile(false);
  }, [lastVendor, vendorId]);
  const [vendorState, setVendorState] = useState<Vendor | undefined>(
    lastVendor?.vendor
  );

  const [vendorModalProfile, setVendorModalProfile] = useState(false);
  return (
    <PageTemplate offsetTop={AppSizes.appbarHeightNum}>
      {vendorState && (
        <ProfileInformation
          openModal={() => {
            setVendorModalProfile(true);
          }}
          profile={vendorState}
        />
      )}
      <CreateVendorModal
        edit
        isOpen={vendorModalProfile}
        onClose={() => {
          setVendorModalProfile(false);
        }}
        vendor={vendorState}
      />
      {/* list of contractors */}
      {/* visits of vendor */}
      {/* list of products */}
    </PageTemplate>
  );
};
