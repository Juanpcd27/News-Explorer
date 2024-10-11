import "./SearchForm.css";

function SearchForm(handleSearchNews) {
  const onSearchNews = () => {
    e.preventDefault();
    handleSearchNews();
  };

  return (
    <form className="search__form">
      <label htmlFor="search-form" className="search__label">
        <input
          className="search__input"
          type="search"
          name="search"
          placeholder="Enter topic"
          id="search-form"
        ></input>
        <button className="submit__search-button" onSubmit={onSearchNews}>
          Search
        </button>
      </label>
    </form>
  );
}

export default SearchForm;
