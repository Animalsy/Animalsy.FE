import React from "react";
import { IFavCategoryDisplay } from "../../../../types/favCategoryDisplay";
import TextComponents from "../../../../components/TextComponents";
import {
  ContainerCategoryDisplay,
  ImageContainer,
} from "./FavCategoriesSection.styles";
import { squareLogo } from "../../../../assets/logo";

const SingleFavCategory = ({
  category,
  objectFit,
}: {
  category: IFavCategoryDisplay;
  objectFit?: "contain";
}) => {
  return (
    <ContainerCategoryDisplay>
      <ImageContainer>
        <img
          src={category.image ? category.image : squareLogo}
          alt={category.category}
          style={{
            width: "100%",
            height: "100%",
            objectFit: objectFit === "contain" ? "contain" : "cover",
          }}
        />
      </ImageContainer>
      <TextComponents.Title style={{ fontSize: "1rem" }} opposite>
        {category.category}
      </TextComponents.Title>
      {category.countNerbay > 0 && (
        <TextComponents.Subtitle accent style={{ fontSize: ".5rem" }}>
          {category.countNerbay} place{category.countNerbay > 1 && "s"} near you
        </TextComponents.Subtitle>
      )}
    </ContainerCategoryDisplay>
  );
};

export default SingleFavCategory;
