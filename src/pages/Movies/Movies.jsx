import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByQuery } from 'api/themoviedb.api';

import { MoviesList } from 'pages/Movies-List/MoviesList';
import { MovieSearch } from 'pages/Movies-Search/MoviesSerch';

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
      <MoviesList movies={movie} />
    </>
  );
};

export default Movies;
