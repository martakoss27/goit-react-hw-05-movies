import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MoviesList.module.css';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  const defaultMovieImg = 'https://placehold.co/500x750/png';

  <ul className={css.List}>
    {movies.map(({ id, poster_path, title }) => (
      <li key={id} className={css.ListItem}>
        <Link to={`/movies/${id}`} state={{ from: location }}>
          <img
            className={css.Img}
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : defaultMovieImg
            }
            alt={title}
          />
          <p className={css.Title}>{title}</p>
        </Link>
      </li>
    ))}
  </ul>;
};
MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
