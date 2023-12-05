import { fetchCast } from '../../services/moviesApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const basePosterPath = 'https://image.tmdb.org/t/p/w500';
const defaultImgUrl =
  'https://www.ysveldfysio.nl/wp-content/uploads/2023/09/istockphoto-1018999828-612x612-1.jpeg';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const castById = async () => {
      try {
        const castDetails = await fetchCast(id);
        if (castDetails) {
          setCast(castDetails);
        } else {
          console.log('No cast details available.');
        }
      } catch (e) {
        console.log(e);
      }
    };
    castById();
  }, [id]);

  return (
    <div>
      {cast.length > 0 ? (
        <ul>
          {cast.map(({ id, profile_path, original_name, character }) => (
            <li key={id}>
              <img
                src={
                  profile_path ? basePosterPath + profile_path : defaultImgUrl
                }
                width={150}
                alt={original_name}
              />
              <p>{original_name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have info about cast for the movie.</p>
      )}
    </div>
  );
};
export default Cast;
