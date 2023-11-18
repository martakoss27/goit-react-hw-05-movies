import { fetchMoviesDetails } from 'api/themoviedb.api';
import { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { Wrapper, Article, StyledLi, StyledLink } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const { movieID } = useParams();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    setIsLoading(true);
    fetchMoviesDetails(movieID)
      .then(response => {
        setMovies(response);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  }, [movieID]);

  const getYear = () => new Date(movies.release_date).getFullYear();

  return (
    <div>
      {isLoading && 'Loading...'}
      <StyledLink to={backLinkHref}>Go back</StyledLink>
      <Wrapper>
        <img
          src={`https://image.tmdb.org/t/p/w200/${movies.poster_path}`}
          alt={movies.title}
        />
        <Article>
          <h3>
            {movies.title} ({getYear()})
          </h3>
          <p>User Score: {movies.vote_average} / 10</p>
          <h3>Overview</h3>
          <p>{movies.overview}</p>
        </Article>
      </Wrapper>
      <p>Additional information</p>
      <ul>
        <StyledLi>
          <Link to="reviews" style={{ textDecoration: 'none' }}>
            Reviews
          </Link>
        </StyledLi>
        <StyledLi>
          <Link to="cast" style={{ textDecoration: 'none' }}>
            Cast
          </Link>
        </StyledLi>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
