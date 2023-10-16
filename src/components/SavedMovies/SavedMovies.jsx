import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';
import { getUrl } from '../../utils/constants';

const SavedMovies = () => {
  return (
    <>
      <section className="saved-movies">
        <h2>Сохраненные фильмы</h2>
        <div className="saved-movies__content">
          <SearchForm />
          <MoviesCardList
            isSavedMoviesPage={true}
            movies={getUrl(3)}
            isShowSaveBtn={false}
            isShowDeleteBtn={true}
            savedMovies={[]}
            onDelete={() => {}}
            isShowMoreButton={false}
          />
        </div>
      </section>
    </>
  );
};

export default SavedMovies;
