import React from 'react';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Cast, NotFound, Reviews } from 'pages';
import { SharedLayout } from './SharedLayout';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="movies/:movieID" element={<MovieDetails />}>
          <Route path="/movies/:movieID/reviews" element={<Reviews />} />
          <Route path="/movies/:movieID/cast" element={<Cast />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
