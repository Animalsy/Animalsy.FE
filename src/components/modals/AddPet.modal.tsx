import { useEffect, useState } from "react";
import CustomModal from ".";
import { TextField } from "@mui/material";
import useJwtHook from "../../hooks/jwtHook";
import TextComponents from "../TextComponents";
import { Button } from "../Touchables/Buttons";
import { useAppDispatch } from "../../hooks/redux";
import { postNewPetToProfile } from "../../redux/Profile/thunks/AddPet.thunk";
import { initialPetData } from "../../redux/Profile/thunks/types/pet.types";

export const AddPetModal = ({
  isModalOpen,
  onClose,
}: {
  isModalOpen: boolean;
  onClose: () => void;
}) => {
  const [petData, setPetData] = useState(initialPetData);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPetData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const { userId } = useJwtHook();
  useEffect(() => {
    if (userId)
      setPetData((prevState) => ({
        ...prevState,
        userId: userId,
      }));
  }, [userId]);

  const dispatch = useAppDispatch();
  function submitNewPet(): void {
    dispatch(postNewPetToProfile(petData));
  }

  return (
    <CustomModal isOpen={isModalOpen} close={onClose} scrollable>
      <TextComponents.Title style={{ paddingLeft: "1rem" }} accent>
        Add Pet
      </TextComponents.Title>
      <TextField
        type="text"
        name="name"
        placeholder="Name"
        value={petData.name}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        type="text"
        name="species"
        placeholder="Species"
        value={petData.species}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        type="text"
        name="race"
        placeholder="Race"
        value={petData.race}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        type="date"
        name="dateOfBirth"
        value={petData.dateOfBirth}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        type="text"
        name="imageUrl"
        placeholder="Image URL"
        value={petData.imageUrl}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Button buttonType="outlined" onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={submitNewPet}>Add Pet</Button>
      </div>
    </CustomModal>
  );
};
