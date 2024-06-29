import React, { useEffect, useState } from "react";
import CustomModal from ".";
import { TextField } from "@mui/material";
import { Button } from "../Touchables/Buttons";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import TextComponents from "../TextComponents";
import { useTheme } from "styled-components";
import { ProfileData } from "../../redux/Profile/thunks/types/profile.types";
import { updateProfile } from "../../redux/Profile/thunks/profile/EditProfile.thunk";

interface EditProfileInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProfileData: ProfileData;
}

const EditProfileInfoModal: React.FC<EditProfileInfoModalProps> = ({
  isOpen,
  onClose,
  initialProfileData,
}) => {
  const [editProfileState, setEditProfileState] = useState<
    ProfileData["customer"]
  >(initialProfileData.customer);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditProfileState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const dispatch = useAppDispatch();

  const submitChanges = () => {
    // Call the API to update the user's profile
    dispatch(updateProfile(editProfileState));
  };
  const { error, success } = useAppSelector((state) => state.profile);
  useEffect(() => {
    if (success) {
      onClose();
    }
  }, [success]);
  const theme = useTheme();
  return (
    <CustomModal isOpen={isOpen} close={onClose} scrollable>
      {/* Your content for the edit profile info modal */}
      <TextField
        type="text"
        name="name"
        placeholder="Name"
        value={editProfileState.name}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        type="text"
        name="lastName"
        placeholder="Last name"
        value={editProfileState.lastName}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        type="text"
        name="phoneNumber"
        placeholder="Phone number"
        value={editProfileState.phoneNumber}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        type="text"
        name="city"
        placeholder="City"
        value={editProfileState.city}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        type="text"
        name="street"
        placeholder="Street"
        value={editProfileState.street}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        type="text"
        name="building"
        placeholder="Building"
        value={editProfileState.building}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        type="text"
        name="flat"
        placeholder="Flat"
        value={editProfileState.flat}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        type="text"
        name="postalCode"
        placeholder="Postal code"
        value={editProfileState.postalCode}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        type="text"
        name="emailAddress"
        placeholder="Email address"
        value={editProfileState.emailAddress}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      {error && (
        <TextComponents.Body color={theme.colors.danger}>
          {error}
        </TextComponents.Body>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <Button buttontype="outlined" onClick={onClose}>
          cancel
        </Button>
        <Button
          onClick={() => {
            submitChanges();
          }}
        >
          save
        </Button>
      </div>
    </CustomModal>
  );
};

export default EditProfileInfoModal;
