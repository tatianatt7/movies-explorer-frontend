import './MoviesCard.css';

const MoviesCard = ({
  movie,
  isShowSaveBtn = true,
  isShowDeleteBtn = false,
}) => {
  return (
    <li className="card">
      <a className="card__link" target="_blank" href="/#">
        <img
          src={movie.img}
          alt={`Обложка фильма: ${movie.name}`}
          className="card__image"
        />
      </a>
      <div className="card__description">
        <h2 className="card__name">{movie.name}</h2>
        <span className="card__duration">{movie.duration}</span>
      </div>
      {isShowSaveBtn && (
        <button
          type="button"
          className={`card__btn ${
            movie.isSaved ? 'card__btn-saved' : 'card__btn-unsave'
          }`}
        />
      )}
      {isShowDeleteBtn && (
        <button type="button" className="card__btn-delete"></button>
      )}
    </li>
  );
};

export default MoviesCard;
