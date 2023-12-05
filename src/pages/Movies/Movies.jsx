import { useEffect, useState } from 'react';
import { fetchSearchMovies } from '../../services/moviesApi';
import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { StyledUl } from './movies.styled';

const Movies = () => {
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
      <StyledUl>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </StyledUl>
      <Outlet />
    </>
  );
};
export default Movies;
