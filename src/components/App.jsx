import React from 'react';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from './MainPage/MainPage';
import { Cast } from '../pages/Cast/Cast';
import { Reviews } from 'pages/Reviews/Rewievs';
import { NotFound } from 'pages/NotFound/NotFound';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MoviesDetails = lazy(() =>
  import('../pages/Movies-Details/MoviesDetails')
);
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="movies/:movieID" element={<MoviesDetails />}>
          <Route path="/movies/:movieID/reviews" element={<Reviews />} />
          <Route path="/movies/:movieID/cast" element={<Cast />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
