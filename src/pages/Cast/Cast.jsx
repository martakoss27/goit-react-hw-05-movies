import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './Cast.module.css';

import { fetchMoviesCredits } from 'api/themoviedb.api';
export const Cast = () => {
  const [casts, setCasts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieID } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchMoviesCredits(movieID)
      .then(response => {
        setCasts(response);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  }, [movieID]);
  return (
    <section>
      {isLoading && 'Loading...'}
      {!casts.length && <p>Sorry, no data</p>}
      <ul className={css.CastList}>
        {casts.map(({ id, name, profile_path, character }) => (
          <li className={css.CastListItem} key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
              alt={name}
            />
            <p>
              <b>{name}</b>
            </p>
            <p>{character}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

Cast.propTypes = {
  casts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      profile_path: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ),
};
