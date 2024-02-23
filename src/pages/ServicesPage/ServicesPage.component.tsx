// import { useParams } from "react-router-dom";
import PageTemplate from "../pageTemplate";
import { VideoContainer } from "../HeroPage/HeroPage.styles";
import React, { useEffect, useState } from "react";
import { videos } from "../../assets/video/videos";
import { FullSection } from "./ServicesPage";
import { FaArrowCircleDown } from "react-icons/fa";
import { useTheme } from "styled-components";
import { VideoContentContainer } from "../../components/containers/pageContainer";
import Searchable from "../../components/Searchable";
import TextComponents from "../../components/TextComponents";

const ServicesPage = ({ type }: { type: "services" | "specials" }) => {
  // const { category } = useParams();
  const [searchableFilter, setSearchableFilter] = useState<string>("");
  useEffect(() => {
    console.log("type: " + type);
  }, [type]);

  // function that will scroll to next section
  function scrollToNextSection() {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  }

  const videoRef = React.useRef<HTMLVideoElement>(null);
  const theme = useTheme();
  return (
    <PageTemplate offsetColor={1}>
      <FullSection about="searchbar">
        <VideoContainer
          className="setheight"
          ref={videoRef}
          autoPlay
          muted
          loop
          style={{
            position: "absolute",
            height: "80dvh",
            width: "100%",
            zIndex: -1,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <source src={videos.services} type={"video/mp4"} />
        </VideoContainer>
        {/* floating button that will scroll to bottom of this sectiom */}
        <VideoContentContainer>
          <TextComponents.Subtitle style={{ textAlign: "center" }}>
            Everything that you could need for your pet in one place
          </TextComponents.Subtitle>
          <Searchable
            searchableFilter={searchableFilter}
            setSearchableFilter={setSearchableFilter}
          />
        </VideoContentContainer>

        <div
          style={{
            width: "2rem",
            height: "2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: "1rem",
            left: "50%",
            cursor: "pointer",
            overflow: "hidden",
          }}
          onClick={scrollToNextSection}
        >
          <FaArrowCircleDown color={theme.colors.primaryDark} size={"2rem"} />
        </div>
      </FullSection>
      <FullSection style={{ background: "pink" }}>hello</FullSection>
      <FullSection style={{ background: "pink" }}>hello</FullSection>
    </PageTemplate>
  );
};

export default ServicesPage;
