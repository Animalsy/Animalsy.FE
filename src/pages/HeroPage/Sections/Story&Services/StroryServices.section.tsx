import { ChooseContainer, GridInfo } from "../WhyChooseUs/WhyChooseUs.styles";
import TextComponents from "../../../../components/TextComponents";
import Spacer from "../../../../components/containers/spacer";
import { Button } from "../../../../components/Touchables/Buttons";
import { useNavigate } from "react-router-dom";
import { SmallInfoBoxContainer } from "../../../../components/Displays/InfoBox";
import { ourServicesArr } from "../../../../static/ourServicesArr";
import { DirectionContainer } from "../CategoriesDisplay/FavCategoriesSection.styles";

const StroryServices = () => {
  const navigation = useNavigate();
  return (
    <ChooseContainer reverse>
      <DirectionContainer reverse>
        <div style={{ alignSelf: "center", flex: 1, paddingLeft: "4rem" }}>
          <TextComponents.Title style={{ textAlign: "center" }} accent>
            Our Journey And Services
          </TextComponents.Title>
          <TextComponents.Body style={{ textAlign: "center" }} opposite>
            Welcome to Animalsy, where our passion for animals drives our
            mission. At Animalsy, we are dedicated to providing exceptional
            services for pets and animal enthusiasts alike. Discover the world
            of animal care and support through our specialized offerings. Join
            us in nurturing the bond between humans and animals with Animalsy
          </TextComponents.Body>
          <Spacer height={1} />
          <Button
            style={{ alignSelf: "center" }}
            onClick={() => {
              navigation("/ourservices");
            }}
          >
            Explore
          </Button>
        </div>
        <GridInfo style={{ flex: 2 }}>
          <SmallInfoBoxContainer InfoArr={ourServicesArr} />
        </GridInfo>
      </DirectionContainer>
    </ChooseContainer>
  );
};

export default StroryServices;
