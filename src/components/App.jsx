import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Homepage } from 'pages/Homepage';
import { Movies } from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="movies" element={<Movies />}></Route>
        <Route path="movies/:id" element={<MovieDetails />} />
        <Route path="/:id" element={<MovieDetails />} />
      </Route>
    </Routes>
  );
};
