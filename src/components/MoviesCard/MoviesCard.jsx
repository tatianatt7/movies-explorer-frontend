import { useLocation } from 'react-router-dom';
import { MOVIES_API_URL } from '../../utils/MoviesApi';
import './MoviesCard.css';

const formatDuration = (duration) => {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  return `${hours}ч ${minutes}м`;
};

const MoviesCard = ({
  movie,
  isSaved,
  onDelete,
  onSave,
}) => {
  const location = useLocation();

  const handleLikeClick = () => {
    if (isSaved(movie)) {
      onDelete(movie);
    } else {
      onSave(movie);
    }
  };

  return (
    <li className="card">
      <a className="card__link" target="_blank" href={movie.trailerLink}>
        <img
          src={location.pathname == '/saved-movies' ? movie.image : `${MOVIES_API_URL}${movie.image.url}`}
          alt={`Обложка фильма: ${movie.nameRU}`}
          className="card__image"
        />
      </a>
      <div className="card__description">
        <h2 className="card__name">{movie.nameRU}</h2>
        <span className="card__duration">{formatDuration(movie.duration)}</span>
      </div>
      {location.pathname == '/movies' ? (
        <button
          type="button"
          onClick={handleLikeClick}
          className={`card__btn ${
            isSaved(movie) ? 'card__btn-saved' : 'card__btn-unsave'
          }`}
        />
      ) : (
        <button type="button" className="card__btn-delete" onClick={() => onDelete(movie)}></button>
      )}
    </li>
  );
};

export default MoviesCard;
