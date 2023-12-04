import axios from 'axios';

// const KEY = 'c7801c3e17ad740cf89f935e2a6b6746';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function fetchTrendingMovies() {
  const response = await axios('trending/movie/day?language=en-US', {
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzgwMWMzZTE3YWQ3NDBjZjg5ZjkzNWUyYTZiNjc0NiIsInN1YiI6IjY1NmMzOWJlODgwNTUxMDBlMzZmYTdkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CBklsB7VSKiGOyCjS1g6Ulss8VBkW1iB63hF1IFq048',
    },
  });
  return response.data.results;
}

export async function fetchSearchMovies(movieName) {
  const response = await axios(
    `search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
    {
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzgwMWMzZTE3YWQ3NDBjZjg5ZjkzNWUyYTZiNjc0NiIsInN1YiI6IjY1NmMzOWJlODgwNTUxMDBlMzZmYTdkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CBklsB7VSKiGOyCjS1g6Ulss8VBkW1iB63hF1IFq048',
      },
    }
  );
  console.log(response.data.results);
  return response.data.results;
}

export async function fetchMovieById(id) {
  const response = await axios(`movie/${id}?language=en-US`, {
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzgwMWMzZTE3YWQ3NDBjZjg5ZjkzNWUyYTZiNjc0NiIsInN1YiI6IjY1NmMzOWJlODgwNTUxMDBlMzZmYTdkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CBklsB7VSKiGOyCjS1g6Ulss8VBkW1iB63hF1IFq048',
    },
  });
  console.log(response.data);
  return response.data;
}
