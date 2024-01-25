import { useRef } from "react";
import {
  ContentContainer,
  VideoContainer,
  HeroContainer,
} from "./HeroPage.styles";
import TextComponents from "../../components/TextComponents";
import PageTemplate from "../pageTemplate";
import { Button } from "../../components/Touchables/Buttons";
import { useNavigate } from "react-router-dom";

const HeroPage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();
  return (
    <PageTemplate>
      <HeroContainer>
        <VideoContainer ref={videoRef} autoPlay muted loop>
          <source src={"/src/assets/video/video.mp4"} type={"video/mp4"} />
        </VideoContainer>
        <ContentContainer>
          <TextComponents.Title opposite style={{ fontFamily: "Allura" }}>
            Welcome to Your Pet Haven
          </TextComponents.Title>
          <TextComponents.Subtitle opposite>
            Your Trusted Source for Pet Care Tips and Companionship
          </TextComponents.Subtitle>
          <TextComponents.Body opposite>
            At Your Pet Haven, we understand that pets are more than just
            animals – they're cherished members of our families. Whether you're
            a seasoned pet owner or considering bringing a new furry friend into
            your life, we're here to guide you on the exciting journey of pet
            companionship.
          </TextComponents.Body>
          <Button
            onClick={() => {
              navigate("/services", { state: { from: "hero" } });
            }}
            buttonType="search"
          >
            Search for services near you
          </Button>
        </ContentContainer>
      </HeroContainer>
      <div style={{ height: "300vh" }}></div>
    </PageTemplate>
  );
};

export default HeroPage;
