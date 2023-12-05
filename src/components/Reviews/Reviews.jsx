import { fetchReviews } from '../../services/moviesApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const ReviewsById = async () => {
      try {
        const reviewsDetails = await fetchReviews(id);
        if (reviewsDetails) {
          setReviews(reviewsDetails);
        } else {
          console.log('We don`t have any reviews for the movie.');
        }
      } catch (e) {
        console.log(e);
      }
    };
    ReviewsById();
  }, [id]);

  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for the movie.</p>
      )}
    </div>
  );
};

export default Reviews;
