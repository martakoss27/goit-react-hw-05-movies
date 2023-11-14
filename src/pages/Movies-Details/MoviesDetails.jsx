import { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { fetchMoviesDetails } from 'api/themoviedb.api';
import css from './MoviesDetails.module.css';

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
    <div className={css.Wrapper}>
      {isLoading && 'Loading...'}
      <Link className={css.LinkBack} to={backLinkHref}>
        Go back
      </Link>
      <div className={css.Article}>
        <img
          src={`https://image.tmdb.org/t/p/w200/${movies.poster_path}`}
          alt={movies.title}
        />
        <div>
          <h3>
            {movies.title} ({getYear()})
          </h3>
          <p>User Score: {movies.vote_average} / 10</p>
          <h3>Overview</h3>
          <p>{movies.overview}</p>
        </div>
      </div>
      <p>Additional information</p>
      <ul>
        <li className={css.ListItem}>
          <Link to="reviews" style={{ textDecoration: 'none' }}>
            Reviews
          </Link>
        </li>
        <li className={css.ListItem}>
          <Link to="cast" style={{ textDecoration: 'none' }}>
            Cast
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
