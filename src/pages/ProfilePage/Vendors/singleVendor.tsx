import TextComponents from "../../../components/TextComponents";
import { Vendor } from "../../../redux/Profile/thunks/types/vendor.types";
import { VendorContainer } from "./vendor.styled";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { useAppDispatch } from "../../../hooks/redux";
import { deleteSingleVendor } from "../../../redux/Profile/Vendor/thunk/getVendors";

const SingleVendor = ({ vendor }: { vendor?: Vendor | undefined }) => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  return (
    <VendorContainer
      onClick={() => {
        navigate(`/profile/vendors/${vendor?.id}`, {
          state: { vendor: vendor },
        });
      }}
    >
      <FaTrash
        onClick={(e) => {
          e.stopPropagation();
          if (vendor) dispatch(deleteSingleVendor(vendor?.id));
        }}
        size={".8rem"}
        style={{
          position: "absolute",
          top: ".5rem",
          right: ".5rem",
          cursor: "pointer",
        }}
      />
      <TextComponents.Subtitle accent>{vendor?.name}</TextComponents.Subtitle>
      <TextComponents.Body>
        {vendor?.postalCode} {vendor?.city} {vendor?.street} {vendor?.building}{" "}
        {vendor?.flat}
      </TextComponents.Body>
    </VendorContainer>
  );
};

export default SingleVendor;
