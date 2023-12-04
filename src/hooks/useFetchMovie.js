import { fetchMovieById } from '../services/moviesApi';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const useFetchMovie = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchMovieById(id).then(setMovie);
  }, [id]);

  return movie;
};
