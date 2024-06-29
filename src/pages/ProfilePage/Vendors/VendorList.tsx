import { SlPlus } from "react-icons/sl";
import TextComponents from "../../../components/TextComponents";
import { useTheme } from "styled-components";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { getProfileVendors } from "../../../redux/Profile/Vendor/thunk/getVendors";
import SingleVendor from "./singleVendor";
import { VendorGridContainer } from "./vendor.styled";
import { CreateVendorModal } from "../../../components/modals/CreateVendor";
import { VendorResponse } from "../../../redux/Profile/Vendor";

export const VendorList = ({}: {}) => {
  const theme = useTheme();
  const { data, loading } = useAppSelector((state) => state.vendors);
  const dispatch = useAppDispatch();
  const [myVendorsList, setMyVendorsList] = useState<VendorResponse[]>();

  useEffect(() => {
    dispatch(getProfileVendors());
  }, []);
  useEffect(() => {
    setMyVendorsList(data);
  }, [data]);

  const [isVendorOpen, setIsVendorOpen] = useState(false);

  if (!myVendorsList || loading) {
    return (
      <TextComponents.Subtitle
        accent
        style={{ alignSelf: "center", width: "100%", textAlign: "center" }}
      >
        Loading...
      </TextComponents.Subtitle>
    );
  }
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <TextComponents.Title accent style={{ paddingLeft: "2rem" }}>
          My Vendors
        </TextComponents.Title>
        <SlPlus
          onClick={() => {
            setIsVendorOpen(true);
          }}
          size={"1.5rem"}
          color={theme.colors.accent}
          style={{ paddingLeft: "1rem", cursor: "pointer" }}
        />
      </div>
      <VendorGridContainer style={{}}>
        {data &&
          myVendorsList.map((single) => {
            return (
              <SingleVendor vendor={single.vendor} key={single.vendor?.id} />
            );
          })}
      </VendorGridContainer>
      <CreateVendorModal
        isOpen={isVendorOpen}
        onClose={() => {
          setIsVendorOpen(false);
        }}
      />
      {/* <TextComponents.Body opposite>{JSON.stringify(data)}</TextComponents.Body> */}
    </div>
  );
};
