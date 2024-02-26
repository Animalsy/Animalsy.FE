import { Wrapper } from "./styles";
import { SearchableType } from "../ServicesPage.component";
import DisplaySection from "./DisplaySection";
import SidemenuSearch from "./SidemenuSearch";

type Props = {
  searchable: SearchableType;
  type: "services" | "specials";
};

const SearchDisplayContainer = (props: Props) => (
  <Wrapper>
    <SidemenuSearch type={props.type} />
    <DisplaySection type={props.type} />
  </Wrapper>
);

SearchDisplayContainer.defaultProps = {
  // bla: 'test',
};

export default SearchDisplayContainer;
