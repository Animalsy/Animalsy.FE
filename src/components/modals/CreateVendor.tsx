import React, { useState } from "react";
import CustomModal from ".";
import {
  initialStateCreateVendor,
  vendorSchema,
} from "../../redux/Profile/thunks/types/vendor.types";
import { TextField } from "@mui/material";
import { Button } from "../Touchables/Buttons";
import { squareLogo } from "../../assets/logo";
import { createVndorThunk } from "../../redux/Profile/Vendor/thunk/createVendor";
import { useAppDispatch } from "../../hooks/redux";
import TextComponents from "../TextComponents";

export const CreateVendorModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = (props) => {
  const [createVendorForm, setCreateVendorForm] = useState(
    initialStateCreateVendor
  );
  const [error, setError] = useState<string | null>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCreateVendorForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCreateVendor = async () => {
    try {
      await vendorSchema.validate(createVendorForm, { abortEarly: false });
      dispatch(createVndorThunk(createVendorForm));
      setError(null);
    } catch (error: any) {
      // Handle validation errors

      setError(error.errors[0]);
    }
  };

  const dispatch = useAppDispatch();

  return (
    <CustomModal isOpen={props.isOpen} close={props.onClose}>
      <img
        src={squareLogo}
        alt="logo"
        style={{ width: "100px", alignSelf: "center" }}
      />
      <TextField
        type="text"
        name="name"
        placeholder="Name"
        value={createVendorForm.name}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        type="text"
        name="nip"
        placeholder="Nip number"
        value={createVendorForm.nip}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        type="text"
        name="city"
        placeholder="City"
        value={createVendorForm.city}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        type="text"
        name="street"
        placeholder="Street"
        value={createVendorForm.street}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        type="text"
        name="building"
        placeholder="Building"
        value={createVendorForm.building}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        type="text"
        name="flat"
        placeholder="Flat"
        value={createVendorForm.flat}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        type="text"
        name="postalCode"
        placeholder="Postal code"
        value={createVendorForm.postalCode}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        type="text"
        name="phoneNumber"
        placeholder="Phone number"
        value={createVendorForm.phoneNumber}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        type="text"
        name="emailAddress"
        placeholder="Email"
        value={createVendorForm.emailAddress}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        type="text"
        name="openingHour"
        placeholder="Opening Hour"
        value={createVendorForm.openingHour}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        type="text"
        name="closingHour"
        placeholder="Closing Hour"
        value={createVendorForm.closingHour}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextComponents.Body style={{ alignSelf: "center" }} color="red">
        {error}
      </TextComponents.Body>
      <Button
        onClick={() => {
          handleCreateVendor();
        }}
        style={{ alignSelf: "center" }}
      >
        Add new Vendor
      </Button>
    </CustomModal>
  );
};
