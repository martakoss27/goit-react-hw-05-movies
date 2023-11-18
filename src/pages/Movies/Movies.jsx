import { MovieList } from 'pages/MovieList';
import { MovieSearch } from 'pages/MovieSearch';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByQuery } from 'api/themoviedb.api';

const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [searchParam] = useSearchParams();
  const query = searchParam.get('searchQuery');

  useEffect(() => {
    if (!query) return;
    fetchByQuery(query)
      .then(res => {
        setMovie(res);
      })
      .catch(error => {
        alert('Oops, something went wrong');
        console.error(error);
      });
  }, [query]);

  return (
    <>
      <MovieSearch />
      <MovieList movies={movie} />
    </>
  );
};

export default Movies;
