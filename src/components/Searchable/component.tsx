import React, { useEffect, useState } from "react";
import { Wrapper } from "./styles";

type Props = {
  //
  searchableFilter: string;
  setSearchableFilter: React.Dispatch<React.SetStateAction<string>>;
};

const Searchable = ({ searchableFilter, setSearchableFilter }: Props) => {
  const [searchable, setSearchable] = useState(searchableFilter);
  useEffect(() => {
    setSearchableFilter(searchable);
  }, [searchable]);
  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchable(e.target.value);
  };

  return (
    <Wrapper>
      <input onChange={onChangeText} placeholder="What are you looking for? " />
      <input onChange={onChangeText} placeholder="address" />
    </Wrapper>
  );
};

Searchable.defaultProps = {
  // bla: 'test',
};

export default Searchable;
