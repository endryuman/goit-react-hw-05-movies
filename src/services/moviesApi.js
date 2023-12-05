import axios from 'axios';

const API_KEY = 'c7801c3e17ad740cf89f935e2a6b6746';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function fetchTrendingMovies() {
  const response = await axios(`trending/movie/week?api_key=${API_KEY}`);
  return response.data.results;
}

export async function fetchSearchMovies(movieName) {
  const response = await axios(
    `search/movie?api_key=${API_KEY}&query=${movieName}&language=en-US&page=1&include_adult=false`
  );
  return response.data.results;
}

export async function fetchMovieById(id) {
  const response = await axios(`movie/${id}?api_key=${API_KEY}&language=en-US`);
  return response.data;
}

export const fetchCast = async id => {
  const response = await axios(
    `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
};

export const fetchReviews = async id => {
  const response = await axios(
    `movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return response.data.results;
};
