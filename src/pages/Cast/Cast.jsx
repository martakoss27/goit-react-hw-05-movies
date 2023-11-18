import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesCredits } from 'api/themoviedb.api';
import { StyledLi, StyledUL } from './Cast.styled';
import PropTypes from 'prop-types';

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
      <StyledUL>
        {casts.map(({ id, name, profile_path, character }) => (
          <StyledLi key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
              alt={name}
            />
            <p>
              <b>{name}</b>
            </p>
            <p>{character}</p>
          </StyledLi>
        ))}
      </StyledUL>
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
