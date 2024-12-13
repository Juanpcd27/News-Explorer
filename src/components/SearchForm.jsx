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
    <form className="search-form" onSubmit={onSearchNews}>
      <label htmlFor="search-form" className="search-form__label">
        <input
          className="search-form__input"
          type="search"
          name="search"
          placeholder="Enter topic"
          id="search-form"
          value={query}
          onChange={handleChange}
        ></input>
        <button className="search-form__submit" type="submit">
          Search
        </button>
      </label>
    </form>
  );
}

export default SearchForm;
