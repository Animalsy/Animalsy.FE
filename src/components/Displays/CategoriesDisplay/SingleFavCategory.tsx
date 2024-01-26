import React from "react";
import { IFavCategoryDisplay } from "../../../types/favCategoryDisplay";
import TextComponents from "../../TextComponents";
import {
  ContainerCategoryDisplay,
  ImageContainer,
} from "./FavCategoriesSection.styles";
import { squareLogo } from "../../../assets/logo";

const SingleFavCategory = ({ category }: { category: IFavCategoryDisplay }) => {
  return (
    <ContainerCategoryDisplay>
      <ImageContainer>
        <img
          src={category.image ? category.image : squareLogo}
          alt={category.category}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </ImageContainer>
      <TextComponents.Title style={{ fontSize: "1rem" }} opposite>
        {category.category}
      </TextComponents.Title>
    </ContainerCategoryDisplay>
  );
};

export default SingleFavCategory;
