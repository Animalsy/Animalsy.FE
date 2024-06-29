import { useState } from "react";
import TextComponents from "../../../components/TextComponents";
import { Button } from "../../../components/Touchables/Buttons";
import { AddPetModal } from "../../../components/modals/AddPet.modal";
import { PetContainer } from "./";
import { SinglePet } from "./SinglePet";
import { SlPlus } from "react-icons/sl";
import { useTheme } from "styled-components";
import { PetData } from "../../../redux/Profile/thunks/types/pet.types";

export const PetList = ({ pets }: { pets: PetData[] | undefined }) => {
  const [isPetModalVisible, setIsPetModalVisible] = useState(false);
  const theme = useTheme();

  if (!pets || pets?.length === 0) {
    return (
      <>
        <PetContainer vertical={true}>
          <TextComponents.Title accent>My pets</TextComponents.Title>
          <TextComponents.Body opposite>
            You don't have any pets yet. Click the button below to add one.
          </TextComponents.Body>
          <Button
            onClick={() => {
              setIsPetModalVisible(true);
            }}
          >
            Add Pet
          </Button>
        </PetContainer>
        <AddPetModal
          isModalOpen={isPetModalVisible}
          onClose={() => {
            setIsPetModalVisible(false);
          }}
        />
      </>
    );
  }
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <TextComponents.Title accent style={{ paddingLeft: "1rem" }}>
          My Pets
        </TextComponents.Title>
        <SlPlus
          onClick={() => {
            setIsPetModalVisible(true);
          }}
          size={"1.5rem"}
          color={theme.colors.accent}
          style={{ paddingLeft: "1rem", cursor: "pointer" }}
        />
      </div>
      <PetContainer>
        {pets.map((pet) => (
          <SinglePet pet={pet} key={pet.id} />
        ))}
      </PetContainer>
      <AddPetModal
        isModalOpen={isPetModalVisible}
        onClose={() => {
          setIsPetModalVisible(false);
        }}
      />
    </>
  );
};
