import React from "react";
import SearchBarItem from "./SearchBarItem";

const SearchSideBar = ({ images }) => {
  return (
    <ul className="h-full overflow-y-scroll ps-2">
      {images.map((item, index) => (
        <SearchBarItem item={item} key={index} />
      ))}
    </ul>
  );
};

export default SearchSideBar;
