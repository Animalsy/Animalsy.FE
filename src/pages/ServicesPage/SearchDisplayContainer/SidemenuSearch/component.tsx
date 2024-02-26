import {
  CategoryLink,
  CategoryLinkText,
  CategoryLinkTitle,
  CategoryWrapper,
  Wrapper,
} from "./styles";
import { menuCategories } from "../../../../static/menuCategories";

type Props = {
  type: "services" | "specials";
};

const SidemenuSearch = (props: Props) => (
  <Wrapper>
    {menuCategories.map((categoryelement) => {
      const { category, subcategories, url } = categoryelement;
      const categoryUrl = `/${props.type}/${url}`;

      return (
        <CategoryWrapper>
          <CategoryLink to={categoryUrl}>
            <CategoryLinkTitle accent>{category}</CategoryLinkTitle>
          </CategoryLink>
          {subcategories.map((subcategory) => {
            const { name, url } = subcategory;
            const subcategoryUrl = `${categoryUrl}/${url}`;

            return (
              <CategoryLink to={subcategoryUrl}>
                <CategoryLinkText>{name}</CategoryLinkText>
              </CategoryLink>
            );
          })}
        </CategoryWrapper>
      );
    })}
  </Wrapper>
);

SidemenuSearch.defaultProps = {
  // bla: 'test',
};

export default SidemenuSearch;
