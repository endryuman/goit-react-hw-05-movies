import { lazy } from 'react';
import { Layout } from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
// import { Homepage } from 'pages/Homepage';
const Homepage = lazy(() => import('../pages/Homepage/Homepage'));
// import { Movies } from 'pages/Movies';
const Movies = lazy(() => import('../pages/Movies/Movies'));
// import { MovieDetails } from 'pages/MovieDetails';
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
// import { Cast } from './Cast/Cast';
const Cast = lazy(() => import('./Cast/Cast'));
// import { Reviews } from './Reviews/Reviews';
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="movies" element={<Movies />}></Route>
        <Route path="/:id" element={<MovieDetails />} />
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
