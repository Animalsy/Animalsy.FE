import React from "react";
import { Wrapper } from "./styles";
import { SearchableType } from "../../pages/ServicesPage/ServicesPage.component";

type Props = {
  //
  searchableFilter: SearchableType;
  setSearchableFilter: React.Dispatch<React.SetStateAction<SearchableType>>;
};

const Searchable = ({ searchableFilter, setSearchableFilter }: Props) => {
  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchableFilter({
      ...searchableFilter,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (name: string) => {
    // add searchableFilter to url params
    setSearchableFilter({ ...searchableFilter, [name]: "" });
  };

  return (
    <Wrapper>
      <input
        onClick={() => handleClick("search")}
        value={searchableFilter.search}
        name="search"
        onChange={onChangeText}
        placeholder="What are you looking for? "
      />
      <input
        onClick={() => handleClick("address")}
        value={searchableFilter.address}
        name="address"
        onChange={onChangeText}
        placeholder="address"
      />
    </Wrapper>
  );
};

Searchable.defaultProps = {
  // bla: 'test',
};

export default Searchable;
