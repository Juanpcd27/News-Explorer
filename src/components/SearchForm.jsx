import "./SearchForm.css";
import { useState } from "react";

function SearchForm({ handleSearchNews }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const onSearchNews = (e) => {
    e.preventDefault();
    handleSearchNews(query);
  };

  return (
    <form className="search__form" onSubmit={onSearchNews}>
      <label htmlFor="search-form" className="search__label">
        <input
          className="search__input"
          type="search"
          name="search"
          placeholder="Enter topic"
          id="search-form"
          value={query}
          onChange={handleChange}
        ></input>
        <button className="submit__search-button" type="submit">
          Search
        </button>
      </label>
    </form>
  );
}

export default SearchForm;
