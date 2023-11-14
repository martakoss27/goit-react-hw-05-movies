import { useEffect, useState } from 'react';
import { fetchMovies } from 'api/themoviedb.api';
import { MoviesList } from 'pages/Movies-List/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getTrendingMovies();
  }, []);

  function getTrendingMovies() {
    setIsLoading(true);
    fetchMovies()
      .then(response => {
        console.log(response);
        setMovies(response);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <main>
      {isLoading && 'Loading...'}
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </main>
  );
};

export default Home;
