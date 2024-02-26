import { ChooseContainer, GridInfo } from "./WhyChooseUs.styles";
import TextComponents from "../../../../components/TextComponents";
import { Button } from "../../../../components/Touchables/Buttons";
import Spacer from "../../../../components/containers/spacer";
import { SmallInfoBoxContainer } from "../../../../components/Displays/InfoBox";
import { infoAboutUs } from "../../../../static/heroAboutUsInfo";
import { useNavigate } from "react-router-dom";
import { DirectionContainer } from "../CategoriesDisplay/FavCategoriesSection.styles";

export const WhyChooseUsSection = () => {
  const navigation = useNavigate();
  return (
    <ChooseContainer>
      <DirectionContainer>
        <div
          style={{
            alignSelf: "center",
            display: "flex",
            flexDirection: "column",
            paddingRight: "4rem",
            flex: 1,
          }}
        >
          <TextComponents.Title style={{ textAlign: "center" }} accent>
            Why pet lovers choose us?
          </TextComponents.Title>
          <TextComponents.Body style={{ textAlign: "center" }} opposite>
            See why pet lovers prefer our app. Find services easily, save with
            exclusive offers, and get 24/7 support. Join us for a seamless pet
            care experience
          </TextComponents.Body>
          <Spacer height={1} />
          <Button
            style={{ alignSelf: "flex-end" }}
            onClick={() => {
              navigation("/faq");
            }}
          >
            Find out more
          </Button>
          <Spacer height={1} />
        </div>
        <GridInfo>
          <SmallInfoBoxContainer InfoArr={infoAboutUs} />
        </GridInfo>
      </DirectionContainer>
    </ChooseContainer>
  );
};
