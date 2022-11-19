import "./Search.css";

import React, { useContext } from "react";
import { StateContext } from "../../context/stateContext";

const Search = () => {
  const {
    states: { searchValue },
    mutations: { setSearchValue },
  } = useContext(StateContext);

  const onSearchValue = ({ target: { value } }) => {
    setSearchValue(value);
  };

  return (
    <div className="search-container">
      <input
        type={"text"}
        placeholder="What're we looking for?... 👀"
        onChange={onSearchValue}
        value={searchValue}
      />
    </div>
  );
};

export { Search };
