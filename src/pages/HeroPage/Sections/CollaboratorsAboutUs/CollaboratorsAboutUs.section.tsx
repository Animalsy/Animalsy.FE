import { ChooseContainer } from "../WhyChooseUs/WhyChooseUs.styles";
import TextComponents from "../../../../components/TextComponents";
import ImageOfCollaborator from "../../../../assets/pictureOfColaborator.png";
import ComentsAboutUs from "./ComentsAboutUs";
import OverallRating from "./overallRating";
import Spacer from "../../../../components/containers/spacer";
import { DirectionContainer } from "../CategoriesDisplay/FavCategoriesSection.styles";
const CollaboratorsAboutUs = () => {
  return (
    <ChooseContainer style={{ flexDirection: "row" }}>
      <DirectionContainer>
        <div style={{ alignSelf: "center", flex: 1 }}>
          <img
            src={ImageOfCollaborator}
            alt="pictureOfColaborator"
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
          />
        </div>
        <div style={{ alignSelf: "center", flex: 2 }}>
          <TextComponents.Title
            size={1.5}
            style={{ textAlign: "center" }}
            accent
          >
            What Our Colaborators Say About Us
          </TextComponents.Title>
          {/* comments about us */}
          <ComentsAboutUs />
          {/* Google rating of our page + pictures of people if possible */}
          <Spacer height={1} />
          <OverallRating />
        </div>
      </DirectionContainer>
    </ChooseContainer>
  );
};

export default CollaboratorsAboutUs;
