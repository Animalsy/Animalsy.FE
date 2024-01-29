import { ChooseContainer } from "../WhyChooseUs/WhyChooseUs.styles";
import TextComponents from "../../../../components/TextComponents";
import ImageOfCollaborator from "../../../../assets/pictureOfColaborator.png";
import ComentsAboutUs from "./ComentsAboutUs";
const CollaboratorsAboutUs = () => {
  return (
    <ChooseContainer reverse>
      <div>
        <img
          src={ImageOfCollaborator}
          alt="pictureOfColaborator"
          style={{ objectFit: "contain", width: "100%", height: "100%" }}
        />
      </div>
      <div style={{ alignSelf: "center" }}>
        <TextComponents.Title style={{ textAlign: "center" }} accent>
          What Our Colaborators Say About Us
        </TextComponents.Title>
        {/* comments about us */}
        <ComentsAboutUs />
        {/* Google rating of our page + pictures of people if possible */}
      </div>
    </ChooseContainer>
  );
};

export default CollaboratorsAboutUs;
