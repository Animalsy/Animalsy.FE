import React from "react";
import { HorizontalContainer, Section } from "./FavCategoriesSection.styles";
import TextComponents from "../../TextComponents";
import { favouriteCategories } from "../../../static/FavouriteCategories";
import SingleFavCategory from "./SingleFavCategory";

const FavCategoriesSection = () => {
  return (
    <Section about="Best categories placed near you">
      <TextComponents.Body accent style={{ fontSize: ".6rem" }}>
        Our customers favorites
      </TextComponents.Body>
      <HorizontalContainer>
        {favouriteCategories.map((category) => {
          return <SingleFavCategory category={category} />;
        })}
      </HorizontalContainer>
    </Section>
  );
};

export default FavCategoriesSection;
