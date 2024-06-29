import { useEffect, useState } from "react";
import CustomModal from ".";
import { PetData } from "../../redux/Profile/thunks/types/pet.types";
import { TextField } from "@mui/material";
import useJwtHook from "../../hooks/jwtHook";
import TextComponents from "../TextComponents";
import { Button } from "../Touchables/Buttons";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { PetImage } from "../../pages/ProfilePage/Pets/SinglePet.styled";
import { squareLogo } from "../../assets/logo";
import Spacer from "../containers/spacer";
import { editPetToProfile } from "../../redux/Profile/thunks/editPet.thunk";
import { deletePetToProfile } from "../../redux/Profile/thunks/DeletePet.thunk";

export const DisplayPet = ({
  isModalOpen,
  onClose,
  pet,
}: {
  pet: PetData;
  isModalOpen: boolean;
  onClose: () => void;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPetToEdit((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const { userId } = useJwtHook();

  useEffect(() => {
    if (userId)
      setPetToEdit((prevState) => ({
        ...prevState,
        userId: userId,
      }));
  }, [userId]);

  const dispatch = useAppDispatch();

  const { success } = useAppSelector((state) => state.profile);

  useEffect(() => {
    if (success) {
      onClose();
    }
  }, [success]);

  const deletePet = () => {
    dispatch(deletePetToProfile(pet.id));
    close();
  };

  const [isEditModeEnabled, setIsEditModeEnabled] = useState(false);
  const [petToEdit, setPetToEdit] = useState(pet);
  function EditPet(): void {
    if (isEditModeEnabled) {
      dispatch(editPetToProfile(petToEdit));
    } else {
      setIsEditModeEnabled(true);
    }
  }

  return (
    <CustomModal isOpen={isModalOpen} close={onClose} scrollable>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
        }}
      >
        <PetImage
          src={pet.imageUrl ? pet.imageUrl : squareLogo}
          style={{ height: "5rem", width: "5rem", aspectRatio: "1/1" }}
        />
        {isEditModeEnabled ? (
          <TextField
            type="text"
            name="name"
            placeholder="Name"
            value={petToEdit.name}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
        ) : (
          <TextComponents.Title style={{ paddingLeft: "1rem" }} accent>
            {pet.name.charAt(0).toUpperCase() + pet.name.slice(1)}
          </TextComponents.Title>
        )}
        {isEditModeEnabled ? (
          <TextField
            type="text"
            name="specie"
            placeholder="Secie"
            value={petToEdit.species}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
        ) : (
          <TextComponents.Subtitle style={{ paddingLeft: "1rem" }} accent>
            Specie: {pet.species.charAt(0).toUpperCase() + pet.species.slice(1)}
          </TextComponents.Subtitle>
        )}
        {!isEditModeEnabled ? (
          <TextComponents.Subtitle style={{ paddingLeft: "1rem" }} opposite>
            Race: {pet.race.charAt(0).toUpperCase() + pet.species.slice(1)}
          </TextComponents.Subtitle>
        ) : (
          <TextField
            type="text"
            name="race"
            placeholder="Race"
            value={petToEdit.race}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
        )}
        {!isEditModeEnabled ? (
          <TextComponents.Subtitle style={{ paddingLeft: "1rem" }} opposite>
            Date of Birth: {new Date(pet.dateOfBirth).toLocaleDateString()}
          </TextComponents.Subtitle>
        ) : (
          <TextField
            type="date"
            name="dateOfBirth"
            value={new Date(petToEdit.dateOfBirth).toLocaleDateString()}
            onChange={handleChange}
            style={{ width: "100%", padding: ".5rem 1rem" }}
          />
        )}
        {isEditModeEnabled && (
          <TextField
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            value={petToEdit.imageUrl}
            onChange={handleChange}
            style={{ width: "100%", padding: ".5rem 1rem" }}
          />
        )}
        <Spacer height={3} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Button
            buttontype="outlined"
            onClick={
              isEditModeEnabled
                ? () => setIsEditModeEnabled(false)
                : () => deletePet()
            }
          >
            {isEditModeEnabled ? "cancel" : "Delete"}
          </Button>
          <Button onClick={EditPet}>Edit</Button>
        </div>
      </div>
    </CustomModal>
  );
};
