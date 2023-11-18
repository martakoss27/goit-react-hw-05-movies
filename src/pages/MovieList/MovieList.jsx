import { useLocation } from 'react-router-dom';
import { StyledLink, Ul, Li, Img, P } from './MovieList.styled';
import PropTypes from 'prop-types';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  const defaultMovieImg = 'https://placehold.co/500x750/png';
  return (
    <Ul>
      {movies.map(({ id, poster_path, title }) => (
        <Li key={id}>
          <StyledLink to={`/movies/${id}`} state={{ from: location }}>
            <Img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : defaultMovieImg
              }
              alt={title}
            />
            <P>{title}</P>
          </StyledLink>
        </Li>
      ))}
    </Ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
