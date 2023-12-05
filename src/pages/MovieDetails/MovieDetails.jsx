import { useEffect, useState } from 'react';
import { fetchMovieById } from '../../services/moviesApi';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { StyledDiv, StyledUl } from './movieDetails.styled';

const basePosterPath = 'https://image.tmdb.org/t/p/w500';
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MovieDetails = () => {
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

      <StyledDiv>
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
          <h2>{movie.title}</h2>
          <p>User Score: {Math.round(movie.vote_average)}</p>
          <StyledUl>
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
                  <StyledUl>
                    {movie.genres.map(genre => (
                      <li key={genre.id}>{genre.name}</li>
                    ))}
                  </StyledUl>
                </div>
              )}
            </li>
          </StyledUl>
        </div>
      </StyledDiv>
      <div>
        <h2>Additional information</h2>
        <StyledUl>
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
        </StyledUl>
        <Outlet />
      </div>
    </>
  );
};
export default MovieDetails;
