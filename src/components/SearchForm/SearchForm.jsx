import { useState } from 'react';
import './SearchForm.css';
import FilterBox from '../Filterbox/FilterBox';
import find from '../../images/find.svg';

const SearchForm = ({
  onSearch,
  searchTerm,
  setSearch,
  isShortFilm,
  setIsShort,
}) => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
    setErrorMessage("");
  };

  const validateSearch = () => {
    if (!searchTerm.trim()) {
      setErrorMessage("Нужно ввести ключевое слово");
      return false;
    }

    return true;
  };

  const handleCheckboxChange = (e) => {
    setIsShort(e.target.checked);
    if (validateSearch()) {
      onSearch(e.target.checked);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateSearch()) {
      onSearch(isShortFilm);
    }
  };

  return (
    <div className="search">
      <form
        className="search__form form"
        name="search-saved-movie-form"
        onSubmit={handleSubmit}
        noValidate
      >
        <input
          type="text"
          placeholder="Фильм"
          className="search__input"
          autoComplete="off"
          name="searchRequest"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button type="submit" className="search__button">
          <img src={find} alt="кнопка поиска" />
        </button>
        <FilterBox 
          onFilter={handleCheckboxChange}
          isShortFilm={isShortFilm}
        />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default SearchForm;
