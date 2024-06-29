import { Box } from "@mui/joy";
import { Wrapper } from "./styles";
import TextComponents from "../TextComponents";
import { PetData } from "../../redux/Profile/thunks/types/pet.types";
import { useAppSelector } from "../../hooks/redux";
import { Button } from "../Touchables/Buttons";
import { SinglePet } from "../../pages/ProfilePage/Pets/SinglePet";

type Props = {
  selectedPet?: PetData;
  setSelectedPet: React.Dispatch<React.SetStateAction<PetData | undefined>>;
};

const PetSelector = ({ selectedPet, setSelectedPet }: Props) => {
  const listofPets = useAppSelector((state) => state.profile.profile?.pets);

  if (!listofPets)
    return (
      <Wrapper>
        <TextComponents.Subtitle accent style={{ textAlign: "center" }}>
          You don't have any pets yet. Click the button below to add one.
        </TextComponents.Subtitle>
        <Button style={{ alignSelf: "center" }}>Go to profile</Button>
      </Wrapper>
    );
  return (
    <Wrapper>
      <TextComponents.Subtitle accent style={{ textAlign: "center" }}>
        Choose a pet to continue
      </TextComponents.Subtitle>
      <Box
        sx={{
          scrollBehavior: "smooth",
          display: "flex",
          flexDirection: "row",
          gap: 1,
          py: 1,
          overflowY: "auto",
          padding: "1rem",
          margin: "0 1rem",
          scrollSnapType: "x mandatory",
          "& > *": {
            scrollSnapAlign: "center",
          },
          "::-webkit-scrollbar": { display: "none" },
          alignItems: "center",
        }}
      >
        {listofPets.map((pet, index) => (
          <SinglePet
            pet={pet}
            key={index}
            selectedPet={selectedPet}
            onpress={() => setSelectedPet(pet)}
          />
        ))}
      </Box>
    </Wrapper>
  );
};

PetSelector.defaultProps = {
  // bla: 'test',
};

export default PetSelector;
