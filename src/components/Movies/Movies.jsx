import { useState, useEffect } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import SearchForm from '../SearchForm/SearchForm';
import { getUrl } from '../../utils/constants';

const Movies = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    let timeout = false;
    const getWidth = () => setWidth(window.innerWidth);
    window.addEventListener('resize', () => {
      clearTimeout(timeout);
      timeout = setTimeout(getWidth, 300);
    });
    return () => {
      window.removeEventListener('resize', getWidth);
    };
  });

  function getMovies(width) {
    if (width < 768) {
      return getUrl(5);
    } else if (width < 1280) {
      return getUrl(8);
    }

    return getUrl(12);
  }

  return (
    <>
      <section className="movies">
        <div className="movies__content">
          <SearchForm />

          <MoviesCardList isSavedMoviesPage={false} movies={getMovies(width)} />
        </div>
      </section>
    </>
  );
};

export default Movies;
