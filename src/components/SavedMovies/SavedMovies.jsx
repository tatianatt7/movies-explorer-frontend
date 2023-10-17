import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCard from '../MoviesCard/MoviesCard';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

const SavedMovies = ({ loggedIn, api, movies, setMovies }) => {
  const [filtredMovies, setFiltredMovies] = useState([]);
  const [searchTerm, setSearch] = useState('');
  const [isShortFilm, setIsShort] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const resp = await api.getMovies();
        setMovies(resp);
      } catch (e) {
        console.debug(e);
      }
    };

    if (loggedIn) {
      fetchMovies();
    }
  }, [loggedIn]);

  useEffect(() => {
    handleSearch(isShortFilm);
  }, [movies]);

  const handleDelete = async movie => {
    await api.deleteMovie(movie._id);
    setMovies(movies.filter(m => m._id !== movie._id));
  };

  const handleSearch = isShort => {
    const s = searchTerm.toLowerCase();
    const filtred = movies.filter(({ nameRU, nameEN, duration }) => {
      return (
        (isShort ? duration < 40 : true) &&
        (nameRU.toLowerCase().includes(s) || nameEN.toLowerCase().includes(s))
      );
    });
    setFiltredMovies(filtred);
  };

  return (
    <>
      <Header loggedIn={loggedIn} />
      <section className="saved-movies">
        <h2>Сохраненные фильмы</h2>
        <div className="saved-movies__content">
          <SearchForm
            searchTerm={searchTerm}
            setSearch={setSearch}
            isShortFilm={isShortFilm}
            setIsShort={setIsShort}
            onSearch={handleSearch}
          />

          <section className="cards">
            <ul className="cards__list">
              {filtredMovies.length ? (
                filtredMovies.map(movie => (
                  <MoviesCard
                    key={movie._id || movie.movieId}
                    movie={movie}
                    isSaved={() => true}
                    onDelete={handleDelete}
                  />
                ))
              ) : (
                <>
                  <li></li>
                  <li>Ничего не найдено</li>
                  <li></li>
                </>
              )}
            </ul>
          </section>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SavedMovies;
