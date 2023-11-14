import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchMoviesReviews } from 'api/themoviedb.api';
import css from './Reviews.module.css';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieID } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchMoviesReviews(movieID)
      .then(response => {
        setReviews(response);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  }, [movieID]);
  return (
    <div>
      {isLoading && 'Loading...'}
      {!reviews.length && <p>Sorry, no reviews for this movie...</p>}
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id} style={{ listStyle: 'none' }}>
            <p>Author: {author}</p>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
