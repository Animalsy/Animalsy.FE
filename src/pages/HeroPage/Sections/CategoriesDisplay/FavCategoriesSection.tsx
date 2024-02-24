import {
  HorizontalContainer,
  Section,
  SectionContainer,
} from "./FavCategoriesSection.styles";
import TextComponents from "../../../../components/TextComponents";
import { favouriteCategories } from "../../../../static/FavouriteCategories";
import SingleFavCategory from "./SingleFavCategory";

const FavCategoriesSection = () => {
  return (
    <Section about="Best categories placed near you">
      <SectionContainer>
        <TextComponents.Title accent style={{ textAlign: "center" }}>
          Our customers favorites
        </TextComponents.Title>
        <HorizontalContainer>
          {favouriteCategories.map((category, i) => {
            return <SingleFavCategory category={category} key={i} />;
          })}
        </HorizontalContainer>
      </SectionContainer>
    </Section>
  );
};

export default FavCategoriesSection;
