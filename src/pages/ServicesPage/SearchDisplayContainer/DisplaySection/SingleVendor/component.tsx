import { ImageContainer, Wrapper, DataWrapper } from "./styles";
import { Vendor } from "../../../../../types/vendor";
import TextComponents from "../../../../../components/TextComponents";
import { useEffect, useRef, useState } from "react";
import { Button } from "../../../../../components/Touchables/Buttons";
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";

type Props = {
  vendor: Vendor;
};

const SingleVendor = (props: Props) => {
  const vendor = props.vendor;

  const getServicesNames = () => {
    return vendor.services.map((service) => service.title);
  };

  // function that will calculate width of datawrapper by using ref

  const [width, setWidth] = useState("1rem");
  const dataWrapperRef = useRef<HTMLDivElement>(null);
  const calculateDataWrapperWidth = () => {
    if (dataWrapperRef.current) {
      const width = dataWrapperRef.current.clientWidth;
      return `${width}px`;
    }
    return "auto";
  };
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (width === "1rem") {
      const w = calculateDataWrapperWidth();
      setWidth(w);
    }
  }, [width]);
  const theme = useTheme();
  const navigate = useNavigate();
  const fetchDogImage = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      return data.message;
    } catch (error) {
      console.error("Error fetching dog image:", error);
      return null;
    }
  };

  useEffect(() => {
    fetchDogImage().then((url) => setImageUrl(url));
  }, []);
  return (
    <Wrapper>
      <ImageContainer src={imageUrl}></ImageContainer>
      <DataWrapper ref={dataWrapperRef}>
        <TextComponents.Subtitle accent>{vendor.name}</TextComponents.Subtitle>
        <TextComponents.Body
          style={{
            maxHeight: "3rem",
            overflow: "hidden",
            position: "relative",
            textAlign: "justify",
          }}
        >
          {vendor.description}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "3rem",
              background: `linear-gradient(transparent, #DDE2E8)`,
            }}
          ></div>
        </TextComponents.Body>
        <TextComponents.Body
          style={{
            maxWidth: `calc(${width} - 4rem)`,
            overflowX: "scroll",
            flexWrap: "nowrap",
            whiteSpace: "nowrap",
            textOverflow: "clip",
            padding: ".2rem 0",
          }}
        >
          {getServicesNames().join(" * ")}
        </TextComponents.Body>

        <Button
          backgroundColor={theme.colors.accent}
          textColor={theme.colors.text}
          style={{ alignSelf: "flex-end" }}
          onClick={() => {
            navigate(`/vendors/${vendor.id}`);
          }}
        >
          Visit
        </Button>
      </DataWrapper>
    </Wrapper>
  );
};

SingleVendor.defaultProps = {
  // bla: 'test',
};

export default SingleVendor;
