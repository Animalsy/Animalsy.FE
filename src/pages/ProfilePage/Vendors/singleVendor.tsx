import TextComponents from "../../../components/TextComponents";
import { Vendor } from "../../../redux/Profile/thunks/types/vendor.types";
import { VendorContainer } from "./vendor.styled";
import { useNavigate } from "react-router-dom";

const SingleVendor = ({ vendor }: { vendor?: Vendor | undefined }) => {
  const navigate = useNavigate();
  return (
    <VendorContainer
      onClick={() => {
        navigate(`/profile/vendors/${vendor?.id}`, {
          state: { vendor: vendor },
        });
      }}
    >
      <TextComponents.Subtitle accent>{vendor?.name}</TextComponents.Subtitle>
      <TextComponents.Body>
        {vendor?.postalCode} {vendor?.city} {vendor?.street} {vendor?.building}{" "}
        {vendor?.flat}
      </TextComponents.Body>
    </VendorContainer>
  );
};

export default SingleVendor;
