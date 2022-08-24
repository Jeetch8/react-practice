import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/globalContext";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("cat");
  const { changeSearchValue } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    changeSearchValue(inputValue);
  };
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};

export default SearchBar;
