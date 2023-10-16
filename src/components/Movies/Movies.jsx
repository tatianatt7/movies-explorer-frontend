import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import SearchForm from '../SearchForm/SearchForm';

import { MOVIES_API_URL, getMovies } from '../../utils/MoviesApi';
import {
  KEY_FILTRED,
  KEY_IS_SHORT,
  KEY_MOVIES,
  KEY_SEARCH,
} from '../../utils/constants';

const ERROR_MESSAGE =
  'Во время запроса произошла ошибка. Подождите немного и попробуйте ещё раз';

const Movies = ({
  loggedIn,
  api,
  movies,
  setMovies,
  savedMovies,
  setSavedMovies,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchTerm, setSearch] = useState(
    () => localStorage.getItem(KEY_SEARCH) || '',
  );
  const [isShortFilm, setIsShort] = useState(
    () => JSON.parse(localStorage.getItem(KEY_IS_SHORT)) || false,
  );
  const [filteredMovies, setFiltredMovies] = useState(() => {
    return JSON.parse(localStorage.getItem(KEY_FILTRED)) || [];
  });

  useEffect(() => {
    if (movies) {
      localStorage.setItem(KEY_MOVIES, JSON.stringify(movies));
    }

    if (searchTerm !== '') {
      console.log('search');
      handleSearch(isShortFilm);
    }
  }, [movies]);

  useEffect(() => {
    localStorage.setItem(KEY_FILTRED, JSON.stringify(filteredMovies));
  }, [filteredMovies]);

  useEffect(() => {
    localStorage.setItem(KEY_SEARCH, searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    localStorage.setItem(KEY_IS_SHORT, isShortFilm);
  }, [isShortFilm]);

  const fetchSavedMovies = async () => {
    try {
      setSavedMovies(await api.getMovies());
    } catch (e) {
      setError(ERROR_MESSAGE);
    }
  };

  const fetchMovies = async () => {
    setLoading(true);
    try {
      setMovies(await getMovies());
    } catch (e) {
      setError(ERROR_MESSAGE);
    } finally {
      setTimeout(() => setLoading(false), 600);
    }
  };

  const handleSearch = async isShort => {
    console.log({ movies, savedMovies });
    setLoading(true);
    setError('');

    if (!savedMovies.length) {
      console.log('noSaved');
      fetchSavedMovies();
    }

    if (!movies.length) {
      console.log('noMovies');
      return fetchMovies();
    }

    const s = searchTerm.toLocaleLowerCase();
    const filtered = movies.filter(({ duration, nameRU, nameEN }) => {
      const short = isShort ? duration <= 40 : true;
      const ru = nameRU.toLowerCase();
      const en = nameEN.toLowerCase();
      return short && (ru.includes(s) || en.includes(s));
    });

    setFiltredMovies(filtered);

    setTimeout(() => setLoading(false), 300);
  };

  const handleDelete = async movie => {
    const [found] = savedMovies.filter(m => m.movieId === movie.id) || [null];
    if (found) {
      try {
        await api.deleteMovie(found._id);
        setSavedMovies(savedMovies.filter(({ _id }) => _id !== found._id));
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleSave = async movie => {
    const { id, created_at, updated_at, ...data } = movie;
    try {
      const newMovie = await api.addMovie({
        ...data,
        image: `${MOVIES_API_URL}${movie.image.url}`,
        thumbnail: `${MOVIES_API_URL}${movie.image.formats.thumbnail.url}`,
        movieId: id,
      });
      setSavedMovies([...savedMovies, newMovie]);
    } catch (err) {
      console.log(`Ошибка: ${err}`);
    }
  };

  return (
    <>
      <Header loggedIn={loggedIn} />
      <section className="movies">
        <h2>Поиск фильмов</h2>
        <div className="movies__content">
          <SearchForm
            searchTerm={searchTerm}
            setSearch={setSearch}
            isShortFilm={isShortFilm}
            setIsShort={setIsShort}
            onSearch={handleSearch}
          />
          {error && !loading && <div className="movies-error">{error}</div>}
          {movies.length > 0 ? (
            <MoviesCardList
              movies={filteredMovies}
              savedMovies={savedMovies}
              onSave={handleSave}
              onDelete={handleDelete}
            />
          ) : <div className="cards">Ничего не найдено</div>}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Movies;
