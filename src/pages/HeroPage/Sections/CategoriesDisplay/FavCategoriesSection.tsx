import React from "react";
import { HorizontalContainer, Section } from "./FavCategoriesSection.styles";
import TextComponents from "../../../../components/TextComponents";
import { favouriteCategories } from "../../../../static/FavouriteCategories";
import SingleFavCategory from "./SingleFavCategory";

const FavCategoriesSection = () => {
  return (
    <Section about="Best categories placed near you">
      <TextComponents.Title accent>
        Our customers favorites
      </TextComponents.Title>
      <HorizontalContainer>
        {favouriteCategories.map((category) => {
          return <SingleFavCategory category={category} />;
        })}
        <SingleFavCategory
          objectFit="contain"
          category={{
            category: "search for more",
            countNerbay: 0,
            _id: -11111,
          }}
        />
      </HorizontalContainer>
    </Section>
  );
};

export default FavCategoriesSection;
