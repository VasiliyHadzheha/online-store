import React from "react";
import './index.sass';
import ValueFilter from './ValueFilter';
import DiapasoneFilter from './DiapasoneFilter';
import Search from "./Search";


function FilterContainer() {
  return(
    <div className="filter-container">
      <ValueFilter/>
      <DiapasoneFilter/>
      <Search/>
    </div>
  );
}

export default FilterContainer;