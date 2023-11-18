import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from 'api/themoviedb.api';
import { StyledP } from './Reviews.styled';
import PropTypes from 'prop-types';

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
    <section>
      {isLoading && 'Loading...'}
      {!reviews.length && <p>Sorry, no reviews for this movie...</p>}
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id} style={{ listStyle: 'none' }}>
            <StyledP>Author: {author}</StyledP>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </section>
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
