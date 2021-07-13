import React from "react";

function Search(props) {
  return (
    <div>
      <input
        value={props.searchValue}
        type="text"
        placeholder="Type here..."
        onChange={props.handleChange}
      />
    </div>
  );
}

export default Search;
