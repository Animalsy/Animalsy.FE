import { Box } from "@mui/joy";
import { petList } from "../../static/petList";
import SinglePet from "./SinglePet";
import { Wrapper } from "./styles";
import TextComponents from "../TextComponents";
import { Pet } from "../../types/vendor";

type Props = {
  selectedPet?: Pet;
  setSelectedPet: React.Dispatch<React.SetStateAction<Pet | undefined>>;
};

const PetSelector = ({ selectedPet, setSelectedPet }: Props) => {
  const listofPets = petList;

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
            setSelectedPet={setSelectedPet}
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
