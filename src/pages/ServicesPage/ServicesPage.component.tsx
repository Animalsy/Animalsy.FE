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
import { Button } from "../../components/Touchables/Buttons";
import { Tooltip } from "@mui/material";
import useQuerryString from "../../hooks/useRoute";
import SearchDisplayContainer from "./SearchDisplayContainer";

export type SearchableType = {
  search: string;
  address: string;
  category: string;
  subcategory: string;
};
const ServicesPage = ({ type }: { type: "services" | "specials" }) => {
  const [searchableFilter, setSearchableFilter] = useState<SearchableType>({
    address: "",
    search: "",
    category: "",
    subcategory: "",
  });
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
  const route = useQuerryString<SearchableType>(searchableFilter);

  useEffect(() => {
    setSearchableFilter(route.params);
  }, [route.params]);

  const hadleSearch = () => {
    // add searchableFilter to url params
    if (searchableFilter) {
      route.setQueryParams(searchableFilter);
    }
  };

  return (
    <PageTemplate>
      <FullSection about="searchbar">
        <VideoContainer
          className="setheight"
          ref={videoRef}
          autoPlay
          muted
          loop
          style={{
            position: "absolute",
            height: "100dvh",
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
          <Tooltip placement="top" title="Search for a service" arrow>
            <Button buttontype="outlined" onClick={hadleSearch}>
              Search
            </Button>
          </Tooltip>
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
            zIndex: 2,
          }}
          onClick={scrollToNextSection}
        >
          <FaArrowCircleDown color={theme.colors.text} size={"2rem"} />
        </div>
      </FullSection>
      <FullSection style={{ display: "fex" }}>
        <SearchDisplayContainer searchable={route.params} type={type} />
      </FullSection>
    </PageTemplate>
  );
};

export default ServicesPage;
