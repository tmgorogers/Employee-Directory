import React, { useContext } from "react";
import "../styles/SearchName.css";
import DataAreaContext from "../utils/DataAreaContext";

const SearchWithName = () => {
  const context = useContext(DataAreaContext);

  return (
    <div className="searchbox">
      <div className="input-group">
        <div className="input-group-pretend">
          <span className="input-group-text" id="">
            
            Search
          </span>
        </div>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="name"
          aria-label="Search"
          onChange={(e) => context.handleSearchChange(e)}
        />
      </div>
    </div>
  );
};
export default SearchWithName;
