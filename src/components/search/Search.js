import React from "react";
import "./Search.css";

const SearchBox = ({changed}) => (
  <section className="search-main" role="search">
    <strong>Search Robofriends</strong>
    <input
      className="search-box"
      type="search"
      name="s"
      id="searchbar"
      placeholder="Search..."
      maxLength="200"
      onChange={changed}
    />
    <h1 className="title">Robo Friends</h1>
  </section>
);

export default SearchBox;
