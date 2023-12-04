import { useEffect, useState } from 'react';
import { fetchSearchMovies } from '../services/moviesApi';
import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('movieName');
  const location = useLocation();

  useEffect(() => {
    if (!movieName) return;
    fetchSearchMovies(movieName).then(setMovies);
  }, [movieName]);

  const handleSubmit = e => {
    e.preventDefault();
    const keyword = e.currentTarget;
    setSearchParams({ movieName: keyword.elements.movieName.value });
  };
  console.log(movies);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="movieName" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={movie.id} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};
