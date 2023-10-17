import { useEffect, useState } from "react";
import { KEY_VISIBLE } from "../../utils/constants";
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const MoviesCardList = ({
 movies, savedMovies, onDelete, onSave
}) => {
 const [visibleCardCount, setVisibleCardCount] = useState(
    () =>
      JSON.parse(localStorage.getItem(KEY_VISIBLE)) || 8
  );
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    localStorage.setItem(KEY_VISIBLE, visibleCardCount);
  }, [visibleCardCount]);

  useEffect(() => {
    let resizeTimer;

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, 100);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const calculateCardCount = () => {
    if (windowWidth >= 1280) {
      return visibleCardCount + 3;
    }

    return visibleCardCount + 2;
  };

  const handleClickMore = () => {
    setVisibleCardCount(calculateCardCount());
  };

  useEffect(() => {
    if (windowWidth >= 1280) {
      setVisibleCardCount(12);
    } else if (windowWidth >= 768) {
      setVisibleCardCount(8);
    } else {
      setVisibleCardCount(5);
    }
  }, [windowWidth]);

  const isSaved = ({ id }) => {
    if (Array.isArray(savedMovies)) {
      return savedMovies.filter(({ movieId }) => movieId === id).length;
    }

    return false;
  };

  return (
    <section className="cards">
      <ul className="cards__list">
        {movies.slice(0, visibleCardCount).map((movie) => {
          return (
            <MoviesCard
              key={movie.id}
              movie={movie}
              isSaved={isSaved}
              onSave={onSave}
              onDelete={onDelete}
            />
          );
        })}
      </ul>
      {movies.length > visibleCardCount && (
        <button className="cards__btn-more" type="button" onClick={handleClickMore}>
          Ещё
        </button>
      )}
    </section>
  );
};

export default MoviesCardList;
