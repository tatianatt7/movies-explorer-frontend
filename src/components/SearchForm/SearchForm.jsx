import './SearchForm.css';
import FilterBox from '../Filterbox/FilterBox';
import find from '../../images/find.svg';

const SearchForm = () => {
  return (
    <section className="search">
      <form
        className="search__form form"
        name="search-saved-movie-form"
        onSubmit={() => {}}
        noValidate
      >
        <input
          type="text"
          placeholder="Фильм"
          className="search__input"
          required
          autoComplete="off"
          name="searchRequest"
        />
        <button type="submit" className="search__button">
          <img src={find} alt="кнопка поиска" />
        </button>
        <FilterBox isMovieFilter={() => {}} onFilter={() => {}} />
      </form>
    </section>
  );
};

export default SearchForm;
