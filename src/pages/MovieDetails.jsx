import { useEffect, useState } from 'react';
import { fetchMovieById } from '../services/moviesApi';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';

const basePosterPath = 'https://image.tmdb.org/t/p/w500';
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export const MovieDetails = () => {
  const [movie, setMovie] = useState('');
  const { id } = useParams();
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    const checkMovieById = async () => {
      try {
        const movieDetails = await fetchMovieById(id);
        setMovie(movieDetails);
      } catch (e) {
        console.log(e);
      }
    };
    checkMovieById();
  }, [id]);

  return (
    <>
      <Link to={backLink}>Go back</Link>

      <div>
        {
          <img
            src={
              movie.poster_path
                ? [basePosterPath + movie.poster_path]
                : defaultImg
            }
            width={250}
            alt="poster"
          />
        }
        <div>
          <h2>{movie.original_title}</h2>
          <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
          <ul>
            {movie.overview && (
              <li>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
              </li>
            )}
            <li>
              {movie.genres && movie.genres.length > 0 && (
                <div>
                  <h4>Genres</h4>
                  <ul>
                    {movie.genres.map(genre => (
                      <li key={genre.id}>{genre.name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink state={location.state} to="cast">
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink state={location.state} to="reviews">
              Review
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};
