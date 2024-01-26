import React from "react";
import { IEstablishment } from "../../../types/establishment";
import {
  DisplayContainer,
  ImageContainer,
} from "./SmallEstablishmentDisplay.styles";
import TextComponents from "../../TextComponents";
import { useTheme } from "styled-components";
import { rectLogo } from "../../../assets/logo";
import { SmallContent } from "../../../pages/HeroPage/HeroPage.styles";
import { AiFillStar } from "react-icons/ai";

export const SmallEstablishmentDisplay = ({
  establishment,
}: {
  establishment: IEstablishment;
}) => {
  const theme = useTheme();
  const color = theme.colors.primaryDark;
  return (
    <DisplayContainer style={{ maxHeight: "2rem" }}>
      <ImageContainer aspectRatio="1/1" style={{}}>
        <img
          src={establishment.image ? establishment.image : rectLogo}
          alt={establishment.establishmentName}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </ImageContainer>
      <SmallContent style={{ marginTop: 0, flexDirection: "row" }}>
        <TextComponents.Body
          color={color}
          style={{
            marginLeft: "0.2rem",
          }}
        >
          {establishment.establishmentName}
        </TextComponents.Body>
        <TextComponents.Body
          color={color}
          style={{
            marginLeft: "0.2rem",
          }}
        >
          {establishment.rating} <AiFillStar color={color} />
        </TextComponents.Body>
      </SmallContent>
    </DisplayContainer>
  );
};
