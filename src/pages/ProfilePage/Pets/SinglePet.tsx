import TextComponents from "../../../components/TextComponents";
import { PetData } from "../../../redux/Profile/thunks//types/pet.types";
import { PetImage, SinglePetContainer } from "./SinglePet.styled";
import { squareLogo } from "../../../assets/logo";
import { DisplayPet } from "../../../components/modals/DisplayPet.modal";
import { useState } from "react";

export const SinglePet = ({
  pet,
  onpress,
  selectedPet,
}: {
  pet: PetData;
  onpress?: () => void;
  selectedPet?: PetData | undefined;
}) => {
  const [displayPetVisibility, setDisplayPetVisibility] = useState(false);
  const changeVisibility = () => {
    setDisplayPetVisibility(!displayPetVisibility);
  };
  return (
    <>
      <SinglePetContainer
        style={{
          backgroundColor: pet?.id === selectedPet?.id ? "#f0f0f0" : "white",
        }}
        onClick={
          onpress
            ? () => onpress()
            : () => {
                setDisplayPetVisibility(true);
              }
        }
      >
        <PetImage src={pet.imageUrl ? pet.imageUrl : squareLogo} />
        <TextComponents.Subtitle accent>
          {pet.name.charAt(0).toUpperCase() + pet.name.slice(1)}
        </TextComponents.Subtitle>
        <TextComponents.Subtitle accent style={{ textAlign: "center" }}>
          {pet.race.charAt(0).toUpperCase() + pet.race.slice(1)}
        </TextComponents.Subtitle>
      </SinglePetContainer>
      <DisplayPet
        pet={pet}
        isModalOpen={displayPetVisibility}
        onClose={changeVisibility}
      />
    </>
  );
};
