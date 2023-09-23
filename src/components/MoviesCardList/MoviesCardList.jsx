import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

const MoviesCardList = ({ movies, isShowMoreButton, isShowSaveBtn, isShowDeleteBtn = true }) => {
  return (
    <section className="cards">
      <ul className="cards__list">
        {movies.map((movie, i) => {
          return (
            <MoviesCard
              key={i}
              isShowSaveBtn={isShowSaveBtn}
              movie={movie}
              isShowDeleteBtn={isShowDeleteBtn}
            />
          );
        })}
      </ul>
      {isShowMoreButton && (
        <button className="card__btn-more" type="button">Ещё</button>
      )}
    </section>
  );
};

export default MoviesCardList;
